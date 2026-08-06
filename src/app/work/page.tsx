import { Suspense } from "react";
import type { Metadata } from "next";
import { content } from "@/lib/content";
import { ProjectCard } from "@/components/site/project-card";
import { DisciplineFilter } from "@/components/site/discipline-filter";
import { Paper } from "@/components/notebook/paper";
import { Divider } from "@/components/notebook/ornaments";

export const metadata: Metadata = {
  title: "Folios",
  description: "The complete working notebook — every project, filterable by discipline.",
};

export default async function WorkPage({
  searchParams,
}: {
  searchParams: Promise<{ discipline?: string }>;
}) {
  const { discipline } = await searchParams;

  const [all, disciplines] = await Promise.all([
    content.listProjects(),
    content.listDisciplines(),
  ]);

  const counts = Object.fromEntries(
    disciplines.map((d) => [d.slug, all.filter((p) => p.disciplines.includes(d.slug)).length])
  );

  const projects =
    discipline && discipline !== "all"
      ? all.filter((p) => p.disciplines.includes(discipline))
      : all;

  const activeName = disciplines.find((d) => d.slug === discipline)?.name;

  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <p className="folio text-sanguine-ink">The complete notebook</p>
      <h1 className="mt-3 font-hand text-[clamp(2.5rem,6vw,4rem)] font-semibold leading-[0.95] text-ink">
        Folios
      </h1>
      <p className="mt-3 max-w-xl text-[1.05rem] italic leading-relaxed text-ink-soft">
        Every leaf, in reverse order of writing. The margins are where the thinking is.
      </p>

      <Divider className="my-10" />

      <Suspense fallback={<div className="h-10" aria-hidden="true" />}>
        <DisciplineFilter disciplines={disciplines} counts={counts} total={all.length} />
      </Suspense>

      <p className="folio mt-6 text-ink-faint" aria-live="polite">
        {projects.length} {projects.length === 1 ? "folio" : "folios"}
        {activeName ? ` — ${activeName}` : ""}
      </p>

      {projects.length ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} disciplines={disciplines} />
          ))}
        </div>
      ) : (
        <Paper ground="ruled" className="mt-8 p-12 text-center">
          <p className="font-hand text-2xl text-ink-soft">Nothing filed under that heading yet.</p>
          <p className="mt-2 text-[0.95rem] text-ink-faint">Try another discipline.</p>
        </Paper>
      )}
    </section>
  );
}
