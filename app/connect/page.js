import Link from 'next/link';
import { SiteFooter, SiteHeader } from '../../components/SiteChrome';
import { ArrowRightIcon } from '../../components/Icons';
import { socialImage } from '../../lib/site-metadata';
import InquiryForm from './InquiryForm';
import styles from './connect.module.css';

export const metadata = {
  title: 'Connect — Leah Buzek',
  description: 'Invite Leah Buzek to speak, collaborate, consult, research, or work on public systems, civic infrastructure, relational power, and implementation.',
  alternates: { canonical: '/connect' },
  openGraph: {
    title: 'Connect — Leah Buzek',
    description: 'Speaking, collaboration, consulting, research, and institutional work with Leah Buzek.',
    url: '/connect',
    type: 'website',
    images: [socialImage],
  },
};

const paths = [
  {
    title: 'Invite me to speak',
    body: 'For conferences, plenaries, workshops, panels, classrooms, and rooms that need a sharper conversation about public service, advocacy, trauma, power, care, or civic life.',
    type: 'speaking',
    label: 'Start a speaking inquiry',
  },
  {
    title: 'Bring me into a problem',
    body: 'For institutions, coalitions, campaigns, and public-interest teams dealing with systems that are fragmented, difficult to measure, difficult to implement, or failing the people moving through them.',
    type: 'project',
    label: 'Tell me about the problem',
  },
  {
    title: 'Collaborate on research or practice',
    body: 'For researchers, practitioners, funders, and public institutions interested in early-stage models, applied research, pilots, measurement, or cross-system work.',
    type: 'research',
    label: 'Start a collaboration',
  },
  {
    title: 'Talk about a role or long-term engagement',
    body: 'For organizations looking for someone who can move between strategy, research, implementation, public systems, and the operational reality underneath the plan.',
    type: 'role',
    label: 'Start the conversation',
  },
];

const keywords = ['Institutions', 'People', 'Systems', 'Trauma', 'Measurement', 'Possibility'];

function inquiryHref(type, params = {}) {
  const query = new URLSearchParams();
  query.set('type', type);
  ['from', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach((key) => {
    if (typeof params?.[key] === 'string' && params[key]) query.set(key, params[key]);
  });
  return `/connect?${query.toString()}#inquiry`;
}

export default async function ConnectPage({ searchParams }) {
  const params = await searchParams;

  return (
    <>
      <div className={styles.headerShell}>
        <SiteHeader />
      </div>
      <main id="main-content" className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <p className={styles.kicker}>Connect</p>
              <h1>If something here made you think, <em>“we are dealing with this too,”</em> that is enough of a reason to write.</h1>
              <p className={styles.lede}>
                I am interested in difficult public problems, especially the ones that sit between disciplines, institutions, and job descriptions. You do not need to arrive with a polished scope of work.
              </p>
              <div className={styles.heroActions}>
                <Link className={styles.primaryAction} href="/work">
                  Explore my work
                </Link>
                <Link className={styles.secondaryAction} href={inquiryHref('project', params)}>
                  Let&apos;s talk
                </Link>
              </div>
            </div>

            <div className={styles.heroVisual} aria-hidden="true">
              <div className={styles.moon} />
              <div className={styles.branch}>
                <span className={`${styles.leaf} ${styles.leafOne}`} />
                <span className={`${styles.leaf} ${styles.leafTwo}`} />
                <span className={`${styles.leaf} ${styles.leafThree}`} />
                <span className={`${styles.leaf} ${styles.leafFour}`} />
                <span className={`${styles.leaf} ${styles.leafFive}`} />
                <span className={`${styles.leaf} ${styles.leafSix}`} />
              </div>
            </div>
          </div>

          <div className={styles.keywordBand} aria-label="Areas of work">
            {keywords.map((keyword, index) => (
              <span key={keyword}>
                {keyword}
                {index < keywords.length - 1 ? <i aria-hidden="true">/</i> : null}
              </span>
            ))}
          </div>
        </section>

        <section className={styles.paths} aria-label="Ways to work together">
          {paths.map((path) => (
            <Link href={inquiryHref(path.type, params)} key={path.title}>
              <div>
                <h2>{path.title}</h2>
                <p>{path.body}</p>
              </div>
              <span>{path.label} <ArrowRightIcon /></span>
            </Link>
          ))}
        </section>

        <section className={styles.inquiry} id="inquiry" aria-labelledby="inquiry-heading">
          <div className={styles.inquiryIntro}>
            <p className={styles.kicker}>Start here</p>
            <h2 id="inquiry-heading">Tell me enough to understand the shape of it.</h2>
            <p>A few sentences is plenty. If a particular essay, framework, project, or argument brought you here, the site will carry that context into your note automatically.</p>
          </div>
          <InquiryForm />
        </section>

        <section className={styles.context}>
          <div>
            <p className={styles.kicker}>Useful context</p>
            <h2>A good first note is short.</h2>
          </div>
          <div>
            <p>Tell me what you are working on, what made you reach out, and what kind of conversation you think might be useful. You do not need a polished proposal, scope of work, or perfectly named problem.</p>
            <p>I am based in Ohio and work across public service, nonprofit, civic, research, advocacy, and institutional settings.</p>
          </div>
        </section>
      </main>
      <SiteFooter showConnection={false} />
    </>
  );
}
