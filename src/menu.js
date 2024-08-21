import { Section, Container, listItem } from "./default.js";
import banana from "./img/banana-bread.jpg";
import pasta from "./img/pasta.jpg";
import steak from "./img/steak.jpg";

export default function menu() {
  //   const header = document.querySelector("#header");
  const content = document.querySelector("#content");
  // nav section

  //   hero section
  const hero = Section().section;
  hero.setAttribute("id", "section-menu");
  content.appendChild(hero);

  const container = Container().container;

  container.classList.add("grid-2-columns-even");
  container.classList.add("menu");
  hero.appendChild(container);

  const firstColumn = document.createElement("div");
  firstColumn.classList.add("first-column");
  const secondColumn = document.createElement("div");
  secondColumn.classList.add("second-column");

  container.appendChild(firstColumn);
  container.appendChild(secondColumn);

  const menuTitle = document.createElement("h1");
  menuTitle.textContent = "A few highlights from our menu";
  firstColumn.appendChild(menuTitle);

  const menuParagraph = document.createElement("p");
  menuParagraph.textContent =
    "We cater for all dietary requirements, but here's a glimpse at some of our diner's favorites. Our menu is revamped every season";
  firstColumn.appendChild(menuParagraph);

  const menuList = document.createElement("ul");
  menuList.classList.add("menu-list");
  secondColumn.appendChild(menuList);

  for (let i = 1; i <= 3; i++) {
    const item = listItem().listItem;
    menuList.appendChild(item);
    const img = document.createElement("img");
    const divText = document.createElement("div");
    divText.classList.add("div-text");
    const itemh2 = document.createElement("h2");
    const itemP = document.createElement("p");
    const imgHr = document.createElement("hr");
    imgHr.classList.add("hrImg");
    img.style.width = "180px";
    item.classList.add("item" + [i]);
    if (i === 1) {
      img.src = banana;
      itemh2.textContent = "Banana Bread";
      itemP.textContent =
        "Made with organic ingredients, our banana bread sets the standard for sweet bread";
    }
    if (i === 2) {
      img.src = pasta;
      itemh2.textContent = "Pasta";
      itemP.textContent =
        "Even the most critical will not resist a meal of our famous pasta";
    }
    if (i === 3) {
      img.src = steak;
      itemh2.textContent = "Steak";
      itemP.textContent =
        "Nothing beats a classic, accompanied by fresh spices and herbs to enhance flavor";
    }
    item.appendChild(img);
    item.appendChild(divText);
    divText.appendChild(itemh2);
    divText.appendChild(itemP);
    menuList.appendChild(imgHr);
  }
}
