import type { Metadata } from "next";
import "./globals.css";
import { content } from "@/lib/content";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";

const FONT_HREF =
  "https://fonts.googleapis.com/css2" +
  "?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500" +
  "&family=Inter:wght@400;500;600;700" +
  "&display=swap";

export async function generateMetadata(): Promise<Metadata> {
  const profile = await content.getProfile();
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
    title: { default: `${profile.name} — ${profile.title}`, template: `%s — ${profile.name}` },
    description: profile.statement.slice(0, 180),
    openGraph: {
      title: `${profile.name} — ${profile.title}`,
      description: profile.statement.slice(0, 180),
      type: "website",
    },
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const profile = await content.getProfile();

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={FONT_HREF} />
      </head>
      <body>
        <a
          href="#main"
          className="folio sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-paper focus:px-4 focus:py-2"
        >
          Skip to contents
        </a>
        <Nav name={profile.name} />
        <main id="main">{children}</main>
        <Footer profile={profile} />
      </body>
    </html>
  );
}
