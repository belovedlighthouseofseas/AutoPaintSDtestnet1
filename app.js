// ===== TOPBAR DISMISS =====
document.getElementById('topbarClose').addEventListener('click', () => {
  document.getElementById('topbar').style.display = 'none';
});

// ===== MOBILE NAV =====
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');
navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// ===== STICKY BAR =====
const stickyBar  = document.getElementById('stickyBar');
const stickyClose = document.getElementById('stickyClose');
let stickyDismissed = false;

window.addEventListener('scroll', () => {
  if (stickyDismissed) return;
  const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
  stickyBar.classList.toggle('visible', pct > 0.35);
});
stickyClose.addEventListener('click', () => {
  stickyDismissed = true;
  stickyBar.classList.remove('visible');
});

// ===== FAQ ACCORDION =====
document.querySelectorAll('.faq-item__q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// ===== QUOTE FORM =====
const form        = document.getElementById('quoteForm');
const formSuccess = document.getElementById('formSuccess');

form.addEventListener('submit', e => {
  e.preventDefault();
  let valid = true;
  form.querySelectorAll('[required]').forEach(field => {
    field.style.borderColor = '';
    if (!field.value.trim()) { field.style.borderColor = '#D92626'; valid = false; }
  });
  if (!valid) return;

  const btn = form.querySelector('button[type="submit"]');
  btn.textContent = 'Sending…';
  btn.disabled = true;

  // Replace this timeout with a real fetch to your form endpoint (e.g. Formspree)
  setTimeout(() => {
    formSuccess.hidden = false;
    form.reset();
    btn.textContent = 'Send My Quote Request';
    btn.disabled = false;
    formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 1200);
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
  });
});

// ===== SCROLL REVEAL =====
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.service-card, .step, .review-card, .job-card, .pricing-card, .faq-item, .zone').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity .45s ease, transform .45s ease';
  observer.observe(el);
});
