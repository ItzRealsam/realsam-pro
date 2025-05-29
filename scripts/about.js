

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

// // FAQ Accordion — only one open at a time
// document.querySelectorAll(".faq-card").forEach((card) => {
//   const question = card.querySelector(".faq-question");

//   question.addEventListener("click", () => {
//     // Close all other open cards
//     document.querySelectorAll(".faq-card").forEach((otherCard) => {
//       if (otherCard !== card) {
//         otherCard.classList.remove("faq-card-open");
//       }
//     });

//     // Toggle current card
//     card.classList.toggle("faq-card-open");
//   });
// });
