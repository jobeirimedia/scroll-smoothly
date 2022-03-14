const firstButton = document.querySelector(".btn--1");
const secondButton = document.querySelector(".btn--2");
const thirdButton = document.querySelector(".btn--3");
const fourthButton = document.querySelector(".btn--4");

const section1 = document.querySelector(".section--1");
const section2 = document.querySelector(".section--2");
const section3 = document.querySelector(".section--3");
const section4 = document.querySelector(".section--4");

const header = document.querySelector(".header");

// functions
const smoothScroll = (element) => {
  element.scrollIntoView({ behavior: "smooth" });
};

header.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn--1")) {
    smoothScroll(section1);
  }

  if (e.target.classList.contains("btn--2")) {
    smoothScroll(section2);
  }

  if (e.target.classList.contains("btn--3")) {
    smoothScroll(section3);
  }

  if (e.target.classList.contains("btn--4")) {
    smoothScroll(section4);
  }
});

// DONE
// It's show time.

// If you want to see more content from me, Please subscribe.
// JobeiriMedia
