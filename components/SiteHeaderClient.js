'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { CloseIcon, MenuIcon } from './Icons';

const links = [
  { href: '/about', label: 'About' },
  { href: '/work', label: 'Body of work' },
  { href: '/speaking', label: 'Speaking' },
  { href: '/writing', label: 'Writing' },
];

function isCurrent(pathname, href) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeaderClient({ tone = 'night' }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 820px)');
    const sync = () => setIsMobile(media.matches);
    sync();
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <header className={`site-header site-header--${tone}${open ? ' is-open' : ''}`}>
      <Link className="wordmark" href="/" aria-label="Leah Buzek, home">
        Leah Buzek
      </Link>

      <button
        className="site-nav-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="site-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">{open ? 'Close navigation' : 'Open navigation'}</span>
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>

      <nav
        id="site-navigation"
        className="site-nav"
        aria-label="Primary navigation"
        hidden={isMobile && !open}
      >
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            aria-current={isCurrent(pathname, link.href) ? 'page' : undefined}
          >
            {link.label}
          </Link>
        ))}
        <a className="site-nav-contact" href="mailto:LeahGBuzek@gmail.com">Contact</a>
      </nav>
    </header>
  );
}
