// Animate home section text on scroll or load
function revealHomeText() {
  const homeSection = document.querySelector('.home-info');
  if (!homeSection) return;
  const h2 = homeSection.querySelector('h2');
  const p = homeSection.querySelector('p');
  const trigger = window.innerHeight * 0.92;
  const rect = homeSection.getBoundingClientRect();
  if (rect.top < trigger) {
    h2.classList.add('visible');
    setTimeout(() => p.classList.add('visible'), 180);
  } else {
    h2.classList.remove('visible');
    p.classList.remove('visible');
  }
}
window.addEventListener('scroll', revealHomeText);
window.addEventListener('resize', revealHomeText);
document.addEventListener('DOMContentLoaded', revealHomeText);
