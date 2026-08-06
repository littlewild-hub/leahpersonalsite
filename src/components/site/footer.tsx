import Link from "next/link";
import type { Profile } from "@/lib/content";

export function Footer({ profile }: { profile: Profile }) {
  const year = new Date().getFullYear();

  return (
    <footer className="no-print border-t border-paper/15 bg-ink text-paper">
      <div className="mx-auto max-w-[94rem] px-6 py-16 sm:px-10 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-2xl">
            <p className="folio text-[#e88c60]">For the love of our neighbors</p>
            <h2 className="mt-4 font-hand text-[clamp(2.8rem,5vw,5rem)] leading-[0.92] text-paper">
              Good systems should feel like care made visible.
            </h2>
            <p className="mt-5 max-w-xl text-[0.98rem] leading-7 text-paper/70">{profile.title}</p>
          </div>

          <div className="lg:text-right">
            {profile.email && (
              <a
                href={`mailto:${profile.email}`}
                className="font-note text-sm text-paper underline decoration-[#e88c60] underline-offset-4"
              >
                {profile.email}
              </a>
            )}
            {profile.socials.length > 0 && (
              <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 lg:justify-end">
                {profile.socials.map((social) => (
                  <li key={social.href}>
                    <Link
                      href={social.href}
                      className="folio text-paper/65 transition-colors hover:text-[#e88c60]"
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {social.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-paper/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="folio text-paper/45">© {year} {profile.name}</p>
          <p className="folio text-paper/45">Rooted in Ohio. Built for impact.</p>
        </div>
      </div>
    </footer>
  );
}
