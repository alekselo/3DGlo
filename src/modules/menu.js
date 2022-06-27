"use strict";
const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");

  const handleMenu = () => {
    menu.classList.toggle("active-menu");
  };

  menuBtn.addEventListener("click", handleMenu);

  menu.addEventListener("click", (event) => {
    let target = event.target;
    if (target.classList.contains("close-btn")) {
      handleMenu();
    } else if (target.nodeName === "A") {
      handleMenu();
    }
  });
  menuBtn.addEventListener("click", handleMenu);
};

export default menu;
