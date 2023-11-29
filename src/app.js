const sideMenu = document.getElementById("side-menu");
const toggleBtn = document.querySelector(".bar-container");
const mainContent = document.querySelector(".main-content");
// const accordionHead = document.querySelectorAll(".accordion_head");
// const accordionBody = document.querySelectorAll(".accordion_body");
// const plus = document.querySelector(".plus");
// const minus = document.querySelector(".minus");
const accordions = document.querySelectorAll(".accordion");

toggleBtn.addEventListener("click", function () {
  sideMenu.classList.toggle("showWidth");
  mainContent.classList.toggle("marginLeft");
  this.classList.toggle("active");
});

window.addEventListener("scroll", function () {
  if (sideMenu.classList.contains("showWidth")) {
    sideMenu.classList.remove("showWidth");
    mainContent.classList.remove("marginLeft");
    toggleBtn.classList.remove("active");
  }
});

// accordion

accordions.forEach((accordion) => {
  const accordionHead = accordion.querySelector(".accordion_head");
  accordionHead.addEventListener("click", function (e) {
    accordions.forEach((item) => {
      if (item !== accordion) {
        item.classList.remove("show-accordion");
      }
    });
    accordion.classList.toggle("show-accordion");
  });
});


