import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Renaissance-codex folio numbering: 1 -> "1r", 2 -> "1v", 3 -> "2r" ... */
export function folioLabel(index: number): string {
  const leaf = Math.floor(index / 2) + 1;
  const side = index % 2 === 0 ? "r" : "v";
  return `${leaf}${side}`;
}

export function formatYear(iso?: string | null): string {
  if (!iso) return "—";
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? "—" : String(d.getUTCFullYear());
}

export function formatMonthYear(iso?: string | null): string {
  if (!iso) return "—";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "—";
  return d.toLocaleDateString("en-GB", { month: "long", year: "numeric", timeZone: "UTC" });
}
