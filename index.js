// buttons hover
const buttons = document.querySelectorAll(".btn");
function btnHoverEffect(btn) {
  return function (e) {
    const btnElement = btn.querySelector(".btn-element");

    const btnRect = btn.getBoundingClientRect();
    const xOffset = e.clientX - btnRect.left;
    const yOffset = e.clientY - btnRect.top;

    btnElement.style.top = `${yOffset}px`;
    btnElement.style.left = `${xOffset}px`;
  };
}
buttons.forEach((btn) => {
  btn.addEventListener("mousemove", btnHoverEffect(btn));
});

//header lang change
const langEng = document.querySelector(".header__lang");
const langSpa = document.querySelector(".lang-spa");
langEng.addEventListener("mouseenter", () => {
  langSpa.style.display = "flex";
});
langEng.addEventListener("mouseleave", () => {
  langSpa.style.display = "none";
});

//header spoiler
const headerSpoilerBtn = document.querySelector(".header__spoiler-btn");
const headerSpoilerContent = document.querySelector(".header__spoiler");
const headerSpoilerBtnSpan = document.querySelector(
  ".header__spoiler-btn span"
);
headerSpoilerBtn.addEventListener("click", () => {
  headerSpoilerContent.classList.toggle("_active");
  headerSpoilerBtn.classList.toggle("_active");
  headerSpoilerBtnSpan.classList.toggle("_active");
});

document.addEventListener("click", (event) => {
  const target = event.target;

  // Перевірка, чи клік відбувся поза акордіон-блоками і кнопками фільтра
  if (
    !target.closest(".header__spoiler") &&
    !target.closest(".header__spoiler-btn")
  ) {
    headerSpoilerContent.classList.remove("_active");
    headerSpoilerBtn.classList.remove("_active");
    headerSpoilerBtnSpan.classList.remove("_active");
  }
});

const headerSpoilerContentLinks = document.querySelectorAll(
  ".header__spoiler-links li a"
);
const headerSpoilerContentImages = document.querySelectorAll(
  ".header__spoiler-images li"
);

headerSpoilerContentImages[0].style.display = "flex";

for (let i = 1; i < headerSpoilerContentImages.length; i++) {
  headerSpoilerContentImages[i].style.display = "none";
}

headerSpoilerContentLinks.forEach((itemLink, index) => {
  itemLink.addEventListener("mouseover", () => {
    headerSpoilerContentImages.forEach((itemImage) => {
      itemImage.style.display = "none";
    });
    headerSpoilerContentImages[index].style.display = "flex";
  });
});

//swiper
let swiper = new Swiper(".swiper", {
  loop: true,
  lazy: {
    loadOnTransitionStart: true,
    loadPrevNext: true,
  },

  speed: 500,
  spaceBetween: 0,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  effect: "swipe",
  grabCursor: false,
  simulateTouch: false,
  allowTouchMove: false,
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
  },
});

// header__burger
const headerBurgerBtn = document.querySelector(".header__burger");
const headerBurgerMenu = document.querySelector(".menu");
const body = document.querySelector("body");

headerBurgerBtn.addEventListener("click", () => {
  headerBurgerBtn.classList.toggle("_active");
  headerBurgerMenu.classList.toggle("_active");
});

window.addEventListener("scroll", (e) => {
  const scrollDistance = window.scrollY;
  if (scrollDistance > 130) {
    headerBurgerBtn.classList.remove("_active");
    headerBurgerMenu.classList.remove("_active");
    headerSpoilerContent.classList.remove("_active");
    headerSpoilerBtn.classList.remove("_active");
    headerSpoilerBtnSpan.classList.remove("_active");
  }
});

// ==========================================
//=================================
const gsapItems = document.querySelectorAll(".gsap-item-ani");
gsapItems.forEach((gsapItem) => {
  gsap.from(gsapItem, {
    y: 15,
    ease: "power1.inOut",
    duration: 0.7,
    opacity: 0,
    scrollTrigger: {
      trigger: gsapItem,
      start: "-50% center ",
    },
  });
});

document.querySelectorAll("header nav ul li button").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    gsap.to(window, {
      duration: 1,
      ease: "power4.out",
      scrollTo: { y: ".scrollTo" + (index + 1), offsetY: 10 },
    });
  });
});

// =====================================================
