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
      folio={index}
      className={cn(
        "group h-full transition-transform duration-300 hover:-translate-y-1",
        className
      )}
    >
      <Link href={`/work/${project.slug}`} className="block h-full no-underline">
        {project.cover ? (
          <div className="relative aspect-[4/3] overflow-hidden bg-paper-3">
            <Image
              src={project.cover.url}
              alt={project.cover.alt}
              fill
              unoptimized={project.cover.url.endsWith(".svg")}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover saturate-[0.8] transition duration-700 group-hover:scale-[1.025] group-hover:saturate-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/18 to-transparent" aria-hidden="true" />
          </div>
        ) : (
          <div className="flex aspect-[4/3] items-center justify-center bg-paper-2">
            <span className="folio text-ink-faint">Work in progress</span>
          </div>
        )}

        <div className="p-6">
          <div className="flex items-center justify-between gap-4">
            <span className="folio text-sanguine-ink">{formatYear(project.date)}</span>
            {project.featured && <span className="folio text-verdigris-ink">Featured</span>}
          </div>

          <h3 className="mt-3 font-hand text-[2rem] leading-[0.98] text-ink transition-colors group-hover:text-sanguine-ink">
            {project.title}
          </h3>

          <p className="mt-4 text-[0.96rem] leading-7 text-ink-soft">{project.summary}</p>

          {project.disciplines.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {project.disciplines.slice(0, 3).map((discipline) => (
                <Badge key={discipline} tone="plate">
                  {nameFor(discipline)}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </Link>
    </Paper>
  );
}
