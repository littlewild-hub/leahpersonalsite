const nodes = [
  [110, 410, 5], [205, 330, 7], [292, 378, 5], [382, 250, 9], [492, 302, 6],
  [640, 146, 7], [250, 182, 5], [425, 118, 6], [374, 505, 5], [628, 466, 5],
  [165, 126, 3], [452, 555, 3], [760, 250, 5], [850, 330, 7], [958, 268, 5],
  [1034, 410, 8], [900, 480, 5], [742, 520, 4], [1085, 205, 3], [1130, 495, 3],
];

function Star({ x, y, size = 16 }) {
  return (
    <g transform={`translate(${x} ${y})`} className="ev-star">
      <path d={`M0 ${-size} L2 ${-2} L${size} 0 L2 2 L0 ${size} L-2 2 L-${size} 0 L-2 -2 Z`} />
    </g>
  );
}

export function MidnightNetworkVisual({ compact = false, className = '' }) {
  return (
    <svg
      className={`editorial-visual editorial-network ${compact ? 'editorial-network--compact' : ''} ${className}`.trim()}
      viewBox="0 0 1200 680"
      aria-hidden="true"
      focusable="false"
    >
      <g className="ev-topography">
        <path d="M0 78 C120 12 205 150 318 76 S520 14 648 76 S850 144 1024 66 S1160 12 1200 30" />
        <path d="M0 110 C130 44 222 180 342 108 S540 50 665 106 S865 170 1032 98 S1168 38 1200 56" />
        <path d="M0 610 C138 528 250 650 365 574 S592 520 720 578 S945 654 1200 565" />
        <path d="M0 638 C142 554 272 674 390 600 S600 548 742 604 S976 676 1200 598" />
      </g>
      <g className="ev-orbits">
        <circle cx="720" cy="344" r="255" />
        <circle cx="720" cy="344" r="190" />
        <circle cx="720" cy="344" r="122" />
        <path d="M118 515 C330 340 498 416 650 306 S952 146 1125 264" />
        <path d="M75 250 C318 118 480 270 684 210 S952 110 1145 188" />
        <path d="M130 590 C346 455 550 555 754 478 S980 382 1130 438" />
      </g>
      <g className="ev-lines">
        <path d="M110 410 L205 330 L292 378 L382 250 L492 302 L640 146" />
        <path d="M205 330 L250 182 L382 250 L425 118 L640 146" />
        <path d="M292 378 L374 505 L492 302 L628 466" />
        <path d="M492 302 L760 250 L850 330 L958 268 L1034 410" />
        <path d="M760 250 L742 520 L900 480 L1034 410 L1130 495" />
        <path d="M850 330 L900 480 L628 466 L742 520" />
        <path d="M382 250 L720 344 L1034 410" />
      </g>
      <g className="ev-lines ev-lines--secondary">
        <path d="M165 126 Q410 32 640 146" />
        <path d="M250 182 Q570 580 900 480" />
        <path d="M374 505 Q650 594 900 480" />
        <path d="M425 118 Q760 34 1085 205" />
        <path d="M452 555 Q760 590 1130 495" />
      </g>
      <g className="ev-nodes">
        {nodes.map(([cx, cy, r]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} />)}
        <circle className="ev-node-core" cx="720" cy="344" r="13" />
        <circle className="ev-node-ring" cx="720" cy="344" r="29" />
      </g>
      <Star x={720} y={344} size={24} />
      <Star x={105} y={92} size={13} />
      <Star x={1088} y={590} size={11} />
      <Star x={980} y={82} size={8} />
      <Star x={520} y={592} size={7} />
    </svg>
  );
}

