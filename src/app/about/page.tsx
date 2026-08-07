import type { Metadata } from "next";
import { content } from "@/lib/content";
import { Paper, Field } from "@/components/notebook/paper";
import { Divider } from "@/components/notebook/ornaments";
import { EducationLedger } from "@/components/notebook/ledger";
import { LeadershipPrograms } from "@/components/notebook/leadership";

export const metadata: Metadata = {
  title: "About",
  description: "Who is keeping this notebook, and how they work.",
};

export default async function AboutPage() {
  const [profile, projects, disciplines, education, leadershipPrograms] = await Promise.all([
    content.getProfile(),
    content.listProjects(),
    content.listDisciplines(),
    content.getContinuingEducation?.() ?? Promise.resolve(null),
    content.listLeadershipPrograms?.() ?? Promise.resolve([]),
  ]);

  const firstYear = projects.length
    ? Math.min(...projects.map((p) => new Date(p.date).getUTCFullYear()))
    : new Date().getUTCFullYear();

  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <p className="folio text-sanguine-ink">On the keeper of the notebook</p>
      <h1 className="mt-3 font-hand text-[clamp(2.5rem,6vw,4rem)] font-semibold leading-[0.95] text-ink">
        About
      </h1>

      <Divider className="my-10" />

      <div className="max-w-3xl">
        {profile.bio.length ? (
          profile.bio.map((p, i) => (
            <p
              key={i}
              className={`text-[1.075rem] leading-[1.8] text-ink ${i === 0 ? "dropcap" : "mt-6"}`}
            >
              {p}
            </p>
          ))
        ) : (
          <p className="text-[1.075rem] leading-[1.8] text-ink-soft">{profile.statement}</p>
        )}
      </div>

      <Divider className="my-12" />

      <Paper ground="plotted" className="p-6 sm:p-8" folio="colophon">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 lg:grid-cols-5">
          <Field label="Practice">{profile.title}</Field>
          {profile.location && <Field label="Situated">{profile.location}</Field>}
          <Field label="Keeping this since">{firstYear}</Field>
          <Field label="Folios">{projects.length}</Field>
          <Field label="Disciplines">{disciplines.length}</Field>
        </dl>
      </Paper>

      {(leadershipPrograms.length > 0 || education) && (
        <section className="mt-16">
          <div className="max-w-2xl">
            <p className="folio text-sanguine-ink">Learning & leadership</p>
            <h2 className="mt-3 font-hand text-[clamp(2.4rem,4.5vw,3.8rem)] font-medium leading-[0.95] text-ink">
              Education & leadership development
            </h2>
            <p className="mt-4 max-w-xl text-[1rem] leading-7 text-ink-soft">
              Formal study, continuing education, and leadership programs that have shaped how I approach the work.
            </p>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <LeadershipPrograms programs={leadershipPrograms} />
            {education && <EducationLedger data={education} />}
          </div>
        </section>
      )}
    </section>
  );
}
