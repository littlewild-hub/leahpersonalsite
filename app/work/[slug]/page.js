import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SiteFooter, SiteHeader } from '../../../components/SiteChrome';
import { getConstellation, getWork, works } from '../../../data/catalog';
import { socialImage, twitterImage } from '../../../lib/site-metadata';
import styles from './work-detail.module.css';

const siteUrl = 'https://leahbuzek.com';

export function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) return {};

  const canonical = `/work/${work.slug}`;

  return {
    title: `${work.title} — Leah Buzek`,
    description: work.summary,
    alternates: { canonical },
    keywords: [work.title, ...(work.tags || []), 'Leah Buzek'],
    openGraph: {
      title: `${work.title} — Leah Buzek`,
      description: work.summary,
      type: 'article',
      url: canonical,
      siteName: 'Leah Buzek — Public Portfolio',
      images: [socialImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${work.title} — Leah Buzek`,
      description: work.summary,
      images: [twitterImage],
    },
  };
}

export default async function WorkPage({ params }) {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) notFound();

  const constellation = getConstellation(work.constellation);
  const related = (work.related || []).map(getWork).filter(Boolean);
  const canonicalUrl = `${siteUrl}/work/${work.slug}`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CreativeWork',
        '@id': `${canonicalUrl}#work`,
        url: canonicalUrl,
        name: work.title,
        headline: work.title,
        alternativeHeadline: work.subtitle,
        description: work.summary,
        abstract: work.proposition,
        author: { '@id': `${siteUrl}/#person` },
        creator: { '@id': `${siteUrl}/#person` },
        isPartOf: { '@id': `${siteUrl}/#website` },
        genre: work.kind,
        keywords: (work.tags || []).join(', '),
        inLanguage: 'en-US',
        about: (work.tags || []).map((tag) => ({ '@type': 'Thing', name: tag })),
        citation: related.map((item) => `${siteUrl}/work/${item.slug}`),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Body of work',
            item: `${siteUrl}/work`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: constellation.name,
            item: `${siteUrl}/work#${constellation.id}`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: work.title,
            item: canonicalUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <SiteHeader />
      <main className="work-page">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
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
              <div><dt>Public format</dt><dd>{work.publicFormat || 'Authored synopsis'}</dd></div>
            </dl>
          </div>
        </section>

        <div className={styles.readingFlow}>
          <section className={styles.proposition}>
            <div className={styles.propositionInner}>
              <p className="eyebrow eyebrow--dark">Central proposition</p>
              <blockquote>{work.proposition}</blockquote>
              {work.externalUrl ? (
                <a className="text-link text-link--dark" href={work.externalUrl} target="_blank" rel="noreferrer">Read on the original platform ↗</a>
              ) : null}
            </div>
          </section>

          <article className={styles.article}>
            <section className={styles.section}>
              <p className="section-label">Synopsis</p>
              <p className={styles.synopsisLead}>{work.summary}</p>
            </section>

            <section className={styles.section}>
              <p className="section-label">The problem it responds to</p>
              <p className={styles.bodyCopy}>{work.problem}</p>
            </section>

            <section className={styles.section}>
              <p className="section-label">What the work contributes</p>
              <ul className="contribution-list">
                {work.contributions.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>

            {(work.sections || []).map((section) => (
              <section className={styles.section} key={section.label}>
                <p className="section-label">{section.label}</p>
                {section.intro ? <p className={styles.sectionIntro}>{section.intro}</p> : null}
                {section.items?.length ? (
                  <ul className="development-list">
                    {section.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                ) : null}
              </section>
            ))}

            <section className={styles.section}>
              <p className="section-label">Development</p>
              <ul className="development-list">
                {work.development.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>

            <section className={styles.section}>
              <p className="section-label">Keywords</p>
              <div className="tag-list">
                {work.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </section>
          </article>
        </div>

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