export function MoonPhaseBand() {
  const phases = [
    { x: 205, kind: 'crescent-left' },
    { x: 335, kind: 'half-left' },
    { x: 465, kind: 'gibbous-left' },
    { x: 600, kind: 'full' },
    { x: 735, kind: 'gibbous-right' },
    { x: 865, kind: 'half-right' },
    { x: 995, kind: 'crescent-right' },
  ];

  return (
    <div className="editorial-divider" aria-hidden="true">
      <svg viewBox="0 0 1200 190" focusable="false">
        <path className="ev-divider-line" d="M65 95 H1135" />
        <g className="ev-divider-orbits">
          <ellipse cx="600" cy="95" rx="470" ry="54" />
          <ellipse cx="600" cy="95" rx="355" ry="38" />
        </g>
        <Star x={65} y={95} size={15} />
        <Star x={1135} y={95} size={15} />
        <Star x={600} y={95} size={20} />
        {phases.map(({ x, kind }) => (
          <g className={`ev-moon ev-moon--${kind}`} key={kind} transform={`translate(${x} 95)`}>
            <circle r="22" />
            {kind !== 'full' ? <ellipse className="ev-moon-mask" cx={kind.includes('right') ? -10 : 10} cy="0" rx="19" ry="22" /> : null}
          </g>
        ))}
      </svg>
    </div>
  );
}

const atlasClusters = [
  { x: 250, y: 205, r: 92, label: 'Relational ethics' },
  { x: 930, y: 190, r: 92, label: 'Caregiver trauma & family systems' },
  { x: 220, y: 500, r: 80, label: 'Civic infrastructure' },
  { x: 600, y: 495, r: 112, label: 'Policy & program design' },
  { x: 980, y: 500, r: 80, label: 'Essays & public writing' },
];

export function AtlasMapVisual({ theme = 'linen', compact = false }) {
  return (
    <div className={`editorial-atlas editorial-atlas--${theme} ${compact ? 'editorial-atlas--compact' : ''}`} aria-hidden="true">
      <svg viewBox="0 0 1200 700" focusable="false">
        <g className="ev-atlas-guides">
          <path d="M250 205 Q430 280 600 350 T930 190" />
          <path d="M220 500 Q410 390 600 350 T980 500" />
          <path d="M250 205 Q420 510 600 495" />
          <path d="M930 190 Q790 470 600 495" />
          <circle cx="600" cy="350" r="31" />
          <circle cx="600" cy="350" r="9" />
        </g>
        {atlasClusters.map((cluster, index) => (
          <g className="ev-atlas-cluster" key={cluster.label}>
            <circle cx={cluster.x} cy={cluster.y} r={cluster.r} />
            <circle cx={cluster.x} cy={cluster.y} r={cluster.r * .67} />
            <circle cx={cluster.x} cy={cluster.y} r={cluster.r * .38} />
            <circle className="ev-atlas-core" cx={cluster.x} cy={cluster.y} r={index === 3 ? 18 : 13} />
            {[0, 1, 2, 3, 4].map((n) => {
              const angle = ((Math.PI * 2) / 5) * n - Math.PI / 2;
              const d = cluster.r * .7;
              const nx = cluster.x + Math.cos(angle) * d;
              const ny = cluster.y + Math.sin(angle) * d;
              return (
                <g key={n}>
                  <path d={`M${cluster.x} ${cluster.y} L${nx} ${ny}`} />
                  <circle className="ev-atlas-node" cx={nx} cy={ny} r="5" />
                </g>
              );
            })}
            <text x={cluster.x} y={cluster.y + cluster.r + 34} textAnchor="middle">{cluster.label}</text>
          </g>
        ))}
        <Star x={600} y={350} size={15} />
      </svg>
    </div>
  );
}

