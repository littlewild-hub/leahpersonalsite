import { Paper } from "./paper";
import type { LeadershipProgram } from "@/lib/content/types";

/* ---------------------------------------------------------------------------
 * LeadershipPrograms — completed civic/leadership programs.
 *
 * Weightier than a continuing-education credit hour, lighter than a folio —
 * their own short list, sitting above the EducationLedger.
 * ------------------------------------------------------------------------- */
export function LeadershipPrograms({ programs }: { programs: LeadershipProgram[] }) {
  if (!programs.length) return null;

  return (
    <Paper ground="ruled" className="p-5" folio="civic" askew="right">
      <p className="folio text-ink-faint">Leadership development</p>
      <ul className="mt-3 space-y-3">
        {programs.map((p) => (
          <li key={p.name} className="border-t border-ink-ghost/60 pt-3 first:border-t-0 first:pt-0">
            {p.href ? (
              <a href={p.href} target="_blank" rel="noreferrer" className="link-ink font-body text-[0.95rem] text-ink">
                {p.name}
              </a>
            ) : (
              <span className="font-body text-[0.95rem] text-ink">{p.name}</span>
            )}
            <div className="mt-0.5 text-[0.8rem] leading-snug text-ink-faint">
              {[p.org, p.year].filter(Boolean).join(" · ")}
            </div>
          </li>
        ))}
      </ul>
    </Paper>
  );
}
