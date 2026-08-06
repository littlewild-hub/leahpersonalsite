import type {
  ContentProvider,
  Discipline,
  Inquiry,
  Profile,
  Project,
  ProjectAsset,
  ProjectStatus,
} from "./types";

/* ---------------------------------------------------------------------------
 * Airtable provider.
 *
 * A complete REST implementation, inert until CONTENT_SOURCE=airtable and the
 * credentials are set. See docs/AIRTABLE.md for the base schema it expects.
 *
 * Field names are read from FIELD below, so if your base already uses
 * different column names you change them in one place rather than hunting
 * through the code.
 * ------------------------------------------------------------------------- */

const API = "https://api.airtable.com/v0";

const FIELD = {
  title: "Title",
  slug: "Slug",
  summary: "Summary",
  disciplines: "Disciplines",
  status: "Status",
  featured: "Featured",
  date: "Date",
  client: "Client",
  role: "Role",
  tools: "Tools",
  cover: "Cover",
  gallery: "Gallery",
  links: "Links",
  body: "Body",
  marginalia: "Marginalia",
  order: "Order",
  name: "Name",
  blurb: "Blurb",
} as const;

interface AirtableAttachment {
  url: string;
  filename?: string;
  width?: number;
  height?: number;
}
interface AirtableRecord {
  id: string;
  fields: Record<string, unknown>;
}
interface AirtableList {
  records: AirtableRecord[];
  offset?: string;
}

function env(key: string): string | undefined {
  const v = process.env[key];
  return v && v.trim() ? v.trim() : undefined;
}

function requireEnv(key: string): string {
  const v = env(key);
  if (!v) {
    throw new Error(
      `[airtable] Missing ${key}. Set it in .env.local, or set CONTENT_SOURCE=local to use file-based content.`
    );
  }
  return v;
}

