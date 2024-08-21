import { Section, Container } from "./default.js";

export default function contactUs() {
  const content = document.querySelector("#content");
  const contact = Section().section;
  contact.setAttribute("id", "section-contact");
  content.appendChild(contact);

  const container = Container().container;
  container.classList.add("contact-us");
  container.classList.add("container");
  contact.appendChild(container);

  const restaurantName = document.createElement("h1");
  restaurantName.classList.add("contact-title");
  restaurantName.textContent = "dine";

  container.appendChild(restaurantName);
}
