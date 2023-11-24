const sideMenu = document.getElementById("side-menu");
const toggleBtn = document.querySelector(".bar-container");
const mainContent = document.querySelector(".main-content");

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