async function fetchAll(table: string): Promise<AirtableRecord[]> {
  const key = requireEnv("AIRTABLE_API_KEY");
  const base = requireEnv("AIRTABLE_BASE_ID");
  const out: AirtableRecord[] = [];
  let offset: string | undefined;

  do {
    const url = new URL(`${API}/${base}/${encodeURIComponent(table)}`);
    url.searchParams.set("pageSize", "100");
    if (offset) url.searchParams.set("offset", offset);

    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${key}` },
      // Cache at the data layer; bust it via /api/revalidate from an
      // Airtable automation so edits appear without a redeploy.
      next: { revalidate: 300, tags: ["content", `airtable:${table}`] },
    });

    if (!res.ok) {
      throw new Error(`[airtable] ${table} responded ${res.status}: ${await res.text()}`);
    }
    const page = (await res.json()) as AirtableList;
    out.push(...page.records);
    offset = page.offset;
  } while (offset);

  return out;
}

const str = (v: unknown, fallback = ""): string =>
  typeof v === "string" ? v : v == null ? fallback : String(v);

const strArray = (v: unknown): string[] =>
  Array.isArray(v) ? v.map(String) : typeof v === "string" && v.trim() ? v.split(",").map((s) => s.trim()) : [];

const slugify = (s: string) =>
  s.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

function toAssets(v: unknown): ProjectAsset[] {
  if (!Array.isArray(v)) return [];
  return (v as AirtableAttachment[])
    .filter((a) => a && typeof a.url === "string")
    .map((a) => ({
      url: a.url,
      alt: a.filename ?? "",
      width: a.width,
      height: a.height,
    }));
}

/** Links stored as one "Label|https://url" per line. */
function toLinks(v: unknown) {
  return str(v)
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [label, href] = line.split("|").map((s) => s.trim());
      return href ? { label, href } : { label: line, href: line };
    });
}

function toProject(rec: AirtableRecord): Project {
  const f = rec.fields;
  const title = str(f[FIELD.title], "Untitled");
  const gallery = toAssets(f[FIELD.gallery]);
  const cover = toAssets(f[FIELD.cover])[0];

  return {
    id: rec.id,
    slug: str(f[FIELD.slug]) || slugify(title),
    title,
    summary: str(f[FIELD.summary]),
    disciplines: strArray(f[FIELD.disciplines]).map(slugify),
    status: (str(f[FIELD.status], "published").toLowerCase() as ProjectStatus) ?? "published",
    featured: Boolean(f[FIELD.featured]),
    date: str(f[FIELD.date], new Date().toISOString().slice(0, 10)),
    client: str(f[FIELD.client]) || undefined,
    role: str(f[FIELD.role]) || undefined,
    tools: strArray(f[FIELD.tools]),
    cover: cover ? { ...cover, alt: cover.alt || title } : undefined,
    gallery,
    links: toLinks(f[FIELD.links]),
    body: str(f[FIELD.body]),
    marginalia: str(f[FIELD.marginalia]).split("\n").map((s) => s.trim()).filter(Boolean),
    order: typeof f[FIELD.order] === "number" ? (f[FIELD.order] as number) : undefined,
  };
}

export const airtableProvider: ContentProvider = {
  name: "airtable",

  async listProjects(opts = {}) {
    const table = env("AIRTABLE_PROJECTS_TABLE") ?? "Projects";
    const records = await fetchAll(table);
    let out = records.map(toProject);

    if (!opts.includeDrafts) out = out.filter((p) => p.status === "published");
    if (opts.discipline && opts.discipline !== "all") {
      out = out.filter((p) => p.disciplines.includes(opts.discipline as string));
    }
    out.sort((a, b) => {
      if (a.order != null && b.order != null && a.order !== b.order) return a.order - b.order;
      return b.date.localeCompare(a.date);
    });
    return typeof opts.limit === "number" ? out.slice(0, opts.limit) : out;
  },

  async getProject(slug) {
    const all = await this.listProjects({ includeDrafts: true });
    return all.find((p) => p.slug === slug) ?? null;
  },

  async listDisciplines(): Promise<Discipline[]> {
    const table = env("AIRTABLE_DISCIPLINES_TABLE");
    if (table) {
      const records = await fetchAll(table);
      return records.map((r) => {
        const name = str(r.fields[FIELD.name], "Untitled");
        return {
          id: r.id,
          slug: str(r.fields[FIELD.slug]) || slugify(name),
          name,
          blurb: str(r.fields[FIELD.blurb]) || undefined,
        };
      });
    }
    // No dedicated table — derive from the select values actually in use.
    const all = await this.listProjects();
    const seen = new Map<string, Discipline>();
    for (const p of all) {
      for (const d of p.disciplines) {
        if (!seen.has(d)) {
          seen.set(d, {
            id: d,
            slug: d,
            name: d.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
          });
        }
      }
    }
    return [...seen.values()];
  },

  async getProfile(): Promise<Profile> {
    const table = env("AIRTABLE_PROFILE_TABLE");
    if (!table) throw new Error("[airtable] AIRTABLE_PROFILE_TABLE is not set.");
    const [rec] = await fetchAll(table);
    if (!rec) throw new Error(`[airtable] ${table} is empty — add one profile row.`);
    const f = rec.fields;
    return {
      name: str(f["Name"], "Your Name"),
      title: str(f["Title"]),
      location: str(f["Location"]) || undefined,
      email: str(f["Email"]) || undefined,
      statement: str(f["Statement"]),
      bio: str(f["Bio"]).split("\n\n").map((s) => s.trim()).filter(Boolean),
      socials: toLinks(f["Socials"]),
      availability: str(f["Availability"]) || undefined,
    };
  },

  async createInquiry(input: Inquiry) {
    const table = env("AIRTABLE_INQUIRIES_TABLE") ?? "Inquiries";
    const key = requireEnv("AIRTABLE_API_KEY");
    const base = requireEnv("AIRTABLE_BASE_ID");

    const res = await fetch(`${API}/${base}/${encodeURIComponent(table)}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              Name: input.name,
              Email: input.email,
              Subject: input.subject ?? "",
              Message: input.message,
              Source: input.source ?? "website",
              Status: "New",
              "Received At": new Date().toISOString(),
            },
          },
        ],
      }),
    });

    if (!res.ok) {
      console.error("[airtable] inquiry failed", res.status, await res.text());
      return { ok: false };
    }
    const json = (await res.json()) as AirtableList;
    return { ok: true, id: json.records?.[0]?.id };
  },
};
