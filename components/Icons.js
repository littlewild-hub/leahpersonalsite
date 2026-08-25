export function ArrowUpRightIcon({ className = 'inline-icon' }) {
  return (
    <svg className={className} viewBox="0 0 20 20" aria-hidden="true" focusable="false">
      <path d="M5 15 15 5M7 5h8v8" />
    </svg>
  );
}

export function ArrowRightIcon({ className = 'inline-icon' }) {
  return (
    <svg className={className} viewBox="0 0 20 20" aria-hidden="true" focusable="false">
      <path d="M3.5 10h13M11.5 5l5 5-5 5" />
    </svg>
  );
}

export function ArrowDownIcon({ className = 'inline-icon' }) {
  return (
    <svg className={className} viewBox="0 0 20 20" aria-hidden="true" focusable="false">
      <path d="M10 3.5v13M5 11.5l5 5 5-5" />
    </svg>
  );
}

export function MenuIcon({ className = 'nav-icon' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon({ className = 'nav-icon' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}
