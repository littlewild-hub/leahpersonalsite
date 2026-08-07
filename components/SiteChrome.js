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
        <a href="/llms.txt">LLMs.txt ↗</a>
      </div>
      <p className="footer-note">Full source manuscripts are retained privately. The public site presents authored synopses rather than downloadable files.</p>
    </footer>
  );
}

const ambientStars = [
  [38, 82, 1.5, .42], [112, 132, 1.1, .30], [212, 54, 1.7, .48], [318, 94, 1.0, .26],
  [398, 42, 1.3, .34], [574, 42, 1.2, .32], [678, 67, 1.8, .46], [844, 82, 1.1, .28],
  [814, 164, 1.5, .40], [717, 198, 1.0, .24], [636, 154, 1.2, .31], [545, 142, 1.0, .25],
  [382, 164, 1.4, .35], [91, 211, 1.1, .28], [154, 263, 1.6, .42], [53, 304, 1.0, .26],
  [132, 366, 1.2, .31], [246, 414, 1.0, .25], [353, 432, 1.5, .39], [505, 397, 1.1, .28],
  [650, 356, 1.7, .44], [827, 335, 1.2, .32], [795, 414, 1.0, .25], [858, 508, 1.6, .40],
  [681, 527, 1.1, .29], [608, 586, 1.4, .36], [365, 584, 1.0, .26], [258, 548, 1.3, .34],
  [118, 528, 1.8, .45], [43, 486, 1.1, .28], [188, 474, 1.0, .24], [720, 603, 1.0, .24],
  [888, 256, 1.3, .34], [17, 183, 1.2, .31], [460, 105, 1.0, .26], [753, 321, 1.1, .28],
];

export function ConstellationGraphic({ compact = false, ambient = false }) {
  return (
    <svg className={compact ? 'constellation constellation--compact' : 'constellation'} viewBox="0 0 900 620" aria-hidden="true">
      {ambient ? (
        <g fill="var(--cream)">
          {ambientStars.map(([cx, cy, r, opacity]) => (
            <circle key={`ambient-${cx}-${cy}`} cx={cx} cy={cy} r={r} opacity={opacity} />
          ))}
          <circle cx="78" cy="111" r="2.2" fill="currentColor" opacity=".52" />
          <circle cx="603" cy="112" r="2" fill="currentColor" opacity=".48" />
          <circle cx="833" cy="559" r="2.3" fill="currentColor" opacity=".50" />
          <circle cx="290" cy="493" r="1.9" fill="currentColor" opacity=".44" />
        </g>
      ) : null}

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
