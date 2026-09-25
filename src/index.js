import home from "./home.js";
import menu from "./menu.js";
import about from "./about.js";
import "./styles.css";

function init() {
  home();
  const homeBtn = document.querySelector(".nav-btn-0");
  const menuBtn = document.querySelector(".nav-btn-1");
  const aboutBtn = document.querySelector(".nav-btn-2");

  homeBtn.addEventListener("click", home);
  menuBtn.addEventListener("click", menu);
  aboutBtn.addEventListener("click", about);
}

init();
