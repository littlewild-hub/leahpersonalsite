"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/work?discipline=writing", label: "Writing" },
  { href: "/work?discipline=research", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export function Nav({ name }: { name: string }) {
  const pathname = usePathname();

  return (
    <header className="no-print absolute inset-x-0 top-0 z-50 px-4 pt-4 sm:px-8 sm:pt-7">
      <nav
        aria-label="Primary"
        className="nav-glass mx-auto flex min-h-16 max-w-[94rem] items-center justify-between gap-5 rounded-2xl px-5 py-3 sm:px-8"
      >
        <Link href="/" className="no-underline" aria-label={`${name} — home`}>
          <span className="font-note text-[0.95rem] font-medium uppercase tracking-[0.22em] text-ink sm:text-[1.08rem]">
            {name}
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((link) => {
              const active = pathname.startsWith(link.href.split("?")[0]) && link.href !== "/contact";
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "folio rounded-md px-3 py-2 no-underline transition-colors",
                      active ? "text-sanguine-ink" : "text-ink hover:text-sanguine-ink"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            href="/contact"
            className="folio rounded-sm border border-ink bg-ink px-4 py-3 text-paper no-underline transition-colors hover:bg-transparent hover:text-ink sm:px-5"
          >
            Let&apos;s connect
          </Link>
        </div>
      </nav>
    </header>
  );
}
