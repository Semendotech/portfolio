const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

navToggle?.addEventListener('click', () => {
  const isOpen = siteNav?.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');
    if (!targetId || targetId === '#') return;
    const target = document.querySelector(targetId);
    if (!target) return;

    event.preventDefault();
    siteNav?.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
