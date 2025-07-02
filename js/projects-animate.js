// Project card scroll-in animation
function revealProjectCardsOnScroll() {
  const cards = document.querySelectorAll('.project-card');
  const trigger = window.innerHeight * 0.92;
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < trigger) {
      card.classList.add('visible');
    } else {
      card.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', revealProjectCardsOnScroll);
window.addEventListener('resize', revealProjectCardsOnScroll);
document.addEventListener('DOMContentLoaded', revealProjectCardsOnScroll);
