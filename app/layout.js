export const metadata = {
  title: 'Leah Buzek — for the love of our neighbors',
  description:
    "Leah Buzek's growing body of work in public service, civic infrastructure, research, writing, and practical tools.",
  openGraph: {
    title: 'Leah Buzek — for the love of our neighbors',
    description:
      'A living body of work in systems design, civic infrastructure, research, writing, and public problem-solving.',
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
