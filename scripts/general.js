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

// Lenis Basic Setup
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// GSAP ScrollTrigger: animate text on enter and reverse on exit
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const splitTypes = document.querySelectorAll(".reveal-type-time, .reveal-type-scroll");
  
  splitTypes.forEach((element) => {
    const text = new SplitType(element, { types: "words" });

    gsap.from(text.words, {
      y: 100,
      opacity: 0.2,
      stagger: 0.01,
      ease: "power3.out",
      duration: 0.8,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play none none reverse",
        markers: false,
      },
    });
  });

  /*
  const testimonialTitles = document.querySelectorAll('.testimonials .reveal-type-scroll');

  testimonialTitles.forEach((el) => {
    const splitText = new SplitType(el, { types: 'words' });

    gsap.from(splitText.words, {
      y: 100,
      opacity: 0,
      stagger: 0.05,
      ease: "power3.out",
      scrollTrigger: {
        trigger: '.testimonials', // pin to entire section
        start: 'top top',
        end: 'bottom bottom',
        toggleActions: "play none none none",
        scrub: true,
        // markers: true,
      }
    });
  }); */

});


// Connect Lenis and ScrollTrigger
document.addEventListener("DOMContentLoaded", () => {
 
  lenis.on("scroll", ScrollTrigger.update);
});



/*
const splitTypesOnScroll = document.querySelectorAll ('.reveal-type-scroll')

splitTypesOnScroll.forEach((char,i) => {

  const text = new SplitType(char, { types: 'chars'})

  gsap.from(text.chars, {
    scrollTrigger: {
      trigger: char,
      start: 'top 80%',
      end: 'top 20%',
      scrub: false,
      markers: false
    },
    y:100,
    opacity: 0.2,
    stagger: 0.1,
  })

}) */

//== HEADER ==

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

/*
//STICKY SECTIONS
document.addEventListener("DOMContentLoaded", () => {
  
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray('.sticky-section').forEach(section => {
    const col1 = section.querySelector('.col-1');
    const col2 = section.querySelector('.col-2');

    ScrollTrigger.matchMedia({
      "(min-width: 1024px)": function () {
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: () => `+=${col2.scrollHeight - col1.offsetHeight}`,
          pin: col1,
          pinSpacing: false,
          scrub: true,
        });
      }
    });
  });

});
*/