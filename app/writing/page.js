import Link from 'next/link';
import { SiteFooter, SiteHeader } from '../../components/SiteChrome';
import { works } from '../../data/works';
import { getExternalWriting, SOURCES } from '../../lib/external-writing';

export const metadata = {
  title: 'Writing — Leah Buzek',
  description: 'Essays, cultural analysis, public arguments, and developing ideas from Leah Buzek.',
};

export const revalidate = 3600;

function formatDate(value) {
  if (!value) return '';
  return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(value));
}

export default async function WritingPage() {
  const external = await getExternalWriting();
  const internal = works.filter((work) => work.constellation === 'public-writing');

  return (
    <>
      <SiteHeader />
      <main>
        <section className="writing-hero">
          <p className="eyebrow">Essays & public writing</p>
          <h1>Ideas in public, <em>before and after</em> they become frameworks.</h1>
          <p>
            Medium and Substack hold the more immediate layer of the work: cultural analysis, public argument, field notes, and ideas still under pressure. This archive links outward while preserving their place in the larger body of work.
          </p>
        </section>

        <section className="platform-strip">
          {SOURCES.map((source) => (
            <a href={source.profile} target="_blank" rel="noreferrer" key={source.platform}>
              <span>{source.platform}</span>
              <b>Open profile ↗</b>
            </a>
          ))}
        </section>

        {external.length ? (
          <section className="external-writing">
            <header className="section-title-row">
              <div>
                <p className="eyebrow eyebrow--dark">Pulled from the source</p>
                <h2>Recent publishing</h2>
              </div>
              <p>Feed content updates automatically. Full articles remain on Medium or Substack.</p>
            </header>
            <div className="external-grid">
              {external.map((post) => (
                <a href={post.url} target="_blank" rel="noreferrer" key={post.id}>
                  <p className="external-meta">{post.platform}{post.date ? ` · ${formatDate(post.date)}` : ''}</p>
                  <h3>{post.title}</h3>
                  {post.excerpt ? <p>{post.excerpt}</p> : null}
                  <span>Read on {post.platform} ↗</span>
                </a>
              ))}
            </div>
          </section>
        ) : (
          <section className="feed-fallback">
            <p>The live feeds are temporarily unavailable, but both public archives remain linked above.</p>
          </section>
        )}

        <section className="writing-in-corpus">
          <header className="section-title-row section-title-row--light">
            <div>
              <p className="eyebrow">In the body of work</p>
              <h2>Essays with their context intact.</h2>
            </div>
            <p>These pages explain the argument and connect each essay to the wider corpus.</p>
          </header>
          <div className="writing-corpus-list">
            {internal.map((work) => (
              <Link href={`/work/${work.slug}`} key={work.slug}>
                <div>
                  <p>{work.kind} · {work.year}</p>
                  <h3>{work.title}</h3>
                  <span>{work.subtitle}</span>
                </div>
                <b aria-hidden="true">↗</b>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
