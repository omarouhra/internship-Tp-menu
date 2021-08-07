const link = document.querySelector(".link");
const back = document.querySelector(".back");
const menu = document.querySelector(".menu");
const body = document.body;
const focusableSelector = "button,a,input";
let focusables = Array.from(menu.querySelectorAll(focusableSelector));

link.addEventListener("click", (e) => {
  e.preventDefault();
  menu.style.display = "block";
  menu.style.animation = "fade-in .2s ease-in";
  body.style.backgroundColor = "grey";

  menu.removeAttribute("aria-hidden");
  menu.setAttribute("aria-modal", "true");

  console.log(focusables);
});

// focus

const focusInMenu = (e) => {
  e.preventDefault();
  let index = focusables.findIndex((f) => f === menu.querySelector(":focus"));
  index++;

  if (index >= focusables.length) {
    index=0
  }
  focusables[index].focus()

};

// close menu function
const closeMenu = () => {
  menu.style.animation = "fade-out .2s ease-in";
  body.style.backgroundColor = "whitesmoke";
  menu.removeAttribute("aria-modal");
  menu.setAttribute("aria-hidden", "true");

  setTimeout(() => {
    menu.style.display = "none";
  }, 200);
};

back.addEventListener("click", (e) => {
  e.preventDefault();
  closeMenu();
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeMenu();
  }
  if (e.key === "Tab" && menu !== null) {
    focusInMenu(e);
  }
});
