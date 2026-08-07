import Link from 'next/link';
import { ConstellationGraphic, SiteFooter, SiteHeader } from '../../components/SiteChrome';
import { constellations, getWorksByConstellation } from '../../data/catalog';
import styles from './work.module.css';

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
              <section className={styles.group} id={constellation.id} key={constellation.id}>
                <div className={styles.inner}>
                  <header className={styles.header}>
                    <p className={styles.number}>{constellation.number}</p>
                    <div className={styles.titleBlock}>
                      <h2>{constellation.name}</h2>
                    </div>
                    <div className={styles.context}>
                      <p>{constellation.short}</p>
                      <span className={styles.count}>{items.length} {items.length === 1 ? 'work' : 'works'} in this constellation</span>
                    </div>
                  </header>

                  <div className={styles.grid}>
                    {items.map((work) => (
                      <Link className={styles.card} href={`/work/${work.slug}`} key={work.slug}>
                        <div className={styles.cardTop}>
                          <p className={styles.meta}>{work.kind} · {work.year}</p>
                          <span className={styles.arrow} aria-hidden="true">↗</span>
                        </div>
                        <h3>{work.title}</h3>
                        <p className={styles.subtitle}>{work.subtitle}</p>
                        <div className={styles.footer}>
                          <span className={styles.status}>{work.status}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
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
