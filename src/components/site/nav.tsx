"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Folios" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Get in Touch" },
];

export function Nav({ name }: { name: string }) {
  const pathname = usePathname();

  return (
    <header className="no-print sticky top-0 z-50 border-b border-ink-ghost/60 bg-paper/85 backdrop-blur-[3px]">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-6 px-5 sm:px-8"
      >
        <Link
          href="/"
          className="group flex items-baseline gap-2 no-underline"
          aria-label={`${name} — home`}
        >
          <span className="font-hand text-xl font-semibold tracking-tight text-ink">{name}</span>
          <span
            className="folio hidden text-sanguine transition-opacity duration-300 group-hover:opacity-100 sm:inline opacity-0"
            aria-hidden="true"
          >
            <span className="mirror inline-block">codex</span>
          </span>
        </Link>

        <ul className="flex items-center gap-1 sm:gap-2">
          {links.map((l) => {
            const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "folio relative px-2 py-2 no-underline transition-colors duration-200 sm:px-3",
                    active ? "text-ink" : "text-ink-faint hover:text-ink"
                  )}
                >
                  {l.label}
                  {active && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-2 -bottom-px h-[2px] bg-sanguine sm:inset-x-3"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
