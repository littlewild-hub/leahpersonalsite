import Link from "next/link";
import { content } from "@/lib/content";
import { ProjectCard } from "@/components/site/project-card";

const practices = [
  {
    title: "Program Design",
    description: "Building person-centered programs that meet real needs.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <circle cx="32" cy="32" r="15" stroke="currentColor" strokeWidth="1.5" />
        <path d="M32 8v10M32 46v10M8 32h10M46 32h10M15 15l7 7M42 42l7 7M49 15l-7 7M22 42l-7 7" stroke="currentColor" strokeWidth="1.5" />
        <path d="M24 38c8-1 12-5 16-14-1 10-4 16-12 18" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Data & Insight",
    description: "Turning data into clarity so we can make better decisions together.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <path d="M32 55V19M32 31c-10-2-15-8-16-17 10 2 15 8 16 17ZM32 41c11-2 17-8 18-18-11 2-17 8-18 18ZM32 49c-8-1-13-5-16-12 8 1 13 5 16 12Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M26 55h12" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Civic Infrastructure",
    description: "Strengthening the systems and spaces where people can lead.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <circle cx="24" cy="31" r="12" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="40" cy="31" r="12" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 45c4 4 8 6 12 6s8-2 12-6" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Story & Strategy",
    description: "Communicating with heart, strategy, and relational power.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <path d="M18 50c13-7 21-19 27-36M24 43c-1-7 1-13 7-18M33 35c7-1 12-4 16-10M40 24c-5-2-8-6-9-11M31 35c-6 0-11 2-15 6" stroke="currentColor" strokeWidth="1.5" />
        <path d="m45 14 4-2-1 5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export default async function HomePage() {
  const [projects, disciplines] = await Promise.all([
    content.listProjects({ limit: 12 }),
    content.listDisciplines(),
  ]);

  const featured = projects.filter((project) => project.featured);
  const shown = (featured.length ? featured : projects).slice(0, 6);

  return (
    <>
      <section className="relative min-h-[760px] overflow-hidden bg-paper sm:min-h-[820px] lg:min-h-[850px]">
        <div
          className="absolute inset-0 bg-cover bg-[position:64%_center] sm:bg-center"
          style={{ backgroundImage: "url('/hero-rural-editorial.svg')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-paper/88 via-paper/48 to-transparent" aria-hidden="true" />

        <div className="relative mx-auto flex min-h-[760px] max-w-[94rem] items-center px-6 pb-20 pt-36 sm:min-h-[820px] sm:px-10 sm:pt-40 lg:min-h-[850px] lg:px-20">
          <div className="max-w-[720px]">
            <h1 className="settle font-hand text-[clamp(4rem,7.5vw,7.4rem)] font-medium leading-[0.82] tracking-[-0.045em] text-ink">
              Rooted in rural.
              <br />
              Driven by care.
              <br />
              Built for <em className="font-normal text-sanguine-ink">impact.</em>
            </h1>

            <div className="mt-9 h-[3px] w-12 bg-sanguine" aria-hidden="true" />
            <p className="mt-5 max-w-xl text-[1.03rem] leading-relaxed text-ink sm:text-[1.12rem]">
              I partner with communities and organizations to design what is needed, not just what is easy.
            </p>

            <Link
              href="/work"
              className="folio mt-8 inline-flex border border-ink bg-ink px-6 py-4 text-paper no-underline transition-colors hover:bg-paper hover:text-ink"
            >
              View my work
            </Link>
          </div>
        </div>
      </section>

      <section className="navy-section border-t border-paper/20">
        <div className="mx-auto grid max-w-[94rem] gap-0 px-6 py-14 sm:grid-cols-2 sm:px-10 lg:grid-cols-4 lg:px-16 lg:py-16">
          {practices.map((practice, index) => (
            <article
              key={practice.title}
              className={`px-6 py-7 text-center ${index > 0 ? "border-t border-paper/20 sm:border-t-0" : ""} ${index % 2 ? "sm:border-l" : ""} ${index > 1 ? "lg:border-l" : ""} border-paper/20`}
            >
              <div className="mx-auto h-14 w-14 text-[#df8258]">{practice.icon}</div>
              <h2 className="folio mt-4 text-[#e88c60]">{practice.title}</h2>
              <p className="mx-auto mt-4 max-w-[16rem] font-hand text-[1.27rem] leading-snug text-paper/88">
                {practice.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[94rem] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="folio text-sanguine-ink">Selected work</p>
            <h2 className="mt-3 max-w-xl font-hand text-[clamp(3.2rem,5vw,5.5rem)] leading-[0.92] text-ink">
              Systems, research, and stories built to be used.
            </h2>
          </div>
          <p className="max-w-2xl text-[1.02rem] leading-8 text-ink-soft lg:justify-self-end">
            My body of work moves across program strategy, research, policy, writing, public speaking, and civic infrastructure. The throughline is practical: make complex systems more humane, more legible, and more useful to the people living inside them.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} disciplines={disciplines} />
          ))}
        </div>

        <Link href="/work" className="link-ink folio mt-12 inline-block">
          Explore the full body of work →
        </Link>
      </section>
    </>
  );
}
