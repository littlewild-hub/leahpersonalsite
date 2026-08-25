import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { socialImage, twitterImage } from '../lib/site-metadata';
import './globals.css';
import './hero-overrides.css';
import './practice-icons.css';
import './hero-sizing.css';
import './about.css';
import './about-refinements.css';

const siteUrl = 'https://leahbuzek.com';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Leah Buzek — for the love of our neighbors',
    template: '%s',
  },
  description:
    "Leah Buzek's growing body of work in relational ethics, caregiver trauma, civic infrastructure, policy design, and public writing.",
  authors: [{ name: 'Leah Buzek', url: siteUrl }],
  creator: 'Leah Buzek',
  publisher: 'Leah Buzek',
  keywords: [
    'Leah Buzek',
    'relational ethics',
    'caregiver trauma',
    'TRACEs',
    'Experts by Experience',
    'EPIC framework',
    'civic infrastructure',
    'systems design',
    'public service',
    'public service speaker',
    'advocacy keynote speaker',
    'caregiver trauma speaker',
    'policy design',
  ],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'Leah Buzek — for the love of our neighbors',
    description:
      'A living body of work in public systems, care, civic infrastructure, research, and practical problem-solving.',
    type: 'website',
    url: siteUrl,
    siteName: 'Leah Buzek — Public Portfolio',
    images: [socialImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leah Buzek — for the love of our neighbors',
    description:
      'A living body of work in public systems, care, civic infrastructure, research, and practical problem-solving.',
    images: [twitterImage],
  },
};

export const viewport = {
  themeColor: '#061629',
  width: 'device-width',
  initialScale: 1,
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'Leah Buzek',
      url: siteUrl,
      jobTitle: 'Program strategist and systems designer',
      description:
        'Program strategist, systems designer, researcher, and public-service practitioner working across public systems, relational ethics, caregiver trauma, civic infrastructure, participatory design, policy, and institutional design.',
      knowsAbout: [
        'Relational ethics',
        'Caregiver trauma',
        'Child-to-parent violence',
        'Experts by Experience',
        'Participatory design',
        'Civic infrastructure',
        'Systems design',
        'Public service',
        'Policy design',
      ],
      sameAs: [
        'https://medium.com/@progresswithpurpose',
        'https://substack.com/@coordinatesmayvary',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Leah Buzek — Public Portfolio',
      description:
        'A connected public body of work in relational ethics, caregiver trauma, civic infrastructure, policy design, and public writing.',
      author: { '@id': `${siteUrl}/#person` },
      publisher: { '@id': `${siteUrl}/#person` },
      inLanguage: 'en-US',
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
