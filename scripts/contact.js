//CONTACT SECTION

// === Scroll-triggered Animations ===
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

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
  });

  //Contact form animation
  gsap.from(".form-title", {opacity: 0, y: -20, duration: 0.8});
  gsap.from("label", {opacity: 0, x: -30, duration: 0.5, stagger: 0.2});
  gsap.from("input, textarea", {opacity: 0, x: 30, duration: 0.6, stagger: 0.2});
  gsap.from("button", {opacity: 0, scale: 0.5, duration: 0.5});

});
    
const form = document.querySelector(".contact-form");
const inputs = form.querySelectorAll("input, textarea");
const modal = document.getElementById("thankYouModal");

function validateField(input) {
  const errorSpan = input.nextElementSibling;
  errorSpan.textContent = "";
  input.classList.remove("error");

  if (!input.value.trim()) {
    showError(input, `${input.name.charAt(0).toUpperCase() + input.name.slice(1)} is required.`);
    return false;
  }

  if (input.type === "email") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(input.value)) {
      showError(input, "Please enter a valid email.");
      return false;
    }
  }

  return true;
}

function showError(input, message) {
  const errorSpan = input.nextElementSibling;
  errorSpan.textContent = message;
  input.classList.add("error");

  if (typeof gsap !== "undefined") {
    gsap.fromTo(input, { x: -5 }, { x: 5, duration: 0.2, repeat: 3, yoyo: true });
  } else {
    input.style.animation = "shake 0.3s";
    input.addEventListener("animationend", () => input.style.animation = "", { once: true });
  }
}

inputs.forEach(input => {
  input.addEventListener("input", () => validateField(input));
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Check all fields
  let isValid = true;
  inputs.forEach(input => {
    if (!validateField(input)) isValid = false;
  });

  // Check reCAPTCHA
  const recaptchaResponse = grecaptcha.getResponse();
  if (!recaptchaResponse) {
    alert("Please complete the CAPTCHA.");
    return;
  }

  if (!isValid) return;

  // Spinner
  const button = form.querySelector("button");
  button.disabled = true;
  const spinner = document.createElement("span");
  spinner.className = "spinner";
  button.appendChild(spinner);

  // Submit via Formspree
  const formData = new FormData(form);
  try {
    const res = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    button.disabled = false;
    spinner.remove();

    if (res.ok) {
      form.reset();
      grecaptcha.reset();
      showModal();
      if (window.gtag) {
        gtag('event', 'form_submission', {
          event_category: 'Contact',
          event_label: 'Contact Form',
          value: 1
        });
      }
    } else {
      alert("Oops, something went wrong. Please try again.");
    }
  } catch (error) {
    button.disabled = false;
    spinner.remove();
    alert("Network error. Please try again.");
  }
});

function showModal() {
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

window.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});

// FAQ SECTION

// Toggle FAQ open/close
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const card = question.parentElement;
    card.classList.toggle('open');
  });
});

// Animate each FAQ card into view
gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray('.faq-card').forEach(card => {
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

// Get all FAQ cards
const faqCards = document.querySelectorAll(".faq-card");

faqCards.forEach((card) => {
  const question = card.querySelector(".faq-question");

  question.addEventListener("click", () => {
    // If the clicked card is already open, close it
    if (card.classList.contains("faq-card-open")) {
      card.classList.remove("faq-card-open");
      return;
    }

    // Close all cards
    faqCards.forEach((c) => c.classList.remove("faq-card-open"));

    // Open the clicked card
    card.classList.add("faq-card-open");
  });
});