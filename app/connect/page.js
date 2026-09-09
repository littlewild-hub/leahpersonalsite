import Link from 'next/link';
import { SiteFooter, SiteHeader } from '../../components/SiteChrome';
import { ArrowRightIcon, ArrowUpRightIcon } from '../../components/Icons';
import { socialImage } from '../../lib/site-metadata';
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
    href: '/speaking',
    label: 'See speaking topics',
  },
  {
    title: 'Bring me into a problem',
    body: 'For institutions, coalitions, campaigns, and public-interest teams dealing with systems that are fragmented, difficult to measure, difficult to implement, or failing the people moving through them.',
    href: 'mailto:LeahGBuzek@gmail.com?subject=Institutional%20or%20project%20inquiry',
    label: 'Email about the problem',
  },
  {
    title: 'Collaborate on research or practice',
    body: 'For researchers, practitioners, funders, and public institutions interested in early-stage models, applied research, pilots, measurement, or cross-system work.',
    href: 'mailto:LeahGBuzek@gmail.com?subject=Research%20or%20collaboration%20inquiry',
    label: 'Start a collaboration',
  },
  {
    title: 'Talk about a role or long-term engagement',
    body: 'For organizations looking for someone who can move between strategy, research, implementation, public systems, and the operational reality underneath the plan.',
    href: 'mailto:LeahGBuzek@gmail.com?subject=Role%20or%20long-term%20engagement',
    label: 'Start the conversation',
  },
];

export default function ConnectPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className={styles.page}>
        <section className={styles.hero}>
          <p className={styles.kicker}>Connect</p>
          <h1>If something here made you think, <em>“we are dealing with this too,”</em> that is enough of a reason to write.</h1>
          <p className={styles.lede}>
            I am interested in difficult public problems, especially the ones that sit between disciplines, institutions, and job descriptions. You do not need to arrive with a polished scope of work.
          </p>
          <a className={styles.email} href="mailto:LeahGBuzek@gmail.com?subject=Conversation%20from%20leahbuzek.com">
            Email Leah <ArrowUpRightIcon />
          </a>
        </section>

        <section className={styles.paths} aria-label="Ways to work together">
          {paths.map((path) => {
            const external = path.href.startsWith('mailto:');
            const content = (
              <>
                <div>
                  <h2>{path.title}</h2>
                  <p>{path.body}</p>
                </div>
                <span>{path.label} {external ? <ArrowUpRightIcon /> : <ArrowRightIcon />}</span>
              </>
            );

            return external ? (
              <a href={path.href} key={path.title}>{content}</a>
            ) : (
              <Link href={path.href} key={path.title}>{content}</Link>
            );
          })}
        </section>

        <section className={styles.context}>
          <div>
            <p className={styles.kicker}>Useful context</p>
            <h2>A good first note is short.</h2>
          </div>
          <div>
            <p>Tell me what you are working on, what made you reach out, and what kind of conversation you think might be useful. If a particular essay, framework, project, or argument brought you here, mention it.</p>
            <p>I am based in Ohio and work across public service, nonprofit, civic, research, advocacy, and institutional settings.</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
