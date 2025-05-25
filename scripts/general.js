// Cursor
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
  cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
  cursor.classList.add("expand");

  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500)
})

// Navbar Menu button
const pagesEl = document.querySelector('.pages')
const menuEl = document.querySelector('.menu')

menuEl.addEventListener('click', () => {
  pagesEl.classList.toggle('pages-open');
  menuEl.classList.toggle('menu-open');
  const isOpen = pagesEl.classList.toggle('show');
  menuEl.setAttribute('aria-expanded', isOpen);
});

/* // Nab bar theme toggle
const toggle = document.getElementById('theme-toggle');

toggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme); // remember user preference
});

//load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.documentElement.setAttribute('data-theme', savedTheme);
} */

//switching theme
const toggleButton = document.getElementById("theme-toggle");
const icon = toggleButton.querySelector("use");

function updateIcon(theme) {
  icon.setAttribute("href", theme === "dark" ? "#icon-sun" : "#icon-moon");
}

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  toggleButton.setAttribute("aria-pressed", theme === "dark");
  updateIcon(theme);
  localStorage.setItem("theme", theme);
}

// Initial check on page load
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

setTheme(initialTheme);

// Toggle on button click
toggleButton.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  setTheme(newTheme);

  // Animate
  toggleButton.querySelector("svg").classList.add("icon-rotate");
  setTimeout(() => {
    toggleButton.querySelector("svg").classList.remove("icon-rotate");
  }, 300);
});

/* Changed this because if light them was preferred, the moon logo doesn't come on page refresh
//switching theme
const toggleButton = document.getElementById("theme-toggle");
const icon = toggleButton.querySelector("use");

function updateIcon(theme) {
  icon.setAttribute("href", theme === "dark" ? "#icon-sun" : "#icon-moon");
}

function setTheme(isDark) {
  document.body.classList.toggle('dark', isDark);
  // updateIcon(theme);
  icon.setAttribute('href', isDark ? '#icon-sun' : '#icon-moon');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Detect user preference
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const savedTheme = localStorage.getItem("theme");
const currentTheme = savedTheme || (prefersDark ? "dark" : "light");

document.documentElement.setAttribute("data-theme", currentTheme);
toggleButton.setAttribute("aria-pressed", currentTheme === "dark");

toggleButton.addEventListener("click", () => {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  const newTheme = isDark ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", newTheme);
  toggleButton.setAttribute("aria-pressed", newTheme === "dark");
  localStorage.setItem("theme", newTheme);

  // Calling setTheme to update the icon
  setTheme(newTheme === "dark");

  // Animate
  toggleButton.querySelector('svg').classList.add('icon-rotate');
  setTimeout(() => {
    toggleButton.querySelector('svg').classList.remove('icon-rotate');
  }, 300);
}); */

// clients section list multiplier
var copy = document.querySelector('.logos-slide').cloneNode(true)
document.querySelector('.clients').appendChild(copy)

//projects carousel
const carousel = document.querySelector('.project-carousel');
const nextBtn = document.getElementById('nextProject');
const prevBtn = document.getElementById('prevProject');

nextBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: 300, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: -300, behavior: 'smooth' });
});

/* not needed rn
//Projects Carousel
el.scrollIntoView({
  behavior: 'smooth',
  inline: 'start'
}) */

/* was sticking hero col-1 instead of testimonial col-1
Scroll
let testimonials = document.getElementsByClassName("testimonials")[0];
let col_1 = document.getElementsByClassName("col-1")[0];

window.onscroll = () => {
  let scrollTop = window.scrollY;
  let viewportHeight = window.innerHeight;
  let contentHeight = col_1.getBoundingClientRect().height;
  let col_1Top = testimonials.getBoundingClientRect().top + window.pageYOffset;

  if(scrollTop >= contentHeight - viewportHeight + col_1Top) {
    col_1.style.transform = 'translateY(-${contentHeight - viewportHeight + col_1Top}px)';
    col_1.style.position = "fixed";
  }
  else {
    col_1.style.transform = "";
    col_1.style.position = "";
  }
} */
