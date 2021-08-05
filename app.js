const link = document.querySelector(".link");
const back = document.querySelector(".back");
const menu = document.querySelector(".menu");

link.addEventListener("click", (e) => {
  e.preventDefault();
  menu.style.display = "block";
});

back.addEventListener("click", (e) => {
  e.preventDefault();
  menu.style.display = "none";
});
