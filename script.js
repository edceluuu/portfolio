// 1. Dynamic Greeting
const greetingText = document.getElementById('greeting');
const hour = new Date().getHours();
if (hour < 12) greetingText.innerText = "Good Morning!";
else if (hour < 18) greetingText.innerText = "Good Afternoon!";
else greetingText.innerText = "Good Evening!";
// 2. Mobile Nav Logic
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
burger.addEventListener('click', () => {
nav.classList.toggle('nav-active');
// Burger Animation
burger.classList.toggle('toggle');
});
// 3. Reveal on Scroll Animation
const observerOptions = {
threshold: 0.2
};
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('reveal-visible');
}
});
}, observerOptions);
document.querySelectorAll('.project-card').forEach(card => {
observer.observe(card);
});
// 4. Smooth Close Nav on Link Click
document.querySelectorAll('.nav-links a').forEach(link => {
link.addEventListener('click', () => {
if (nav.classList.contains('nav-active')) {
nav.classList.remove('nav-active');
}
});
});