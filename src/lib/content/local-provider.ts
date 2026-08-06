import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import type {
  ContentProvider,
  ContinuingEducation,
  Discipline,
  Inquiry,
  LeadershipProgram,
  Profile,
  Project,
  ProjectStatus,
} from "./types";

/* ---------------------------------------------------------------------------
 * Local file provider — the default.
 *
 * Reads /content/projects/*.md (front-matter + body) and /content/*.json.
 * No credentials, no network, works offline, diffs nicely in git.
 * ------------------------------------------------------------------------- */

const CONTENT_DIR = path.join(process.cwd(), "content");
const PROJECTS_DIR = path.join(CONTENT_DIR, "projects");

function asArray(v: unknown): string[] {
  if (Array.isArray(v)) return v.map(String);
  if (typeof v === "string" && v.trim()) return v.split(",").map((s) => s.trim());
  return [];
}

async function readJson<T>(file: string, fallback: T): Promise<T> {
  try {
    const raw = await fs.readFile(path.join(CONTENT_DIR, file), "utf8");
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function parseProject(slug: string, raw: string): Project {
  const { data, content } = matter(raw);
  return {
    id: slug,
    slug,
    title: String(data.title ?? slug),
    summary: String(data.summary ?? ""),
    disciplines: asArray(data.disciplines),
    status: (data.status ?? "published") as ProjectStatus,
    featured: Boolean(data.featured),
    date: String(data.date ?? new Date().toISOString().slice(0, 10)),
    client: data.client ? String(data.client) : undefined,
    role: data.role ? String(data.role) : undefined,
    tools: asArray(data.tools),
    cover: data.cover
      ? {
          url: String(data.cover.url ?? data.cover),
          alt: String(data.cover.alt ?? data.title ?? slug),
          caption: data.cover.caption ? String(data.cover.caption) : undefined,
        }
      : undefined,
    gallery: Array.isArray(data.gallery)
      ? data.gallery.map((g: Record<string, unknown>) => ({
          url: String(g.url),
          alt: String(g.alt ?? ""),
          caption: g.caption ? String(g.caption) : undefined,
        }))
      : [],
    links: Array.isArray(data.links)
      ? data.links.map((l: Record<string, unknown>) => ({
          label: String(l.label),
          href: String(l.href),
        }))
      : [],
    body: content.trim(),
    marginalia: asArray(data.marginalia),
    order: typeof data.order === "number" ? data.order : undefined,
  };
}

async function loadAll(): Promise<Project[]> {
  let files: string[];
  try {
    files = await fs.readdir(PROJECTS_DIR);
  } catch {
    return [];
  }
  const projects = await Promise.all(
    files
      .filter((f) => f.endsWith(".md"))
      .map(async (f) => {
        const raw = await fs.readFile(path.join(PROJECTS_DIR, f), "utf8");
        return parseProject(f.replace(/\.md$/, ""), raw);
      })
  );
  return projects.sort((a, b) => {
    if (a.order != null && b.order != null && a.order !== b.order) return a.order - b.order;
    return b.date.localeCompare(a.date);
  });
}

export const localProvider: ContentProvider = {
  name: "local",

  async listProjects(opts = {}) {
    const all = await loadAll();
    let out = opts.includeDrafts ? all : all.filter((p) => p.status === "published");
    if (opts.discipline && opts.discipline !== "all") {
      out = out.filter((p) => p.disciplines.includes(opts.discipline as string));
    }
    return typeof opts.limit === "number" ? out.slice(0, opts.limit) : out;
  },

  async getProject(slug) {
    const all = await loadAll();
    return all.find((p) => p.slug === slug) ?? null;
  },

  async listDisciplines() {
    const declared = await readJson<Discipline[]>("disciplines.json", []);
    if (declared.length) return declared;
    // Derive from the projects themselves if no manifest exists.
    const all = await loadAll();
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

  async getProfile() {
    return readJson<Profile>("profile.json", {
      name: "Your Name",
      title: "Multidisciplinary practice",
      statement: "",
      bio: [],
      socials: [],
    });
  },

  async getContinuingEducation() {
    return readJson<ContinuingEducation | null>("continuing-education.json", null);
  },

  async listLeadershipPrograms() {
    return readJson<LeadershipProgram[]>("leadership-programs.json", []);
  },

  async createInquiry(input: Inquiry) {
    // The local provider has nowhere durable to put this. Log it so nothing is
    // silently swallowed in development, and report honestly that it was not
    // persisted. Swap CONTENT_SOURCE=airtable to capture inquiries for real.
    console.info("[inquiry:local] not persisted —", JSON.stringify(input));
    return { ok: false };
  },
};
