import Link from 'next/link';

export function SiteHeader({ tone = 'night' }) {
  return (
    <header className={`site-header site-header--${tone}`}>
      <Link className="wordmark" href="/">
        Leah Buzek
      </Link>
      <nav className="site-nav" aria-label="Primary navigation">
        <Link href="/about">About</Link>
        <Link href="/work">Body of work</Link>
        <Link href="/writing">Writing</Link>
        <a href="mailto:LeahGBuzek@gmail.com">Contact</a>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <p className="footer-tagline">for the love of our neighbors.</p>
        <p>A living body of work in public systems, care, civic infrastructure, and relational ethics.</p>
      </div>
      <div className="footer-links">
        <a href="https://medium.com/@progresswithpurpose" target="_blank" rel="noreferrer">Medium ↗</a>
        <a href="https://substack.com/@coordinatesmayvary" target="_blank" rel="noreferrer">Substack ↗</a>
        <a href="mailto:LeahGBuzek@gmail.com">Email ↗</a>
      </div>
      <p className="footer-note">Full source manuscripts are retained privately. The public site presents authored synopses rather than downloadable files.</p>
    </footer>
  );
}

export function ConstellationGraphic({ compact = false }) {
  return (
    <svg className={compact ? 'constellation constellation--compact' : 'constellation'} viewBox="0 0 900 620" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.55">
        <path d="M86 425 L212 316 L326 362 L449 225 L584 276 L765 116" />
        <path d="M212 316 L270 141 L449 225 L496 75 L765 116" />
        <path d="M326 362 L438 521 L584 276 L748 455" />
        <path d="M270 141 L168 89" />
        <path d="M438 521 L534 570" />
      </g>
      <g fill="currentColor">
        {[['86','425','5'],['212','316','7'],['326','362','5'],['449','225','9'],['584','276','6'],['765','116','7'],['270','141','5'],['496','75','6'],['438','521','5'],['748','455','5'],['168','89','3'],['534','570','3']].map(([cx, cy, r]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} />
        ))}
      </g>
    </svg>
  );
}
