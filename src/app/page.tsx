import Link from "next/link";
import { content } from "@/lib/content";
import { ProjectCard } from "@/components/site/project-card";
import { Paper, Marginalia } from "@/components/notebook/paper";
import { Divider, InkRule, SpiralMark, VitruvianMark } from "@/components/notebook/ornaments";
import { Button } from "@/components/ui/button";

export default async function HomePage() {
  const [profile, projects, disciplines] = await Promise.all([
    content.getProfile(),
    content.listProjects({ limit: 6 }),
    content.listDisciplines(),
  ]);

  const featured = projects.filter((p) => p.featured);
  const shown = (featured.length ? featured : projects).slice(0, 6);

  return (
    <>
      {/* ---------------------------------------------------------------- */}
      {/* FRONTISPIECE                                                      */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative mx-auto max-w-6xl px-5 pt-16 pb-8 sm:px-8 sm:pt-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-8 hidden h-56 w-56 text-verdigris opacity-40 lg:block"
        >
          <VitruvianMark />
        </div>

        <p className="folio settle text-sanguine-ink">Folio i — frontispiece</p>

        <h1 className="settle mt-4 max-w-3xl font-hand text-[clamp(2.75rem,7vw,5.25rem)] font-semibold leading-[0.94] tracking-[-0.02em] text-ink">
          {profile.name}
        </h1>

        <p className="settle mt-3 max-w-2xl font-hand text-[clamp(1.25rem,2.4vw,1.75rem)] italic leading-snug text-verdigris-ink">
          {profile.title}
        </p>

        <InkRule className="settle mt-8 max-w-xl" tone="chalk" />

        <div className="settle relative mt-8 max-w-2xl">
          <p className="dropcap text-[1.1rem] leading-[1.75] text-ink-soft">{profile.statement}</p>
          <Marginalia side="right">
            Inveniam viam aut faciam.
          </Marginalia>
        </div>

        <div className="settle mt-10 flex flex-wrap items-center gap-3">
          <Link href="/work">
            <Button variant="ink" size="lg">Turn the page</Button>
          </Link>
          <Link href="/contact">
            <Button variant="plate" size="lg">Get in touch</Button>
          </Link>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* THE DISCIPLINES                                                   */}
      {/* ---------------------------------------------------------------- */}
      {disciplines.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
          <Paper ground="plotted" className="p-6 sm:p-8" folio="ii">
            <h2 className="folio text-ink-faint">Studies presently underway</h2>
            <ul className="mt-5 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
              {disciplines.map((d, i) => (
                <li key={d.slug} className="margin-rule pl-4">
                  <Link
                    href={`/work?discipline=${d.slug}`}
                    className="group block no-underline"
                  >
                    <span className="folio text-verdigris-ink">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="font-hand text-2xl leading-tight text-ink transition-colors group-hover:text-verdigris-ink">
                      {d.name}
                    </p>
                    {d.blurb && (
                      <p className="mt-1 text-[0.92rem] leading-snug text-ink-faint">{d.blurb}</p>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </Paper>
        </section>
      )}

      {/* ---------------------------------------------------------------- */}
      {/* SELECTED FOLIOS                                                   */}
      {/* ---------------------------------------------------------------- */}
      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="font-hand text-4xl leading-tight text-ink">Selected folios</h2>
            <p className="mt-1 text-[0.98rem] italic text-ink-soft">
              A handful of leaves, pulled from the whole.
            </p>
          </div>
          <div aria-hidden="true" className="hidden h-16 w-24 shrink-0 text-sanguine opacity-60 sm:block">
            <SpiralMark />
          </div>
        </div>

        <Divider className="my-8" />

        {shown.length ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} disciplines={disciplines} />
            ))}
          </div>
        ) : (
          <Paper ground="ruled" className="p-10 text-center">
            <p className="font-hand text-2xl text-ink-soft">The codex is blank.</p>
            <p className="mt-2 text-[0.95rem] text-ink-faint">
              Add a markdown file to <code className="font-note text-sm">content/projects/</code> and it
              will appear here.
            </p>
          </Paper>
        )}

        <div className="mt-10">
          <Link href="/work" className="link-ink font-note text-sm uppercase tracking-[0.16em]">
            All folios →
          </Link>
        </div>
      </section>
    </>
  );
}
