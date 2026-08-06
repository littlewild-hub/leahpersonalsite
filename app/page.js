import Link from 'next/link';
import { ConstellationGraphic, SiteFooter, SiteHeader } from '../components/SiteChrome';
import { constellations, getWorksByConstellation, works } from '../data/works';

export default function Home() {
  const featured = [
    'continuity-ethics',
    'calling-it-what-it-is',
    'statewide-needs-assessment',
    'ohio-housing-accountability-revitalization',
    'trouble-with-new',
  ].map((slug) => works.find((work) => work.slug === slug)).filter(Boolean);

  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero" id="top">
          <div className="hero__copy">
            <p className="eyebrow">Public systems · relational ethics · civic infrastructure</p>
            <h1>for the <em>love</em><br />of our neighbors.</h1>
            <div className="hero-rule" />
            <p className="hero__lede">Building the language, programs, policy, and infrastructure required to make care operational.</p>
            <div className="hero-actions">
              <Link className="button button--peach" href="/work">Enter the body of work →</Link>
              <Link className="text-link" href="/writing">Read the public writing ↗</Link>
            </div>
          </div>

          <div className="hero__art">
            <div className="landscape-arch">
              <div className="landscape-sun" />
              <div className="ridge ridge--far" />
              <div className="ridge ridge--middle" />
              <div className="ridge ridge--near" />
              <div className="wildflowers" aria-hidden="true">
                <i /><i /><i /><i /><i /><i /><i />
              </div>
            </div>
            <ConstellationGraphic compact />
          </div>
        </section>

        <section className="practice-band" aria-label="How I work">
          <article><span>✦</span><h2>Systems design</h2><p>Programs and operational infrastructure built around actual human conditions.</p></article>
          <article><span>⌁</span><h2>Relational analysis</h2><p>Tracing how power, perception, proximity, and care move through a system.</p></article>
          <article><span>◇</span><h2>Public synthesis</h2><p>Turning research, lived experience, and complexity into usable direction.</p></article>
          <article><span>△</span><h2>Civic capacity</h2><p>Creating structures through which people can participate and exercise power.</p></article>
        </section>

        <section className="corpus-intro">
          <div>
            <p className="eyebrow eyebrow--dark">A connected corpus</p>
            <h2>The work is a <em>constellation,</em><br />not a filing cabinet.</h2>
          </div>
          <div>
            <p>
              This site is the public edition of a growing body of work: theory that becomes a model, research that becomes a framework, a framework that becomes training, and public problems translated into programs or policy.
            </p>
            <p>
              Visitors can read substantive synopses and follow the relationships between works. The underlying PDFs and manuscripts remain private.
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
            <p>Different doors into the same underlying concern: what people owe one another, and what systems must be built to make that obligation real.</p>
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

        <section className="about-home" id="about">
          <div>
            <p className="eyebrow eyebrow--dark">About the practice</p>
            <h2>I build the connective tissue.</h2>
          </div>
          <div>
            <p className="about-lead">My work sits where public systems, lived experience, political imagination, and practical implementation collide.</p>
            <p>I am interested in the distance between what institutions say they value and what people can actually reach, use, and trust. That distance is where I tend to work: mapping the system, finding the friction, naming what has been left unnamed, and building something more honest in its place.</p>
            <p>The forms vary—research, frameworks, programs, policy proposals, operational systems, training, and essays. The throughline does not.</p>
          </div>
        </section>

        <section className="closing-call">
          <p>Public work should leave people with more power than it found them.</p>
          <a className="button button--outline" href="mailto:LeahGBuzek@gmail.com">Let’s connect →</a>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
