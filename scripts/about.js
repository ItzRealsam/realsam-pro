//PAGE TITLE
/*
const modal = document.getElementById('resumeModal');
const openBtn = document.querySelector('.open-resume');
const closeBtn = modal.querySelector('.close-modal');

openBtn.addEventListener('click', () => {
  modal.classList.add('show');
  modal.setAttribute('aria-hidden', 'false');
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', 'true');
});

// Optional: Close modal when clicking outside iframe
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
  }
}); */

const modal = document.getElementById('resumeModal');
const modalContent = document.getElementById('resumeContent');
const openBtn = document.querySelector('.open-resume');
const closeBtn = modal.querySelector('.close-modal');

// Animate In
const openModal = () => {
  modal.classList.add('show');
  modal.setAttribute('aria-hidden', 'false');
  gsap.fromTo(modalContent, 
    { y: 100, opacity: 0, scale: 0.95 },
    { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" }
  );
};

// Animate Out
const closeModal = () => {
  gsap.to(modalContent, {
    y: 100,
    opacity: 0,
    scale: 0.95,
    duration: 0.4,
    ease: "power3.in",
    onComplete: () => {
      modal.classList.remove('show');
      modal.setAttribute('aria-hidden', 'true');
    }
  });
};

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

// Close modal on outside click
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('show')) {
    closeModal();
  }
});


// EXP SECTION

// Animate each FAQ card into view
gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray('.exp-card').forEach(card => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 90%",
    },
    opacity: 0,
    y: 40,
    duration: 0.5,
    ease: "power2.out",
    stagger: 0.1
  });
});
