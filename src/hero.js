import { Section, Container } from "./default.js";

export default function home() {
  //   const header = document.querySelector("#header");
  const content = document.querySelector("#content");
  // nav section

  //   hero section
  const hero = Section().section;
  hero.setAttribute("id", "section-hero");
  content.appendChild(hero);

  // 1st column
  const container = Container().container;
  container.classList.add("container");
  container.classList.add("hero");
  container.classList.add("grid-2-columns");

  const restaurantName = document.createElement("h1");
  restaurantName.classList.add("restaurant-title");
  restaurantName.textContent = "dine";

  const heroColumn1 = document.createElement("div");
  heroColumn1.classList.add("hero-column-1");

  const heroBox = document.createElement("div");
  heroBox.classList.add("hero-box");

  const heroHeading = document.createElement("h2");
  heroHeading.setAttribute("class", "hero-heading");
  heroHeading.textContent = "Exquisite dining since 1989";

  const paragraphHeading = document.createElement("p");
  paragraphHeading.setAttribute("class", "paragraph-heading");
  paragraphHeading.textContent =
    "Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.";

  hero.appendChild(container);
  container.appendChild(heroColumn1);
  heroColumn1.appendChild(heroBox);
  heroBox.appendChild(restaurantName);
  heroBox.appendChild(heroHeading);
  heroBox.appendChild(paragraphHeading);

  // 2nd column
  const heroColumn2 = document.createElement("div");
  heroColumn2.classList.add("hero-column-2");
  container.appendChild(heroColumn2);
}
