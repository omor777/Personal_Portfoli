const sideMenu = document.getElementById("side-menu");
const toggleBtn = document.querySelector(".bar-container");
const mainContent = document.querySelector(".main-content");

toggleBtn.addEventListener("click", function () {
  sideMenu.classList.toggle("showWidth");
  mainContent.classList.toggle("marginLeft");
  this.classList.toggle("active");
});
