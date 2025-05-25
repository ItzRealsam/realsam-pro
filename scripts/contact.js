
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
