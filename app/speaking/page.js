import Link from 'next/link';
import { SiteFooter, SiteHeader } from '../../components/SiteChrome';
import { ArrowDownIcon, ArrowRightIcon, ArrowUpRightIcon } from '../../components/Icons';
import { socialImage } from '../../lib/site-metadata';
import styles from './speaking.module.css';

export const metadata = {
  title: 'Speaking & Plenary Topics — Leah Buzek',
  description:
    'Speaking topics from Leah Buzek on public service, advocacy, grief, moral courage, lived expertise, caregiver trauma, civic infrastructure, and rural communities.',
  alternates: { canonical: '/speaking' },
  openGraph: {
    title: 'Speaking & Plenary Topics — Leah Buzek',
    description:
      'Clear-eyed conversations about the emotional, ethical, and structural realities of public service and advocacy.',
    url: '/speaking',
    type: 'website',
    images: [socialImage],
  },
};

const topics = [
  {
    title: 'Service Is Not Value-Neutral',
    subtitle: 'Public service, dissent, and the courage to take a side',
    description:
      'The language of neutrality can obscure the values already embedded in public systems. This conversation examines dissent as a form of service, the politics of professional restraint, and what it means to act when staying impartial protects the existing arrangement.',
    question: 'When does remaining neutral become a choice about whose suffering counts?',
    audiences: 'Public-service professionals · civic leaders · policy and advocacy audiences',
  },
  {
    title: 'Experts by Experience',
    subtitle: 'Who gets to define the problem—and who gets to design the response',
    description:
      'Survivors, caregivers, and community members are too often invited to provide a story after decisions have already been made. This session moves beyond representation to examine what meaningful shared authority looks like in program design, governance, research, and systems change.',
    question: 'What changes when lived experience is treated as expertise rather than testimony?',
    audiences: 'Nonprofit leaders · survivor advocates · participatory-design practitioners',
  },
  {
    title: 'When Care Becomes Invisible',
    subtitle: 'Caregiver trauma and the cost of holding systems together',
    description:
      'Families and caregivers frequently absorb the consequences of fragmented public systems while their own trauma, safety, and support needs remain unrecognized. Grounded in caregiver-centered research and framework development, this talk asks who is expected to carry the weight when institutions fail to coordinate care.',
    question: 'What happens to the people a system quietly relies on to absorb its failures?',
    audiences: 'Family-serving organizations · behavioral-health professionals · child-serving systems',
  },
  {
    title: 'Making Care Operational',
    subtitle: 'From good intentions to programs, policy, and civic infrastructure',
    description:
      'Care is not only a personal value; it can be built into processes, resource allocation, decision-making, and institutional design. This session translates relational ethics into the practical architecture of programs and systems that respond to actual human conditions.',
    question: 'What would change if we designed institutions around the conditions of being human?',
    audiences: 'Program designers · nonprofit executives · government and philanthropic leaders',
  },
  {
    title: 'Rural Is Not a Footnote',
    subtitle: 'Building civic capacity close to home',
    description:
      'Rural communities are frequently reduced to electoral shorthand, service deserts, or problems to be solved from somewhere else. This conversation considers local trust, informal leadership, community infrastructure, and what it takes to build durable civic power without treating rural people as an afterthought.',
    question: 'What becomes possible when rural communities are approached as sources of knowledge and power?',
    audiences: 'Community organizers · rural-serving organizations · civic and political convenings',
  },
  {
    title: 'Two Things Can Be True',
    subtitle: 'Nuance in a world that asks for precision',
    description:
      'We are routinely asked for a clear position, a single cause, or a definitive answer. But precision and simplicity are not the same. This talk explores how to hold competing truths, distinguish nuance from indecision, revise a judgment without treating revision as failure, and still act decisively when reality refuses clean categories.',
    question: 'What if intellectual honesty requires us to say both—and precision requires us to explain how?',
    audiences: 'Leaders · facilitators · public-service and advocacy audiences',
  },
];

export default function SpeakingPage() {
  return (
    <>
      <SiteHeader />
      <main className={styles.page} id="main-content">
        <section className={styles.hero}>
          <h1>The conversations we cannot afford to make <em>comfortable.</em></h1>
          <p className={styles.heroLede}>
            Clear-eyed talks about care, power, grief, lived experience, and the systems
            that shape whose lives are treated as worthy of attention.
          </p>
          <div className={styles.heroActions}>
            <a className="button button--peach" href="#featured-plenary">
              Explore the featured plenary <ArrowDownIcon />
            </a>
            <a className="text-link" href="mailto:LeahGBuzek@gmail.com?subject=Speaking%20inquiry">
              Inquire about speaking <ArrowUpRightIcon />
            </a>
          </div>
        </section>

        <section className={styles.featured} id="featured-plenary">
          <div className={styles.featuredIntro}>
            <h2>Sitting in the <em>Ick.</em></h2>
            <p className={styles.featuredLabel}>Featured plenary</p>
            <p className={styles.featuredSubtitle}>Rage, Grief, and Heartache in Public Service and Advocacy</p>
            <div className={styles.tags}>
              <span>Public service</span>
              <span>Advocacy</span>
              <span>Emotional truth</span>
            </div>
          </div>

          <div className={styles.featuredBody}>
            <blockquote>
              Hope should not be the price of admission to conversations about injustice.
            </blockquote>
            <p>
              Public-service and advocacy spaces spend considerable energy celebrating hope
              and resilience. Far less attention is given to what happens when the people
              doing the work are furious, grieving, or heartbroken—and when those feelings
              are telling the truth about the conditions they confront.
            </p>
            <p>
              This plenary makes room for the emotions the field keeps trying to tidy up.
              It asks what rage recognizes, what grief refuses to let us forget, and who
              benefits when advocates are expected to remain endlessly hopeful, resilient,
              and easy to manage.
            </p>
            <p className={styles.featuredClosing}>
              Not every story needs to end in hope to be worth hearing.
            </p>
          </div>
        </section>

        <section className={styles.topics} aria-labelledby="speaking-topics-heading">
          <header className={styles.topicsHeader}>
            <div>
              <h2 id="speaking-topics-heading">Other necessary <em>conversations.</em></h2>
            </div>
            <p>
              Each topic draws from an existing body of work across public service,
              survivor-centered practice, family systems, research, and civic design.
            </p>
          </header>

          <div className={styles.topicList}>
            {topics.map((topic) => (
              <article className={styles.topicCard} key={topic.title}>
                <div className={styles.topicHeading}>
                  <h3>{topic.title}</h3>
                  <p className={styles.topicSubtitle}>{topic.subtitle}</p>
                </div>
                <div className={styles.topicBody}>
                  <p>{topic.description}</p>
                  <blockquote>{topic.question}</blockquote>
                  <p className={styles.audiences}>{topic.audiences}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.invitation}>
          <div>
            <h2>For the discussions that deserve more than a tidy ending.</h2>
            <p>
              Available for plenaries, keynote conversations, panels, and workshops.
              Topics can be shaped around your audience and the questions your field
              most needs to face.
            </p>
          </div>
          <div className={styles.invitationActions}>
            <a className="button button--night" href="mailto:LeahGBuzek@gmail.com?subject=Speaking%20inquiry">
              Start a conversation <ArrowRightIcon />
            </a>
            <Link className="text-link text-link--dark" href="/work">
              Explore the body of work <ArrowUpRightIcon />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
