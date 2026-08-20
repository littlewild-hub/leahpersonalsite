import Link from 'next/link';
import { ConstellationGraphic, SiteFooter, SiteHeader } from '../components/SiteChrome';
import { constellations, getWorksByConstellation, works } from '../data/catalog-extended';

function PracticeIcon({ type }) {
  const commonProps = {
    className: `practice-icon practice-icon--${type}`,
    viewBox: '0 0 80 80',
    'aria-hidden': true,
    focusable: 'false',
  };

  if (type === 'systems') {
    return (
      <svg {...commonProps}>
        <path className="practice-icon__line" d="M15 22 40 12 65 22 65 52 40 68 15 52Z" />
        <path className="practice-icon__line" d="M15 22 40 40 65 22M15 52 40 40 65 52M40 12V68" />
        <circle className="practice-icon__node" cx="15" cy="22" r="3.2" />
        <circle className="practice-icon__node" cx="40" cy="12" r="3.2" />
        <circle className="practice-icon__node" cx="65" cy="22" r="3.2" />
        <circle className="practice-icon__node" cx="65" cy="52" r="3.2" />
        <circle className="practice-icon__node" cx="40" cy="68" r="3.2" />
        <circle className="practice-icon__node" cx="15" cy="52" r="3.2" />
        <circle className="practice-icon__node practice-icon__node--core" cx="40" cy="40" r="4" />
      </svg>
    );
  }

  if (type === 'relational') {
    return (
      <svg {...commonProps}>
        <ellipse className="practice-icon__line" cx="32" cy="40" rx="24" ry="14" transform="rotate(-28 32 40)" />
        <ellipse className="practice-icon__line" cx="48" cy="40" rx="24" ry="14" transform="rotate(28 48 40)" />
        <path className="practice-icon__line" d="M19 25 40 40 61 25M19 55 40 40 61 55" />
        <circle className="practice-icon__node" cx="19" cy="25" r="3.2" />
        <circle className="practice-icon__node" cx="61" cy="25" r="3.2" />
        <circle className="practice-icon__node" cx="19" cy="55" r="3.2" />
        <circle className="practice-icon__node" cx="61" cy="55" r="3.2" />
        <circle className="practice-icon__node practice-icon__node--core" cx="40" cy="40" r="4" />
      </svg>
    );
  }

  if (type === 'synthesis') {
    return (
      <svg {...commonProps}>
        <path className="practice-icon__line" d="M12 18 48 40M10 40H48M12 62 48 40M28 10 48 40M28 70 48 40M48 40H70" />
        <circle className="practice-icon__node" cx="12" cy="18" r="3.2" />
        <circle className="practice-icon__node" cx="10" cy="40" r="3.2" />
        <circle className="practice-icon__node" cx="12" cy="62" r="3.2" />
        <circle className="practice-icon__node" cx="28" cy="10" r="3.2" />
        <circle className="practice-icon__node" cx="28" cy="70" r="3.2" />
        <circle className="practice-icon__node practice-icon__node--core" cx="48" cy="40" r="4.5" />
        <circle className="practice-icon__node" cx="70" cy="40" r="3.2" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path className="practice-icon__line" d="M40 68V48M40 48 24 34M40 48 56 34M24 34 15 18M24 34 31 16M56 34 49 16M56 34 65 18" />
      <circle className="practice-icon__node" cx="40" cy="68" r="3.2" />
      <circle className="practice-icon__node practice-icon__node--core" cx="40" cy="48" r="4.2" />
      <circle className="practice-icon__node" cx="24" cy="34" r="3.2" />
      <circle className="practice-icon__node" cx="56" cy="34" r="3.2" />
      <circle className="practice-icon__node" cx="15" cy="18" r="3.2" />
      <circle className="practice-icon__node" cx="31" cy="16" r="3.2" />
      <circle className="practice-icon__node" cx="49" cy="16" r="3.2" />
      <circle className="practice-icon__node" cx="65" cy="18" r="3.2" />
    </svg>
  );
}

export default function Home() {
  const featured = [
    'continuity-ethics',
    'traces',
    'epic',
    'raise-the-bar',
    'statewide-needs-assessment',
  ].map((slug) => works.find((work) => work.slug === slug)).filter(Boolean);

  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero" id="top">
          <div className="hero__copy">
            <p className="eyebrow">Public systems · relational ethics · civic infrastructure</p>
            <h1>for the <em>love</em><br />of our <em>neighbors.</em></h1>
            <div className="hero-rule" />
            <p className="hero__lede">Building the language, programs, policy, and infrastructure required to make care operational.</p>
            <div className="hero-actions">
              <Link className="button button--peach" href="/work">Enter the body of work →</Link>
              <Link className="text-link" href="/writing">Read the public writing ↗</Link>
            </div>
          </div>

          <div className="hero__art hero__constellation-field" aria-hidden="true">
            <div className="hero__star-cloud hero__star-cloud--one" />
            <div className="hero__star-cloud hero__star-cloud--two" />
            <ConstellationGraphic compact />
            <span className="hero__bright-star hero__bright-star--one" />
            <span className="hero__bright-star hero__bright-star--two" />
            <span className="hero__bright-star hero__bright-star--three" />
          </div>
        </section>

        <section className="practice-band" aria-label="How I work">
          <article>
            <PracticeIcon type="systems" />
            <h2>Systems design</h2>
            <p>Programs and operational infrastructure built around actual human conditions.</p>
          </article>
          <article>
            <PracticeIcon type="relational" />
            <h2>Relational analysis</h2>
            <p>Tracing how power, perception, proximity, and care move through a system.</p>
          </article>
          <article>
            <PracticeIcon type="synthesis" />
            <h2>Public synthesis</h2>
            <p>Turning research, lived experience, and complexity into usable direction.</p>
          </article>
          <article>
            <PracticeIcon type="civic" />
            <h2>Civic capacity</h2>
            <p>Creating structures through which people can participate and exercise power.</p>
          </article>
        </section>

        <section className="corpus-intro">
          <div>
            <p className="eyebrow eyebrow--dark">A connected corpus</p>
            <h2>A body of work, <em>connected.</em></h2>
          </div>
          <div>
            <p>
              This site is the public edition of a growing body of work: theory that becomes a model, research that becomes a framework, a framework that becomes training, and public problems translated into programs or policy.
            </p>
            <p>
              Visitors can read substantive synopses and follow the relationships between works.
            </p>
            <Link className="button button--night" href="/work">Explore all {works.length} works →</Link>
          </div>
        </section>

        <section className="constellation-preview">
          <ConstellationGraphic />
          <div className="constellation-labels">
            {constellations.map((item, index) => (
              <Link className={`constellation-label constellation-label--${index + 1}`} href={`/work#${item.id}`} key={item.id}>
                <span>{item.number}</span>
                <strong>{item.name}</strong>
                <small>{getWorksByConstellation(item.id).length} works</small>
              </Link>
            ))}
          </div>
        </section>

        <section className="featured-work">
          <header className="section-title-row section-title-row--light">
            <div><p className="eyebrow">Selected works</p><h2>Five entry points.</h2></div>
            <p>Theory, research, participatory design, campaign infrastructure, and applied statewide work—different expressions of the same concern with making care operational.</p>
          </header>
          <div className="featured-grid">
            {featured.map((work) => (
              <Link href={`/work/${work.slug}`} key={work.slug}>
                <p>{work.kind} · {work.year}</p>
                <h3>{work.title}</h3>
                <span>{work.subtitle}</span>
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
