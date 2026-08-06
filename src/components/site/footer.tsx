import Link from "next/link";
import type { Profile } from "@/lib/content";
import { Divider, VitruvianMark } from "@/components/notebook/ornaments";

export function Footer({ profile }: { profile: Profile }) {
  const year = new Date().getFullYear();

  return (
    <footer className="no-print mx-auto mt-28 max-w-6xl px-5 pb-16 sm:px-8">
      <Divider className="mb-10" />

      <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-sm">
          <p className="font-hand text-2xl leading-tight text-ink">{profile.name}</p>
          <p className="mt-1 text-[0.95rem] italic text-ink-soft">{profile.title}</p>
          {profile.email && (
            <a href={`mailto:${profile.email}`} className="link-ink mt-3 inline-block font-note text-sm">
              {profile.email}
            </a>
          )}
        </div>

        <div className="flex items-start gap-10">
          {profile.socials.length > 0 && (
            <ul className="space-y-1.5">
              {profile.socials.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="folio text-ink-faint transition-colors hover:text-ink"
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <div className="hidden h-24 w-24 text-verdigris sm:block" aria-hidden="true">
            <VitruvianMark />
          </div>
        </div>
      </div>

      <p className="folio mt-10 text-ink-faint/70">
        {year} — compiled and recompiled, continuously
      </p>
    </footer>
  );
}
