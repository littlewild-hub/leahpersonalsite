import { ImageResponse } from 'next/og';

export const alt = 'Leah Buzek — for the love of our neighbors';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

const stars = [
  [54, 73, 2], [133, 146, 1], [205, 52, 2], [278, 105, 1], [348, 44, 1],
  [420, 153, 2], [512, 82, 1], [598, 39, 2], [681, 132, 1], [756, 61, 1],
  [844, 112, 2], [934, 48, 1], [1027, 94, 2], [1135, 38, 1], [1170, 164, 1],
  [84, 267, 1], [180, 334, 2], [309, 276, 1], [455, 352, 1], [552, 242, 2],
  [699, 321, 1], [805, 253, 2], [910, 352, 1], [1081, 277, 1], [1150, 389, 2],
  [42, 501, 2], [152, 552, 1], [273, 476, 1], [389, 571, 2], [522, 505, 1],
  [649, 578, 1], [780, 493, 2], [874, 574, 1], [1006, 512, 2], [1131, 584, 1],
];

function Constellation() {
  return (
    <svg
      width="620"
      height="500"
      viewBox="0 0 900 620"
      style={{ position: 'absolute', right: '-36px', top: '72px', transform: 'rotate(-4deg)' }}
    >
      <g fill="none" stroke="#ef9a6d" strokeWidth="2" opacity="0.62">
        <path d="M86 425 L212 316 L326 362 L449 225 L584 276 L765 116" />
        <path d="M212 316 L270 141 L449 225 L496 75 L765 116" />
        <path d="M326 362 L438 521 L584 276 L748 455" />
        <path d="M270 141 L168 89" />
        <path d="M438 521 L534 570" />
      </g>
      <g fill="#ef9a6d">
        <circle cx="86" cy="425" r="6" />
        <circle cx="212" cy="316" r="9" />
        <circle cx="326" cy="362" r="6" />
        <circle cx="449" cy="225" r="11" />
        <circle cx="584" cy="276" r="8" />
        <circle cx="765" cy="116" r="9" />
        <circle cx="270" cy="141" r="6" />
        <circle cx="496" cy="75" r="8" />
        <circle cx="438" cy="521" r="6" />
        <circle cx="748" cy="455" r="6" />
        <circle cx="168" cy="89" r="4" />
        <circle cx="534" cy="570" r="4" />
      </g>
      <g fill="#f7e6d3">
        <circle cx="449" cy="225" r="3.5" />
        <circle cx="212" cy="316" r="2.5" />
        <circle cx="765" cy="116" r="2.5" />
      </g>
    </svg>
  );
}

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          position: 'relative',
          display: 'flex',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          color: '#f7e6d3',
          background:
            'radial-gradient(circle at 78% 38%, rgba(239,154,109,.18), transparent 31%), radial-gradient(circle at 63% 69%, rgba(74,116,158,.2), transparent 38%), linear-gradient(140deg, #020a15, #061629)',
          fontFamily: 'Georgia, Times New Roman, serif',
        }}
      >
        {stars.map(([left, top, radius], index) => (
          <span
            key={index}
            style={{
              position: 'absolute',
              left,
              top,
              width: radius * 2,
              height: radius * 2,
              borderRadius: '50%',
              background: index % 4 === 0 ? '#ef9a6d' : '#f7e6d3',
              opacity: index % 3 === 0 ? 0.72 : 0.42,
            }}
          />
        ))}

        <div
          style={{
            position: 'absolute',
            inset: '30px',
            display: 'flex',
            border: '1px solid rgba(239,154,109,.34)',
          }}
        />

        <Constellation />

        <div
          style={{
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            width: '720px',
            padding: '72px 0 66px 76px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              color: '#ef9a6d',
              fontFamily: 'Arial, Helvetica, sans-serif',
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: 7,
              textTransform: 'uppercase',
            }}
          >
            Leah Buzek
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: 69,
              fontSize: 74,
              fontWeight: 400,
              lineHeight: 0.94,
              letterSpacing: -3.5,
            }}
          >
            <div style={{ display: 'flex' }}>
              <span>for the</span>
              <span style={{ marginLeft: 18, color: '#ef9a6d', fontStyle: 'italic' }}>love</span>
            </div>
            <div style={{ display: 'flex' }}>
              <span>of our</span>
              <span style={{ marginLeft: 18, color: '#ef9a6d', fontStyle: 'italic' }}>neighbors.</span>
            </div>
          </div>

          <div style={{ display: 'flex', width: 88, height: 2, marginTop: 41, background: '#ef9a6d' }} />

          <div
            style={{
              display: 'flex',
              marginTop: 26,
              color: 'rgba(247,230,211,.76)',
              fontFamily: 'Arial, Helvetica, sans-serif',
              fontSize: 17,
              fontWeight: 700,
              letterSpacing: 3.1,
              textTransform: 'uppercase',
            }}
          >
            Public systems · relational ethics · civic infrastructure
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            right: 68,
            bottom: 55,
            display: 'flex',
            color: 'rgba(247,230,211,.68)',
            fontFamily: 'Arial, Helvetica, sans-serif',
            fontSize: 18,
            letterSpacing: 1.4,
          }}
        >
          leahbuzek.com
        </div>
      </div>
    ),
    size,
  );
}
