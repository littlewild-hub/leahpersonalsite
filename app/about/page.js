import Link from 'next/link';
import { ConstellationGraphic, SiteFooter, SiteHeader } from '../../components/SiteChrome';

export const metadata = {
  title: 'About Leah Buzek',
  description:
    'Leah Buzek is a program strategist, systems designer, researcher, and public-service practitioner working across care, civic infrastructure, and institutional design.',
};

const experience = [
  {
    period: 'Dec 2024–present',
    organization: 'Ohio Domestic Violence Network · AmeriCorps',
    role: 'VISTA, Survivor Engagement & Program Coordination',
    description:
      'Leads survivor-centered program development at the statewide level. The work includes the Survivor Voices Council, a statewide domestic-violence and substance-use needs assessment, professional curricula, technical assistance, operational systems, partner engagement, and strategic planning.',
  },
  {
    period: '2023–present',
    organization: 'Independent practice',
    role: 'Researcher & Framework Developer',
    description:
      'Develops original frameworks, assessments, policy proposals, and public writing at the intersection of relational ethics, caregiver trauma, systems design, and civic capacity. This work includes TRACEs, Continuity Ethics, Relational Ontometry, and the Reciprocal Perception and Care Model.',
  },
  {
    period: 'Dec 2023–Sept 2024',
    organization: 'Child & Adolescent Behavioral Health',
    role: 'Family Peer Supporter',
    description:
      'Worked with families navigating mental health, juvenile justice, child-serving systems, and multi-system involvement. Collaborated with multidisciplinary teams, co-managed three United Way-funded Triple P expansion programs, and co-authored a successful Family Success Network grant application.',
  },
];

const presentations = [
  {
    date: 'July 2025–February 2026',
    host: 'UConn Training Institutes · Courage to Caregivers · NAMI Ohio FPS ProNet · FREDLA PPS Provider Learning Community',
    title: 'TRACEs & Calling It What It Is — caregiver-trauma research presented across poster, summit, peer-network, and provider-learning settings',
    detail: 'UConn poster presentation, July 6–10, 2025 · Courage to Caregivers, November 6, 2025 · NAMI Ohio FPS ProNet, November 11, 2025 · FREDLA, February 12, 2026',
  },
  {
    date: '2024',
    host: 'OhioPRO Summit',
    title: 'Panelist on multi-system youth caregiving',
  },
];

const trainingTopics = [
  {
    name: 'Family, youth & multi-system care',
    count: 76,
    percent: 50.7,
  },
  {
    name: 'Behavioral health & treatment',
    count: 63,
    percent: 42.0,
  },
  {
    name: 'Trauma, violence & safety',
    count: 44,
    percent: 29.3,
  },
  {
    name: 'Leadership, ethics & civic practice',
    count: 28,
    percent: 18.7,
  },
  {
    name: 'Program design, data & operations',
    count: 13,
    percent: 8.7,
  },
];

const intensiveLearning = [
  {
    year: '2024',
    title: 'FREDLA Parent Peer Support Practice Model',
    provider: 'The Mosaic Project',
    hours: '40 hours',
  },
  {
    year: '2023',
    title: 'NAMI Ohio Family Peer Support',
    provider: 'NAMI Ohio / StarkMHAR',
    hours: '40 hours',
  },
  {
    year: '2024',
    title: 'Empowering Caregivers, Strengthening Families',
    provider: 'R. Cassidy Seminars',
    hours: '10 hours',
  },
  {
    year: '2024',
    title: 'Exercising Leadership: Foundational Principles',
    provider: 'HarvardX',
    hours: '7 hours',
  },
  {
    year: '2024–2025',
    title: 'Applied Scrum & Sprint Planning',
    provider: 'USMx',
    hours: '14 hours',
  },
  {
    year: '2025',
    title: 'Nonprofit Capacity Building: Strategy',
    provider: 'OCAAR',
    hours: '3 hours',
  },
];

