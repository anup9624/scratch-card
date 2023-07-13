////////////////  VIDEO   ////////////////

const playPauseButton = document.querySelector(".play-pause-button");
const video = document.querySelector("video");

playPauseButton.addEventListener("click", () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});

////////////////  ANIMATION   ////////////////

gsap.from("#navbar", {
  y: -50,
  duration: 1,
  delay: 1,
  opacity: 0,
  stagger: 0.2,
});

gsap.from("#hero, #container", {
  y: -50,
  duration: 1,
  delay: 2,
  opacity: 0,
  stagger: 0.2,
});

gsap.from("#video", {
  y: -50,
  duration: 1,
  delay: 1,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#video",
    start: "top bottom",
  },
});

gsap.from("#feature", {
  x: -50,
  duration: 1,
  delay: 1,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#feature",
    start: "top bottom",
  },
});

gsap.from("#workflow", {
  y: -50,
  duration: 1,
  delay: 1,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#workflow",
    start: "top bottom",
  },
});

gsap.from("#help", {
  y: -50,
  duration: 1,
  delay: 1,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#help",
    start: "top bottom",
  },
});

gsap.from("#feedback, #testi-head, #testi-card", {
  y: -50,
  duration: 1,
  delay: 1,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#feedback",
    start: "top bottom",
  },
});

gsap.from("#plan", {
  y: -50,
  duration: 1,
  delay: 1,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#plan",
    start: "top bottom",
  },
});

gsap.from("#brand-heading h1, #brand-heading p, #brand-sector, #brand-logos", {
  y: 50,
  duration: 1,
  delay: 1,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#brand-heading",
    start: "top bottom",
  },
});

gsap.from("#container-contact, #contact-contanier", {
  x: -50,
  duration: 1,
  delay: 1,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#contact-contanier",
    start: "top bottom",
  },
});

gsap.from("#imagebox, #contact-detais", {
  x: 50,
  duration: 1,
  delay: 1,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#imagebox",
    start: "top bottom",
  },
});

gsap.from("#footer-left, #footer-center, #footer-right, hr, span", {
  y: 50,
  duration: 1,
  delay: 1,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#footer-left, #footer-center, #footer-right, hr, span",
    start: "top bottom",
  },
});
