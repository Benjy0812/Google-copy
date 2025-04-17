document.getElementById("lucky").addEventListener("click", function () {
  window.open("https://en.wikipedia.org/wiki/Special:Random", "_blank");
});

const themeToggle = document.getElementById("theme-toggle");
const themeImg = document.getElementById("themeImg")
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});

themeToggle.addEventListener("click", () => {
  if (body.classList.contains("dark-mode")) {
    themeImg.src = "moon.png";
  } else {
    themeImg.src = "sun.png";
  }
})
