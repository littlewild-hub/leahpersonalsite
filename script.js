const year = document.querySelector('[data-year]');
const header = document.querySelector('[data-header]');
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
const internalLinks = document.querySelectorAll('a[href^="#"]');

if (year) {
  year.textContent = new Date().getFullYear();
}

const closeNavigation = () => {
  if (!navToggle || !nav) return;

  navToggle.setAttribute('aria-expanded', 'false');
  nav.classList.remove('is-open');
  document.body.style.overflow = '';
};

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const willOpen = navToggle.getAttribute('aria-expanded') !== 'true';

    navToggle.setAttribute('aria-expanded', String(willOpen));
    nav.classList.toggle('is-open', willOpen);
    document.body.style.overflow = willOpen ? 'hidden' : '';
  });
}

internalLinks.forEach((link) => {
  link.addEventListener('click', () => {
    closeNavigation();

    const targetId = link.getAttribute('href');
    const target = targetId && targetId !== '#' ? document.querySelector(targetId) : null;

    if (target) {
      target.setAttribute('tabindex', '-1');
      window.setTimeout(() => target.focus({ preventScroll: true }), 500);
    }
  });
});

const updateHeader = () => {
  if (!header) return;
  header.classList.toggle('is-scrolled', window.scrollY > 80);
};

updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });
window.addEventListener('resize', () => {
  if (window.innerWidth > 780) closeNavigation();
});
