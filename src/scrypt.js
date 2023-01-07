const buttonHeader = document.querySelector(".btn-container");
buttonHeader.addEventListener("click", () => {
  document.getElementById("menu-links").classList.toggle("show-menu");
  document.getElementById("footer-inputs").classList.toggle("show-footer");
});
