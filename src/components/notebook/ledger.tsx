import { Paper, Field } from "./paper";
import type { ContinuingEducation } from "@/lib/content/types";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

/* ---------------------------------------------------------------------------
 * EducationLedger — a tally of independent training, not a list of courses.
 *
 * 150 individual continuing-education entries do not belong in the work grid
 * as 150 folios; they belong here, summed. The source data lives in Airtable
 * ("Independent Trainings") and is refreshed into content/continuing-education.json
 * by hand when it's next worth re-pulling.
 * ------------------------------------------------------------------------- */
export function EducationLedger({ data }: { data: ContinuingEducation }) {
  const maxHours = Math.max(...data.categories.map((c) => c.hours), 1);

  return (
    <Paper ground="plotted" className="p-5" folio="ledger" askew="left">
      <dl className="space-y-4">
        <Field label="Contact hours logged">{data.totalHours.toLocaleString()}</Field>
        <Field label="Trainings">{data.trainingCount}</Field>
        <Field label="Providers">{data.providerCount}</Field>
        <Field label="Span">
          {formatDate(data.since)} – {formatDate(data.through)}
        </Field>
      </dl>

      <div className="mt-6 space-y-2.5 border-t border-ink-ghost/60 pt-5">
        {data.categories.map((c) => (
          <div key={c.name}>
            <div className="flex items-baseline justify-between gap-3">
              <span className="text-[0.85rem] leading-snug text-ink-soft">{c.name}</span>
              <span className="folio shrink-0 text-ink-faint">{c.hours}h</span>
            </div>
            <div className="mt-1 h-[3px] w-full bg-ink-ghost/40">
              <div
                className="h-full bg-verdigris"
                style={{ width: `${(c.hours / maxHours) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </Paper>
  );
}
