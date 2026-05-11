// 1. Dynamic Greeting
const greetingText = document.getElementById('greeting');
const hour = new Date().getHours();
if (hour < 12) greetingText.innerText = "Good Morning!";
else if (hour < 18) greetingText.innerText = "Good Afternoon!";
else greetingText.innerText = "Good Evening!";

// 2. Footer Year
document.getElementById('year').textContent = new Date().getFullYear();

// 3. Cursor Glow
const glow = document.getElementById('cursorGlow');
document.addEventListener('mousemove', e => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

// 4. Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// 5. Mobile Nav
const burger = document.getElementById('burger');
const nav = document.getElementById('navLinks');
burger.addEventListener('click', () => {
  nav.classList.toggle('open');
  burger.classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    burger.classList.remove('open');
  });
});

// 6. Scroll Reveal for Project Cards
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('reveal-visible');
  });
}, { threshold: 0.2 });
document.querySelectorAll('.project-card').forEach(card => observer.observe(card));

// 7. Profile Slide Panel
const profileToggle = document.getElementById('profileToggle');
const profilePanel  = document.getElementById('profilePanel');
const panelOverlay  = document.getElementById('panelOverlay');

function openPanel() {
  profilePanel.classList.add('open');
  panelOverlay.classList.add('show');
  profileToggle.classList.add('panel-open');
  profileToggle.setAttribute('aria-expanded', 'true');
  profileToggle.style.right = 'var(--panel-w)';
}

function closePanel() {
  profilePanel.classList.remove('open');
  panelOverlay.classList.remove('show');
  profileToggle.classList.remove('panel-open');
  profileToggle.setAttribute('aria-expanded', 'false');
  profileToggle.style.right = '0';
}

profileToggle.addEventListener('click', () => {
  profilePanel.classList.contains('open') ? closePanel() : openPanel();
});

panelOverlay.addEventListener('click', closePanel);

// Close panel on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && profilePanel.classList.contains('open')) closePanel();
});