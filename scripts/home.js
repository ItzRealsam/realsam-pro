// home.js (Optimized)

// === Duplicate Logo Slide (for client carousel loop) ===
const copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".clients").appendChild(copy);

// === Project Carousel (Horizontal Scroll) ===
const carousel = document.querySelector(".project-carousel");
const nextBtn = document.getElementById("nextProject");
const prevBtn = document.getElementById("prevProject");

nextBtn?.addEventListener("click", () => {
  carousel.scrollBy({ left: 300, behavior: "smooth" });
});

prevBtn?.addEventListener("click", () => {
  carousel.scrollBy({ left: -300, behavior: "smooth" });
});

// === Scroll-triggered Animations ===
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  /*
  // === Animate Section Titles (h3 & h2 with SplitType) ===
  const revealTextElems = document.querySelectorAll(".reveal-type-time, .reveal-type-scroll");

  revealTextElems.forEach((el) => {
    const split = new SplitType(el, { types: "words" });

    gsap.fromTo(
      split.words,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.02,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }); */

  // === About Section Stats Animation ===
  gsap.utils.toArray(".stat").forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "top 60%",
          scrub: true,
        },
      }
    );
  });

  // === Services Card Animation ===
  gsap.utils.toArray(".service-card").forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "top 60%",
          scrub: true,
        },
      }
    );
  });

  // === Testimonials Animation ===
  /*gsap.utils.toArray(".testimonial-card").forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "top 60%",
          scrub: true,
        },
      }
    );
  }); */

  gsap.utils.toArray(".testimonial-card").forEach(card => {
    gsap.fromTo(card, 
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
        duration: 0.6,
        ease: "power2.out"
      }
    );
  });
});
