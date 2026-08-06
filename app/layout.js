import './globals.css';
import './hero-overrides.css';
import './practice-icons.css';

export const metadata = {
  metadataBase: new URL('https://leahbuzek.com'),
  title: {
    default: 'Leah Buzek — for the love of our neighbors',
    template: '%s',
  },
  description:
    "Leah Buzek's growing body of work in relational ethics, caregiver trauma, civic infrastructure, policy design, and public writing.",
  openGraph: {
    title: 'Leah Buzek — for the love of our neighbors',
    description:
      'A living body of work in public systems, care, civic infrastructure, research, and practical problem-solving.',
    type: 'website',
  },
};

export const viewport = {
  themeColor: '#061629',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
