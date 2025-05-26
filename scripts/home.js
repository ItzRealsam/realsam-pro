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

document.addEventListener("DOMContentLoaded", () => {
  
  // Animate each block in About col-2
  gsap.utils.toArray(".stat").forEach((block) => {
    gsap.fromTo(
      block,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: block,
          start: "top 80%",
          end: "top 60%",
          scrub: true,
        },
      }
    );
  });

  // Animate each block in Services col-2
  gsap.utils.toArray(".service-card").forEach((block) => {
    gsap.fromTo(
      block,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: block,
          start: "top 80%",
          end: "top 60%",
          scrub: true,
        },
      }
    );
  });

  // Animate each block in Testimonials col-2
  gsap.utils.toArray(".testimonial-card").forEach((block) => {
    gsap.fromTo(
      block,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: block,
          start: "top 80%",
          end: "top 60%",
          scrub: true,
        },
      }
    );
  });
});

