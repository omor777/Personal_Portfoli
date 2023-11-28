const sideMenu = document.getElementById("side-menu");
const toggleBtn = document.querySelector(".bar-container");
const mainContent = document.querySelector(".main-content");
const accordionHead = document.querySelectorAll(".accordion_head");
const accordionBody = document.querySelectorAll(".accordion_body");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");

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
accordionHead.forEach((accordion) => {
  accordion.addEventListener("click", function (e) {
    const headDataId = accordion.dataset.id;
    hidePreviousAccordionBody(headDataId);
    if (accordion) {
      console.log("jsh");
    }
    const nextSibling = accordion.nextElementSibling;
    nextSibling.classList.toggle("hidden");
  });
});

function hidePreviousAccordionBody(headDataId) {
  accordionBody.forEach((item) => {
    const bodyDataId = item.dataset.id;
    if (headDataId !== bodyDataId) {
      item.classList.add("hidden");
    }
  });
}

console.log(document.querySelector("input").checked);
