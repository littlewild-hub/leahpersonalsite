import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { content } from "@/lib/content";
import { Paper, Marginalia, Field } from "@/components/notebook/paper";
import { Divider, InkRule } from "@/components/notebook/ornaments";
import { Badge } from "@/components/ui/badge";
import { formatMonthYear } from "@/lib/utils";

export const revalidate = 300;

export async function generateStaticParams() {
  const projects = await content.listProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await content.getProject(slug);
  if (!project) return { title: "Not found" };
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: project.cover ? [{ url: project.cover.url }] : undefined,
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [project, disciplines, all] = await Promise.all([
    content.getProject(slug),
    content.listDisciplines(),
    content.listProjects(),
  ]);

  if (!project || project.status === "archived") notFound();

  const nameFor = (s: string) => disciplines.find((d) => d.slug === s)?.name ?? s;
  const idx = all.findIndex((p) => p.slug === project.slug);
  const next = idx >= 0 ? all[(idx + 1) % all.length] : null;

  const paragraphs = project.body.split(/\n{2,}/).map((p) => p.trim()).filter(Boolean);

  return (
    <article className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
      <Link href="/work" className="link-ink font-note text-xs uppercase tracking-[0.16em]">
        ← Back to the folios
      </Link>

      {/* ---- Head ------------------------------------------------------ */}
      <header className="relative mt-8 max-w-3xl">
        <p className="folio text-verdigris-ink">{formatMonthYear(project.date)}</p>
        <h1 className="mt-3 font-hand text-[clamp(2.25rem,5.5vw,3.75rem)] font-semibold leading-[0.98] text-ink">
          {project.title}
        </h1>
        <p className="mt-4 max-w-2xl font-hand text-[clamp(1.15rem,2.2vw,1.5rem)] italic leading-snug text-ink-soft">
          {project.summary}
        </p>

        {project.marginalia[0] && <Marginalia side="right">{project.marginalia[0]}</Marginalia>}
      </header>

      <InkRule className="mt-10" tone="chalk" />

      {/* ---- Plate ----------------------------------------------------- */}
      {project.cover && (
        <figure className="mt-10">
          <Paper className="overflow-hidden p-2" askew={false}>
            <div className="relative aspect-16/9 w-full overflow-hidden">
              <Image
                src={project.cover.url}
                alt={project.cover.alt}
                fill
                priority
                unoptimized={project.cover!.url.endsWith(".svg")}
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover saturate-[0.9]"
              />
            </div>
          </Paper>
          {project.cover.caption && (
            <figcaption className="folio mt-2 text-ink-faint">{project.cover.caption}</figcaption>
          )}
        </figure>
      )}

      {/* ---- Body + apparatus ------------------------------------------ */}
      <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_16rem]">
        <div className="relative max-w-2xl">
          {paragraphs.length ? (
            paragraphs.map((p, i) => (
              <p
                key={i}
                className={`text-[1.075rem] leading-[1.8] text-ink ${i === 0 ? "dropcap" : "mt-6"}`}
              >
                {p}
              </p>
            ))
          ) : (
            <p className="italic text-ink-faint">No notes recorded for this folio yet.</p>
          )}

          {project.marginalia.slice(1).map((m, i) => (
            <Marginalia key={i} side="right" className={i === 0 ? "top-1/3" : "top-2/3"}>
              {m}
            </Marginalia>
          ))}
        </div>

        {/* Apparatus: the archivist's index card */}
        <aside>
          <Paper ground="ruled" className="p-5" folio="apparatus" askew="right">
            <dl className="space-y-4">
              {project.client && <Field label="Commissioned by">{project.client}</Field>}
              {project.role && <Field label="Hand">{project.role}</Field>}
              {project.disciplines.length > 0 && (
                <Field label="Disciplines">
                  <span className="flex flex-wrap gap-1.5 pt-0.5">
                    {project.disciplines.map((d) => (
                      <Link key={d} href={`/work?discipline=${d}`} className="no-underline">
                        <Badge tone="plate">{nameFor(d)}</Badge>
                      </Link>
                    ))}
                  </span>
                </Field>
              )}
              {project.tools.length > 0 && (
                <Field label="Instruments">
                  <span className="flex flex-wrap gap-1.5 pt-0.5">
                    {project.tools.map((t) => (
                      <Badge key={t} tone="wash">{t}</Badge>
                    ))}
                  </span>
                </Field>
              )}
              {project.links.length > 0 && (
                <Field label="Elsewhere">
                  <ul className="space-y-1 pt-0.5">
                    {project.links.map((l) => (
                      <li key={l.href}>
                        <a
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-ink text-[0.92rem]"
                        >
                          {l.label} ↗
                        </a>
                      </li>
                    ))}
                  </ul>
                </Field>
              )}
            </dl>
          </Paper>
        </aside>
      </div>

      {/* ---- Plates ---------------------------------------------------- */}
      {project.gallery.length > 0 && (
        <section className="mt-20">
          <Divider className="mb-10" />
          <h2 className="folio mb-6 text-ink-faint">Plates</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {project.gallery.map((g, i) => (
              <figure key={g.url}>
                <Paper className="overflow-hidden p-2" askew={i % 2 ? "right" : "left"}>
                  <div className="relative aspect-4/3 w-full overflow-hidden">
                    <Image
                      src={g.url}
                      alt={g.alt}
                      fill
                      unoptimized={g.url.endsWith(".svg")}
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover saturate-[0.9]"
                    />
                  </div>
                </Paper>
                {g.caption && (
                  <figcaption className="folio mt-2 text-ink-faint">{g.caption}</figcaption>
                )}
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* ---- Catchword: the next leaf ---------------------------------- */}
      {next && next.slug !== project.slug && (
        <nav className="mt-24" aria-label="Next project">
          <Divider className="mb-8" />
          <Link href={`/work/${next.slug}`} className="group block no-underline">
            <span className="folio text-ink-faint">Next folio</span>
            <p className="mt-1 font-hand text-4xl leading-tight text-ink transition-colors group-hover:text-verdigris-ink">
              {next.title} <span aria-hidden="true" className="text-sanguine">→</span>
            </p>
          </Link>
        </nav>
      )}
    </article>
  );
}
