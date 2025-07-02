// Animate tech stack icons in About section
function animateTechStackIcons() {
  const icons = document.querySelectorAll('.tech-icons img');
  if (!icons.length) return;
  const trigger = window.innerHeight * 0.92;
  const about = document.querySelector('.about-section');
  if (!about) return;
  const rect = about.getBoundingClientRect();
  if (rect.top < trigger) {
    icons.forEach((icon, i) => {
      setTimeout(() => icon.classList.add('visible'), 120 * i);
    });
  } else {
    icons.forEach(icon => icon.classList.remove('visible'));
  }
}
window.addEventListener('scroll', animateTechStackIcons);
window.addEventListener('resize', animateTechStackIcons);
document.addEventListener('DOMContentLoaded', animateTechStackIcons);

// About section slide-in on scroll
function handleAboutScroll() {
  const about = document.querySelector('.about-container');
  if (!about) return;
  const rect = about.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  if (rect.top < windowHeight - 80) {
    about.classList.add('visible');
  } else {
    about.classList.remove('visible');
  }
}
window.addEventListener('scroll', handleAboutScroll);
window.addEventListener('DOMContentLoaded', handleAboutScroll);
