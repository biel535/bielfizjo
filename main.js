const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(
  ".header__content h4, .header__content .section__header",
  {
    ...scrollRevealOption,
    delay: 500,
  }
);

ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

// about container
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__card", {
  ...scrollRevealOption,
  delay: 1000,
  interval: 300,
});

// price container
ScrollReveal().reveal(".price__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 20,
});


// Pobieranie elementów
const modal = document.getElementById("modal");
const closeModalBtn = document.querySelector(".close");

// Modal otwiera się automatycznie przy odświeżeniu strony
window.addEventListener("load", () => {
    modal.style.display = "flex";
});

// Zamykanie modalu po kliknięciu w "X"
closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Zamykanie modalu po kliknięciu poza jego obszar
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
