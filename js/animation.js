//menu

const burger = document.querySelector(".burger");
const nav = document.querySelector(".navbar__menu");
const soc = document.querySelector(".navbar__social");

const handleClick = () => {
  burger.classList.toggle("burger--active");
  nav.classList.toggle("menu-active");
  soc.classList.toggle("menu-active");
};
burger.addEventListener("click", handleClick);

//Animacje

let tl = gsap.timeline({
  scrollTrigger: { trigger: ".about__content", start: "top 40%" },
});

tl.fromTo(
  ".about__title",
  { y: 200, opacity: 0 },
  { y: 0, opacity: 1 }
)
  .fromTo(
    ".about__line",
    { scaleX: 0 },
    {
      opacity: 1,
      scaleX: 1,
    }
  )
  .fromTo(
    ".about__text",
    { y: 200, opacity: 0 },
    { y: 0, opacity: 1, duration: 2 }
  );

gsap.fromTo(
  ".gallery__line",
  { scaleX: 0 },
  {
    opacity: 1,
    scaleX: 1,
    duration: 2,
    scrollTrigger: { trigger: ".gallery", start: "top 40%" },
  }
);
