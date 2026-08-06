const year = document.querySelector('[data-year]');

if (year) {
  year.textContent = new Date().getFullYear();
}

const internalLinks = document.querySelectorAll('a[href^="#"]');

internalLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const targetId = link.getAttribute('href');
    const target = targetId && document.querySelector(targetId);

    if (target) {
      target.setAttribute('tabindex', '-1');
      window.setTimeout(() => target.focus({ preventScroll: true }), 500);
    }
  });
});
