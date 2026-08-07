import Link from 'next/link';
import { ConstellationGraphic, SiteFooter, SiteHeader } from '../../components/SiteChrome';
import { constellations, getWorksByConstellation } from '../../data/catalog';

export const metadata = {
  title: 'Body of Work — Leah Buzek',
  description: 'A connected body of work in relational ethics, caregiver trauma, civic infrastructure, policy design, and public writing.',
};

export default function WorkIndex() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="archive-hero">
          <div>
            <p className="eyebrow">The public edition</p>
            <h1>An actual <em>body of work.</em></h1>
            <p className="archive-hero__lede">
              Papers, frameworks, programs, policy proposals, and essays are organized by the questions they share.
            </p>
          </div>
          <ConstellationGraphic compact />
        </section>

        <div className="constellation-index">
          {constellations.map((constellation) => {
            const items = getWorksByConstellation(constellation.id);
            return (
              <section className="constellation-group" id={constellation.id} key={constellation.id}>
                <header className="constellation-group__header">
                  <span>{constellation.number}</span>
                  <div>
                    <h2>{constellation.name}</h2>
                    <p>{constellation.short}</p>
                  </div>
                </header>
                <div className="work-list">
                  {items.map((work) => (
                    <Link className="work-row" href={`/work/${work.slug}`} key={work.slug}>
                      <div>
                        <p className="work-row__meta">{work.kind} · {work.year}</p>
                        <h3>{work.title}</h3>
                        <p>{work.subtitle}</p>
                      </div>
                      <div className="work-row__right">
                        <span>{work.status}</span>
                        <b aria-hidden="true">↗</b>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
