import * as React from "react";
import { cn } from "@/lib/utils";
import { folioLabel } from "@/lib/utils";

/* ---------------------------------------------------------------------------
 * Paper — a leaf of the codex.
 *
 * `ground` picks the ruling; `folio` stamps a catalogue number in the corner
 * the way an archivist would.
 * ------------------------------------------------------------------------- */
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
  const groundClass = ground === "ruled" ? "ruled" : ground === "plotted" ? "plotted" : "";
  const tilt = askew === "left" ? "pinned" : askew === "right" ? "pinned-r" : "";

  return (
    <Tag
      className={cn(
        "relative border border-ink-ghost/70 bg-paper-2/45",
        "shadow-[2px_3px_0_0_rgba(1,25,54,0.055),6px_8px_18px_-10px_rgba(1,25,54,0.22)]",
        groundClass,
        tilt,
        className
      )}
    >
      {folio != null && (
        <span className="folio pointer-events-none absolute right-3 top-2.5 text-ink-faint/70 select-none">
          {typeof folio === "number" ? folioLabel(folio) : folio}
        </span>
      )}
      {children}
    </Tag>
  );
}

/* ---------------------------------------------------------------------------
 * Marginalia — an annotation in the outer margin, in red chalk.
 * Hidden below xl, where there is no margin to speak of.
 * ------------------------------------------------------------------------- */
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
          "font-hand text-[0.95rem] italic leading-snug text-sanguine-ink/85",
          side === "right" ? "border-l pl-3" : "border-r pr-3",
          "border-sanguine/40"
        )}
        style={{ transform: side === "right" ? "rotate(-1.1deg)" : "rotate(1.1deg)" }}
      >
        {children}
      </div>
    </aside>
  );
}

/* ---------------------------------------------------------------------------
 * FieldLabel — the small mono hand used for metadata pairs.
 * ------------------------------------------------------------------------- */
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
    <div className={cn("border-t border-ink-ghost/60 pt-2", className)}>
      <dt className="folio text-ink-faint">{label}</dt>
      <dd className="mt-1 font-body text-[0.95rem] leading-snug text-ink">{children}</dd>
    </div>
  );
}
