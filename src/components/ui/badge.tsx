import * as React from "react";
import { cn } from "@/lib/utils";

type Tone = "ink" | "chalk" | "plate" | "wash";

const tones: Record<Tone, string> = {
  ink: "border-ink/25 text-ink-soft",
  chalk: "border-sanguine/45 text-sanguine-ink bg-blush/35",
  plate: "border-verdigris/40 text-verdigris-ink bg-verdigris-wash/60",
  wash: "border-wash-deep/60 text-ink-soft bg-wash/40",
};

export function Badge({
  className,
  tone = "ink",
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { tone?: Tone }) {
  return (
    <span
      className={cn(
        "folio inline-flex items-center border px-2 py-[3px] leading-none",
        tones[tone],
        className
      )}
      {...props}
    />
  );
}