const credentials = [
  {
    title: 'Certified Family Peer Support',
    detail: 'FREDLA Model · FREDLA Supervision · NAMI Model',
  },
  {
    title: 'Triple P',
    detail: 'Level 3 Discussion Group · Level 4 Standard',
  },
  {
    title: 'CANS Assessor',
    detail: 'TCOM / Praed Foundation',
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="about-page">
        <section className="about-hero">
          <div className="about-hero__copy">
            <p className="eyebrow">About Leah Buzek</p>
            <h1>I build where <em>care</em> meets structure.</h1>
            <p className="about-hero__lede">
              I am a program strategist and systems designer working across public service,
              survivor-centered practice, family systems, research, and civic infrastructure.
              I translate complex ideas into usable structures—and ambiguous work into something
              people can actually implement.
            </p>
            <div className="about-hero__actions">
              <Link className="button button--peach" href="/work">Explore the body of work →</Link>
              <a className="text-link" href="mailto:LeahGBuzek@gmail.com">Contact me ↗</a>
            </div>
          </div>

          <div className="about-hero__field" aria-hidden="true">
            <ConstellationGraphic compact />
            <span className="about-field-label about-field-label--care">care</span>
            <span className="about-field-label about-field-label--research">research</span>
            <span className="about-field-label about-field-label--systems">systems</span>
            <span className="about-field-label about-field-label--public">public life</span>
          </div>

          <div className="about-hero__facts" aria-label="Practice at a glance">
            <article><strong>150</strong><span>documented independent trainings</span></article>
            <article><strong>Statewide</strong><span>program, research, and partner coordination</span></article>
            <article><strong>2023–present</strong><span>independent framework development</span></article>
          </div>
        </section>

        <section className="about-thesis">
          <div>
            <p className="eyebrow eyebrow--dark">The throughline</p>
            <h2>I translate <em>friction</em><br />into infrastructure.</h2>
          </div>
          <div className="about-thesis__body">
            <p>
              My work begins with the distance between what an institution says it values and what
              people can actually reach, use, trust, or survive. I map that distance: the broken
              handoff, the missing language, the invisible labor, the power imbalance, the form that
              no human being can reasonably complete.
            </p>
            <p>
              Then I build. Sometimes the result is a statewide advisory council, an assessment,
              a training curriculum, or an operational system. Sometimes it is a theory, a policy
              proposal, or a framework that gives people better language for what they already know
              is happening.
            </p>
            <p>
              The forms change. The method does not: listen closely, name the structure honestly,
              and leave behind something that increases people’s capacity to act.
            </p>
          </div>
        </section>

        <section className="about-formation">
          <div className="about-formation__column">
            <p className="eyebrow eyebrow--dark">Education</p>
            <article>
              <span>In progress</span>
              <h3>Master of Public Service</h3>
              <p>University of Arkansas · Clinton School of Public Service</p>
            </article>
            <article>
              <span>Completed</span>
              <h3>Bachelor of Specialized Studies</h3>
              <p>Ohio University · Applied Social Studies</p>
            </article>
          </div>

          <div className="about-formation__column">
            <p className="eyebrow eyebrow--dark">Leadership development</p>
            <article>
              <span>May 2025</span>
              <h3>NEW Leadership Ohio</h3>
              <p>A residential public-leadership institute focused on women in politics, policymaking, skill-building, and leadership practice.</p>
              <a href="https://wgss.osu.edu/newleadershipohio" target="_blank" rel="noreferrer">Program information ↗</a>
            </article>
            <article>
              <span>Spring 2026</span>
              <h3>Leadership Stark County Spotlight</h3>
              <p>A community leadership program centered on personal strengths, local institutions, service, and meaningful civic connection.</p>
              <a href="https://leadershipstarkcounty.org/course/spotlight/" target="_blank" rel="noreferrer">Program information ↗</a>
            </article>
          </div>
        </section>

        <section className="about-experience">
          <header className="about-section-heading">
            <p className="eyebrow">Professional practice</p>
            <h2>Work built in the field.</h2>
            <p>Experience spanning direct family support, statewide program development, research, training, and operational design.</p>
          </header>
          <div className="about-timeline">
            {experience.map((item) => (
              <article key={`${item.period}-${item.role}`}>
                <div className="about-timeline__marker" aria-hidden="true" />
                <p className="about-timeline__period">{item.period}</p>
                <div>
                  <p className="about-timeline__organization">{item.organization}</p>
                  <h3>{item.role}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-presentations">
          <header className="about-section-heading about-section-heading--dark">
            <p className="eyebrow eyebrow--dark">Presentations & talks</p>
            <h2>Research made public.</h2>
            <p>Selected presentations translating caregiver-trauma research into language and tools practitioners can use.</p>
          </header>
          <div className="about-talk-grid">
            {presentations.map((talk) => (
              <article key={`${talk.date}-${talk.host}`}>
                <div className="about-talk__meta">
                  <time>{talk.date}</time>
                </div>
                <p>{talk.host}</p>
                <h3>{talk.title}</h3>
                {talk.detail ? <p className="about-talk__detail">{talk.detail}</p> : null}
              </article>
            ))}
          </div>
        </section>

        <section className="about-learning">
          <header className="about-learning__intro">
            <div>
              <p className="eyebrow">Independent study</p>
              <h2>The study underneath the work.</h2>
            </div>
            <div>
              <p className="about-learning__number">150</p>
              <p>documented trainings in the current archive</p>
            </div>
          </header>

          <div className="about-learning__intensives">
            <div className="about-topic-panel">
              <p className="eyebrow">Training distribution</p>
              <p className="about-topic-note">
                Share of the 150-record archive tagged within each domain. Trainings can span more
                than one topic, so the percentages intentionally overlap.
              </p>
              <div className="about-topic-distribution">
                {trainingTopics.map((topic) => (
                  <article key={topic.name}>
                    <div>
                      <h3>{topic.name}</h3>
                      <span>{topic.count} trainings</span>
                    </div>
                    <strong>{topic.percent.toFixed(1)}%</strong>
                    <div className="about-topic-bar" aria-hidden="true">
                      <i style={{ width: `${topic.percent}%` }} />
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="about-intensive-column">
              <p className="eyebrow">Selected intensive learning</p>
              <div className="about-intensive-list">
                {intensiveLearning.map((item) => (
                  <article key={`${item.title}-${item.year}`}>
                    <span>{item.year}</span>
                    <div><h3>{item.title}</h3><p>{item.provider}</p></div>
                    <strong>{item.hours}</strong>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="about-credentials">
          <header>
            <p className="eyebrow eyebrow--dark">Credentials</p>
            <h2>Formal practice foundations.</h2>
          </header>
          <div>
            {credentials.map((credential) => (
              <article key={credential.title}>
                <h3>{credential.title}</h3>
                <p>{credential.detail}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
