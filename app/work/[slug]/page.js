import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SiteFooter, SiteHeader } from '../../../components/SiteChrome';
import { getConstellation, getWork, works } from '../../../data/works';

export function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) return {};

  return {
    title: `${work.title} — Leah Buzek`,
    description: work.summary,
  };
}

export default async function WorkPage({ params }) {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) notFound();

  const constellation = getConstellation(work.constellation);
  const related = work.related.map(getWork).filter(Boolean);

  return (
    <>
      <SiteHeader />
      <main className="work-page">
        <section className="work-masthead">
          <div className="work-masthead__breadcrumb">
            <Link href="/work">Body of work</Link>
            <span>→</span>
            <Link href={`/work#${constellation.id}`}>{constellation.name}</Link>
          </div>
          <div className="work-masthead__grid">
            <div>
              <p className="eyebrow">{work.kind} · {work.year}</p>
              <h1>{work.title}</h1>
              <p className="work-subtitle">{work.subtitle}</p>
            </div>
            <dl className="work-facts">
              <div><dt>Status</dt><dd>{work.status}</dd></div>
              <div><dt>Body of work</dt><dd>{constellation.name}</dd></div>
              <div><dt>Public format</dt><dd>Authored synopsis</dd></div>
            </dl>
          </div>
        </section>

        <section className="work-reading-grid">
          <aside className="work-thesis">
            <p className="eyebrow eyebrow--dark">Central proposition</p>
            <blockquote>{work.proposition}</blockquote>
            <p className="source-policy">The underlying manuscript or source document is not available for direct download.</p>
            {work.externalUrl ? (
              <a className="text-link text-link--dark" href={work.externalUrl} target="_blank" rel="noreferrer">Read on the original platform ↗</a>
            ) : null}
          </aside>

          <article className="work-article">
            <section>
              <p className="section-label">Synopsis</p>
              <p className="synopsis-lead">{work.summary}</p>
            </section>

            <section>
              <p className="section-label">The problem it responds to</p>
              <p>{work.problem}</p>
            </section>

            <section>
              <p className="section-label">What the work contributes</p>
              <ul className="contribution-list">
                {work.contributions.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>

            <section>
              <p className="section-label">Development</p>
              <ul className="development-list">
                {work.development.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>

            <section>
              <p className="section-label">Keywords</p>
              <div className="tag-list">
                {work.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </section>
          </article>
        </section>

        {related.length ? (
          <section className="related-works">
            <p className="eyebrow">Connected works</p>
            <div className="related-grid">
              {related.map((item) => (
                <Link href={`/work/${item.slug}`} key={item.slug}>
                  <span>{item.kind}</span>
                  <h2>{item.title}</h2>
                  <p>{item.subtitle}</p>
                  <b aria-hidden="true">↗</b>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </main>
      <SiteFooter />
    </>
  );
}
