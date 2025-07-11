// Simple script for smooth scrolling and header hide/show on scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Header hide on scroll down, show on scroll up
let lastScrollY = window.scrollY;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    lastScrollY = window.scrollY;
});

// Manual Projects Slideshow with sliding transition
const slides = document.querySelectorAll('.projects-slideshow .slide');
const slideTrack = document.querySelector('.projects-slideshow .slide-track');
const prevBtn = document.querySelector('.projects-slideshow .slide-btn.prev');
const nextBtn = document.querySelector('.projects-slideshow .slide-btn.next');
let currentSlide = 0;

function updateSlidePosition() {
  if (slideTrack) {
    slideTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
  }
}

function showSlide(idx) {
  if (slides.length === 0) return;
  currentSlide = (idx + slides.length) % slides.length;
  updateSlidePosition();
}

if (prevBtn && nextBtn && slideTrack && slides.length > 0) {
  prevBtn.addEventListener('click', () => {
    showSlide(currentSlide - 1);
  });

  nextBtn.addEventListener('click', () => {
    showSlide(currentSlide + 1);
  });

  // Optional: swipe support for mobile
  let startX = null;
  slideTrack.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
  });
  slideTrack.addEventListener('touchend', e => {
    if (startX === null) return;
    let endX = e.changedTouches[0].clientX;
    if (endX - startX > 50) prevBtn.click();
    else if (startX - endX > 50) nextBtn.click();
    startX = null;
  });

  // Initialize position
  updateSlidePosition();
}

document.addEventListener('DOMContentLoaded', function () {
  // Practicum slideshow
  let practicumSlideIndex = 0;
  const practicumSlides = document.querySelectorAll('.practicum-slide');
  const practicumPrevBtn = document.querySelector('.practicum-slide-btn.prev');
  const practicumNextBtn = document.querySelector('.practicum-slide-btn.next');
  let practicumInterval = null;

  function showPracticumSlide(idx) {
    practicumSlides.forEach((slide, i) => {
      slide.classList.toggle('active', i === idx);
    });
  }

  function nextPracticumSlide() {
    practicumSlideIndex = (practicumSlideIndex + 1) % practicumSlides.length;
    showPracticumSlide(practicumSlideIndex);
  }

  function prevPracticumSlide() {
    practicumSlideIndex = (practicumSlideIndex - 1 + practicumSlides.length) % practicumSlides.length;
    showPracticumSlide(practicumSlideIndex);
  }

  function startPracticumAutoSlide() {
    practicumInterval = setInterval(nextPracticumSlide, 5000);
  }

  function stopPracticumAutoSlide() {
    if (practicumInterval) clearInterval(practicumInterval);
  }

  if (practicumPrevBtn && practicumNextBtn && practicumSlides.length > 0) {
    practicumPrevBtn.addEventListener('click', function() {
      prevPracticumSlide();
      stopPracticumAutoSlide();
      startPracticumAutoSlide();
    });
    practicumNextBtn.addEventListener('click', function() {
      nextPracticumSlide();
      stopPracticumAutoSlide();
      startPracticumAutoSlide();
    });
    showPracticumSlide(practicumSlideIndex);
    startPracticumAutoSlide();
  }
});
