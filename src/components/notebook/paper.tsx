import * as React from "react";
import { cn } from "@/lib/utils";
import { folioLabel } from "@/lib/utils";

export function Paper({
  children,
  className,
  ground = "plain",
  folio,
  askew,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  ground?: "plain" | "ruled" | "plotted";
  folio?: string | number;
  askew?: "left" | "right" | false;
  as?: React.ElementType;
}) {
  return (
    <Tag
      className={cn(
        "editorial-surface relative overflow-hidden bg-paper",
        ground === "plotted" && "bg-paper-2/55",
        ground === "ruled" && "bg-paper/90",
        className
      )}
    >
      {folio != null && (
        <span className="folio pointer-events-none absolute right-4 top-4 z-10 text-ink-faint/65 select-none">
          {typeof folio === "number" ? folioLabel(folio) : folio}
        </span>
      )}
      {children}
    </Tag>
  );
}

export function Marginalia({
  children,
  className,
  side = "right",
}: {
  children: React.ReactNode;
  className?: string;
  side?: "left" | "right";
}) {
  return (
    <aside
      className={cn(
        "absolute top-0 hidden w-44 xl:block",
        side === "right" ? "-right-52 text-left" : "-left-52 text-right",
        className
      )}
    >
      <div
        className={cn(
          "border-sanguine/45 font-hand text-[1rem] italic leading-snug text-sanguine-ink",
          side === "right" ? "border-l pl-3" : "border-r pr-3"
        )}
      >
        {children}
      </div>
    </aside>
  );
}

export function Field({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("border-t border-ink/15 pt-3", className)}>
      <dt className="folio text-sanguine-ink">{label}</dt>
      <dd className="mt-1 text-[0.95rem] leading-snug text-ink">{children}</dd>
    </div>
  );
}
