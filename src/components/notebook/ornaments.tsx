import { cn } from "@/lib/utils";

/* ---------------------------------------------------------------------------
 * Ornaments — the drawn furniture of the notebook.
 * All SVG, all currentColor, all decorative (aria-hidden).
 * ------------------------------------------------------------------------- */

/** A ruled line that wobbles, the way a hand-drawn one does. */
export function InkRule({ className, tone = "ink" }: { className?: string; tone?: "ink" | "chalk" | "plate" }) {
  const color =
    tone === "chalk" ? "text-sanguine" : tone === "plate" ? "text-verdigris" : "text-ink-ghost";
  return (
    <svg
      viewBox="0 0 800 6"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={cn("h-[6px] w-full", color, className)}
    >
      <path
        d="M0 3.2 C 120 1.4, 240 4.6, 360 2.8 S 600 1.2, 800 3.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.85"
      />
    </svg>
  );
}

/** Vitruvian device: the square and circle, quartered by construction lines. */
export function VitruvianMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true" className={cn("h-full w-full", className)}>
      <g fill="none" stroke="currentColor" strokeWidth="0.9" opacity="0.55">
        <rect x="18" y="18" width="84" height="84" />
        <circle cx="60" cy="60" r="42" />
        <circle cx="60" cy="60" r="42" transform="rotate(45 60 60)" />
        <line x1="60" y1="4" x2="60" y2="116" strokeDasharray="3 4" />
        <line x1="4" y1="60" x2="116" y2="60" strokeDasharray="3 4" />
        <line x1="18" y1="18" x2="102" y2="102" strokeDasharray="2 5" opacity="0.5" />
        <line x1="102" y1="18" x2="18" y2="102" strokeDasharray="2 5" opacity="0.5" />
      </g>
      <circle cx="60" cy="60" r="2.2" fill="currentColor" opacity="0.7" />
    </svg>
  );
}

/** Golden-spiral construction, the kind sketched in a margin to test a proportion. */
export function SpiralMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 90" aria-hidden="true" className={cn("h-full w-full", className)}>
      <g fill="none" stroke="currentColor" strokeWidth="0.9" opacity="0.5">
        <rect x="4" y="4" width="112" height="82" />
        <rect x="4" y="4" width="69" height="82" />
        <rect x="4" y="4" width="69" height="51" />
        <rect x="4" y="4" width="42" height="51" />
        <path d="M4 55 A 42 51 0 0 1 46 4" />
        <path d="M46 4 A 27 51 0 0 1 73 55" />
        <path d="M73 55 A 43 31 0 0 1 4 55" opacity="0.4" />
      </g>
    </svg>
  );
}

/** A drawn compass-and-dividers glyph for section breaks. */
export function DividersMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className={cn("h-full w-full", className)}>
      <g fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
        <circle cx="20" cy="7" r="2.6" />
        <path d="M18.6 9.4 L11 33" />
        <path d="M21.4 9.4 L29 33" />
        <path d="M14.5 24 Q 20 27.5, 25.5 24" strokeDasharray="2 3" opacity="0.6" />
      </g>
    </svg>
  );
}

/** Section divider: rule — glyph — rule. */
export function Divider({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-4 text-ink-ghost", className)} aria-hidden="true">
      <InkRule className="flex-1" />
      <DividersMark className="h-7 w-7 shrink-0 text-sanguine opacity-70" />
      <InkRule className="flex-1" />
    </div>
  );
}
