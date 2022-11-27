const loader = document.querySelector(".loader-container");

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.zIndex = "-1";
  }, 3000);
});
