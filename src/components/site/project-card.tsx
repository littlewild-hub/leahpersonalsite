import Link from "next/link";
import Image from "next/image";
import type { Project, Discipline } from "@/lib/content";
import { Paper } from "@/components/notebook/paper";
import { Badge } from "@/components/ui/badge";
import { formatYear, cn } from "@/lib/utils";

export function ProjectCard({
  project,
  index,
  disciplines,
  className,
}: {
  project: Project;
  index: number;
  disciplines: Discipline[];
  className?: string;
}) {
  const nameFor = (slug: string) =>
    disciplines.find((d) => d.slug === slug)?.name ?? slug.replace(/-/g, " ");

  return (
    <Paper
      as="article"
      ground="plain"
      folio={index}
      askew={index % 3 === 0 ? "left" : index % 3 === 1 ? false : "right"}
      className={cn(
        "group h-full transition-transform duration-400 ease-[var(--ease-quill)] hover:!rotate-0 hover:-translate-y-1",
        className
      )}
    >
      <Link href={`/work/${project.slug}`} className="block h-full p-5 no-underline sm:p-6">
        {project.cover ? (
          <div className="relative mb-5 aspect-4/3 overflow-hidden border border-ink-ghost/60 bg-paper-3">
            <Image
              src={project.cover.url}
              alt={project.cover.alt}
              fill
              unoptimized={project.cover.url.endsWith(".svg")}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover saturate-[0.82] transition-[transform,filter] duration-700 ease-[var(--ease-quill)] group-hover:scale-[1.03] group-hover:saturate-100"
            />
          </div>
        ) : (
          <div
            className="plotted mb-5 flex aspect-4/3 items-center justify-center border border-ink-ghost/60 bg-paper-3/50"
            aria-hidden="true"
          >
            <span className="folio text-ink-faint/60">plate wanting</span>
          </div>
        )}

        <div className="flex items-baseline justify-between gap-3">
          <span className="folio text-verdigris-ink">{formatYear(project.date)}</span>
          {project.featured && <span className="folio text-sanguine">★ studied</span>}
        </div>

        <h3 className="mt-1.5 font-hand text-[1.6rem] leading-[1.15] text-ink transition-colors duration-200 group-hover:text-verdigris-ink">
          {project.title}
        </h3>

        <p className="mt-2 text-[0.98rem] leading-relaxed text-ink-soft">{project.summary}</p>

        {project.disciplines.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.disciplines.slice(0, 3).map((d) => (
              <Badge key={d} tone="plate">
                {nameFor(d)}
              </Badge>
            ))}
          </div>
        )}
      </Link>
    </Paper>
  );
}
