"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useTransition } from "react";
import type { Discipline } from "@/lib/content";
import { cn } from "@/lib/utils";

/* A filter that writes to the URL, so any view is linkable and shareable —
   and so the server does the filtering, which keeps it correct once the
   content moves to Airtable. */
export function DisciplineFilter({
  disciplines,
  counts,
  total,
}: {
  disciplines: Discipline[];
  counts: Record<string, number>;
  total: number;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const [pending, startTransition] = useTransition();

  const active = params.get("discipline") ?? "all";

  const select = (slug: string) => {
    const next = new URLSearchParams(params.toString());
    if (slug === "all") next.delete("discipline");
    else next.set("discipline", slug);
    const qs = next.toString();
    startTransition(() => router.push(qs ? `${pathname}?${qs}` : pathname, { scroll: false }));
  };

  const items = [{ slug: "all", name: "Everything", count: total }, ...disciplines.map((d) => ({
    slug: d.slug,
    name: d.name,
    count: counts[d.slug] ?? 0,
  }))];

  return (
    <div
      className={cn("flex flex-wrap items-center gap-x-1 gap-y-2", pending && "opacity-60")}
      role="group"
      aria-label="Filter by discipline"
    >
      {items.map((item) => {
        const on = active === item.slug;
        return (
          <button
            key={item.slug}
            type="button"
            onClick={() => select(item.slug)}
            aria-pressed={on}
            className={cn(
              "folio cursor-pointer border px-3 py-1.5 transition-all duration-200",
              on
                ? "border-ink bg-ink text-paper"
                : "border-ink-ghost/70 text-ink-soft hover:border-ink hover:text-ink"
            )}
          >
            {item.name}
            <span className={cn("ml-1.5 tabular-nums", on ? "text-paper/60" : "text-ink-faint/70")}>
              {item.count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