export function CategoryEmblem({ type }) {
  const safeType = ['relational-ethics', 'caregiver-trauma', 'civic-infrastructure', 'policy-program-design', 'public-writing'].includes(type)
    ? type
    : 'relational-ethics';

  return (
    <svg className={`category-emblem category-emblem--${safeType}`} viewBox="0 0 120 120" aria-hidden="true" focusable="false">
      <circle className="ce-ring" cx="60" cy="60" r="48" />
      <circle className="ce-ring ce-ring--inner" cx="60" cy="60" r="33" />
      <path className="ce-cross" d="M60 10V110M10 60H110" />
      {safeType === 'caregiver-trauma' ? (
        <g className="ce-symbol">
          <path d="M33 72 Q45 55 58 65 Q60 47 74 54 Q88 60 84 78" />
          <path d="M36 76 Q60 88 84 76" />
        </g>
      ) : null}
      {safeType === 'civic-infrastructure' ? (
        <g className="ce-symbol">
          <path d="M24 71H96M30 71V54H90V71M38 54V42H82V54M30 82H90" />
          <path d="M36 71V82M48 71V82M60 71V82M72 71V82M84 71V82" />
        </g>
      ) : null}
      {safeType === 'public-writing' ? (
        <g className="ce-symbol">
          <path d="M38 83 Q52 60 76 36 Q72 60 45 82" />
          <path d="M42 78 L78 42" />
        </g>
      ) : null}
      {safeType === 'policy-program-design' ? (
        <g className="ce-symbol"><Star x={60} y={60} size={18} /></g>
      ) : null}
      {safeType === 'relational-ethics' ? (
        <g className="ce-symbol">
          <circle cx="60" cy="60" r="8" />
          <circle cx="60" cy="25" r="5" />
          <circle cx="95" cy="60" r="5" />
          <circle cx="60" cy="95" r="5" />
          <circle cx="25" cy="60" r="5" />
          <path d="M60 52V30M68 60H90M60 68V90M52 60H30" />
        </g>
      ) : null}
    </svg>
  );
}

export function BotanicalArchiveVisual() {
  return (
    <svg className="editorial-botanical" viewBox="0 0 900 620" aria-hidden="true" focusable="false">
      <g className="ev-paper-lines">
        <circle cx="465" cy="310" r="220" />
        <circle cx="465" cy="310" r="170" />
        <circle cx="465" cy="310" r="120" />
        <path d="M70 515 C210 465 350 545 510 480 S760 440 860 468" />
        <path d="M90 542 C250 500 370 565 540 512 S760 474 850 505" />
      </g>
      <g className="ev-botanical-stem">
        <path d="M350 590 Q420 440 505 205" />
        <path d="M385 530 Q530 405 620 245" />
        <path d="M375 485 Q290 390 250 300" />
        <path d="M505 205 Q515 162 485 125M505 205 Q555 170 572 132M505 205 Q464 174 444 142" />
        <path d="M620 245 Q665 220 685 180M620 245 Q590 205 598 164M620 245 Q650 273 702 278" />
        <path d="M250 300 Q214 258 197 215M250 300 Q270 250 300 220M250 300 Q208 326 174 330" />
        {[ [485,125], [572,132], [444,142], [685,180], [598,164], [702,278], [197,215], [300,220], [174,330] ].map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="9" />
        ))}
      </g>
      <g className="ev-archive-stars">
        <Star x={145} y={128} size={12} />
        <Star x={744} y={112} size={10} />
        <Star x={705} y={425} size={8} />
      </g>
    </svg>
  );
}

export function EditorialPlate({ variant = 'stardust', tone = 'midnight' }) {
  const content = {
    stardust: {
      main: <>We are all <em>stardust</em><br />and responsibility.</>,
      sub: 'for the love of our neighbors',
    },
    clarity: {
      main: <>See clearly.<br />Name truth.<br />Build what serves life.</>,
      sub: 'for the love of our neighbors',
    },
    neighbors: {
      main: <>For the love<br /><em>of</em><br />our neighbors.</>,
      sub: 'service · justice · compassion · dignity',
    },
  }[variant];

  return (
    <div className={`editorial-plate editorial-plate--${tone}`}>
      <div className="editorial-plate__star" aria-hidden="true">✦</div>
      <p className="editorial-plate__main">{content.main}</p>
      <div className="editorial-plate__rule" aria-hidden="true" />
      <p className="editorial-plate__sub">{content.sub}</p>
    </div>
  );
}
