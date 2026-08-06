/* ---------------------------------------------------------------------------
 * The domain model.
 *
 * These types are the contract between the site and whatever is storing the
 * content. Nothing in src/app or src/components may import from a specific
 * provider — they import from "@/lib/content" and receive these shapes. That
 * is what makes the local -> Airtable migration a one-file change.
 * ------------------------------------------------------------------------- */

export type ProjectStatus = "published" | "draft" | "archived";

/** Broad buckets a multidisciplinary practice moves between. */
export interface Discipline {
  id: string;
  /** url-safe key, e.g. "systems-design" */
  slug: string;
  /** display name, e.g. "Systems Design" */
  name: string;
  /** one-line description shown in the filter margin */
  blurb?: string;
}

export interface ProjectAsset {
  url: string;
  alt: string;
  /** optional handwritten-style caption in the margin */
  caption?: string;
  width?: number;
  height?: number;
}

export interface ProjectLink {
  label: string;
  href: string;
}

/** A single leaf of the notebook. */
export interface Project {
  id: string;
  slug: string;
  title: string;
  /** the one-sentence claim, shown under the title */
  summary: string;
  /** discipline slugs — a project may sit in more than one */
  disciplines: string[];
  status: ProjectStatus;
  featured: boolean;
  /** ISO date; drives ordering and the year stamp */
  date: string;
  /** where the work happened */
  client?: string;
  role?: string;
  /** free-form technique tags: "Figma", "TypeScript", "Risograph" ... */
  tools: string[];
  cover?: ProjectAsset;
  gallery: ProjectAsset[];
  links: ProjectLink[];
  /** long-form body. Markdown-ish; rendered as paragraphs. */
  body: string;
  /** short annotations that sit in the outer margin of the detail page */
  marginalia: string[];
  /** manual sort weight; lower floats to the top within a date group */
  order?: number;
}

export interface Profile {
  name: string;
  /** "Designer, engineer, and ___" */
  title: string;
  location?: string;
  email?: string;
  /** the opening paragraph of the codex */
  statement: string;
  /** longer About-page prose, paragraph per entry */
  bio: string[];
  socials: ProjectLink[];
  /** currently-open-to line on the contact page */
  availability?: string;
}

/** A named bucket of hours within the continuing-education ledger. */
export interface EducationCategory {
  name: string;
  hours: number;
}

/** Aggregate summary of independent/continuing-education training — a tally, not a per-course list. */
export interface ContinuingEducation {
  totalHours: number;
  trainingCount: number;
  providerCount: number;
  /** ISO dates spanning the earliest and latest logged training. */
  since: string;
  through: string;
  /** Highest-hour categories first. */
  categories: EducationCategory[];
}

/** A completed civic/leadership program — weightier than a CE credit, lighter than a folio. */
export interface LeadershipProgram {
  name: string;
  org?: string;
  /** null when undated */
  year: string | null;
  href?: string;
}

export interface Inquiry {
  name: string;
  email: string;
  subject?: string;
  message: string;
  source?: string;
}

/* ---------------------------------------------------------------------------
 * The provider contract.
 *
 * Implement this interface once per backend. Everything is async and
 * read-mostly; `createInquiry` is the single write, and is optional so a
 * read-only source can decline it.
 * ------------------------------------------------------------------------- */
export interface ContentProvider {
  readonly name: string;
  listProjects(opts?: {
    discipline?: string;
    includeDrafts?: boolean;
    limit?: number;
  }): Promise<Project[]>;
  getProject(slug: string): Promise<Project | null>;
  listDisciplines(): Promise<Discipline[]>;
  getProfile(): Promise<Profile>;
  createInquiry?(input: Inquiry): Promise<{ ok: boolean; id?: string }>;
  /** Optional — a source with no independent-training ledger simply omits this. */
  getContinuingEducation?(): Promise<ContinuingEducation | null>;
  /** Optional — completed leadership/civic programs, listed separately from the ledger. */
  listLeadershipPrograms?(): Promise<LeadershipProgram[]>;
}
