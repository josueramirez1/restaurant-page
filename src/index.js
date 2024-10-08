import "./styles.css";
import menu from "./menu.js";
import contactUs from "./contact.js";
import home from "./hero.js";
import reservation from "./reservation.js";

function start() {
  home();

  document.addEventListener("click", (e) => {
    const content = document.querySelector("#content");
    const homeBtn = document.querySelector(".nav-btn-1");
    const menuBtn = document.querySelector(".nav-btn-2");
    const contactBtn = document.querySelector(".nav-btn-3");
    const reservationBtn = document.querySelector(".nav-btn-4");

    const section = document.querySelector("section");
    if (
      e.target === homeBtn ||
      e.target === menuBtn ||
      e.target === contactBtn ||
      e.target === reservationBtn
    ) {
      content.removeChild(section);
      if (e.target === homeBtn) home();
      if (e.target === menuBtn) menu();
      if (e.target === contactBtn) contactUs();
      if (e.target === reservationBtn) reservation();
    }
  });
}

const startTab = start();
