gsap.registerPlugin(ScrollTrigger);

let tlStart = gsap.timeline({ defaults: { duration: 1, ease: "power4.out" } });
let tlAbout = gsap.timeline({ defaults: { duration: 1, ease: "power4.out" }, scrollTrigger: { trigger: "#about", start: "250 bottom", toggleActions: "play none none none", markers: false } });
let tlProjects = gsap.timeline({ defaults: { duration: 1, ease: "power4.out" }, scrollTrigger: { trigger: "#projects", start: "250 bottom", toggleActions: "play none none none", markers: false } });
let tlContacts = gsap.timeline({ defaults: { duration: 1, ease: "power4.out" }, scrollTrigger: { trigger: "#contacts", start: "250 bottom", toggleActions: "play none none none", markers: false } });
let mm = gsap.matchMedia();

function init() {
  mm.add("(min-width: 1024px)", () => {
    // start section
    tlStart.from("#start", { opacity: 0, autoAlpha: 0 }).from("#logo", { scale: 5, opacity: 0 }).to("#start__info", { width: "50%", xPercent: 50, duration: 2 }, "startMovement").from("#start__header", { y: -100, ease: "back" }, "startMovement<-=0.8").from("#start__footer", { y: 100, ease: "back" }, "startMovement<-=0.6").to("#start__media", { width: "50%", scaleX: 1, duration: 2 }, "startMovement<-=1.8");

    // about section
    tlAbout
      .to(
        "#about__info",
        {
          margin: 0,
          duration: 2,
          width: "50%",
          xPercent: 100,
          delay: 1,
        },
        "aboutMovement"
      )
      .to("#about__info > div", { margin: 0 }, "<")
      .from("#about__footer", { y: 100, ease: "back" }, "aboutMovement<-=0.6")
      .to("#about__media", { width: "50%", scaleX: 1, duration: 2 }, "aboutMovement<-=1.8");

    // what we do section
    tlProjects.from("#projects__footer", {
      y: 100,
      delay: 1,
    });

    // contacts section
    tlContacts
      .to(
        "#contacts__info",
        {
          margin: 0,
          duration: 2,
          width: "50%",
          xPercent: 100,
          delay: 1,
        },
        "contactsMovement"
      )
      .to("#contacts__info > .mx-auto", { margin: 0 }, "<")
      .from("#contacts__footer", { y: 100, ease: "back" }, "contactsMovement<-=0.6")
      .to("#contacts__media", { width: "50%", scaleX: 1, duration: 2 }, "contactsMovement<-=1.8");
  });
}

window.addEventListener("load", function () {
  const contactError = document.getElementById("contactError");
  const contactSend = document.getElementById("contactSend");
  const contactSubmit = document.getElementById("contactSubmit");
  const contactProcess = document.getElementById("contactProcess");
  const contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    contactProcess.classList.remove("hidden");

    const formData = new FormData(contactForm);
    const formAction = event.target.action;
    fetch(formAction, {
      method: "POST",
      body: formData,
    })
      .then(() => {
        contactSend.click();
        setTimeout(() => {
          contactForm.reset();
          contactSubmit.setAttribute("disabled", "true");
          contactProcess.classList.add("hidden");
        }, "1000");
      })
      .catch((error) => {
        contactError.classList.remove("hidden");
      });
  });

  init();

  const projectsMedia = new Swiper(".projects-thumb-swiper", {
    speed: 900,
    loop: false,
    spaceBetween: 24,
  });

  const projectsInfo = new Swiper(".projects-swiper", {
    speed: 600,
    loop: false,
    grabCursor: true,
    autoHeight: false,
    mousewheel: true,
    slidesPerView: 1,
    keyboard: true,
    spaceBetween: 24,

    navigation: {
      nextEl: ".projects-navigation__next",
      prevEl: ".projects-navigation__prev",
    },

    thumbs: {
      swiper: projectsMedia,
    },
  });
});
