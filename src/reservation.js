import { Section, Container } from "./default.js";

export default function reservation() {
  const content = document.querySelector("#content");
  const section = Section().section;
  section.setAttribute("id", "section-reservation");
  content.appendChild(section);

  const container = Container().container;
  container.classList.add("container");
  container.classList.add("reservation");
  container.classList.add("grid-2-columns");
  section.appendChild(container);

  const reservationFirstColumn = document.createElement("div");
  reservationFirstColumn.classList.add("reservation-first-column");
  const reservationSecondColumn = document.createElement("div");
  reservationSecondColumn.classList.add("reservation-second-column");

  container.appendChild(reservationFirstColumn);
  container.appendChild(reservationSecondColumn);

  const h1 = document.createElement("h1");
  h1.classList.add("reservation-title");
  h1.textContent = "Ready to make a reservation?";
  reservationFirstColumn.appendChild(h1);

  const reservationButton = document.createElement("button");

  reservationButton.classList.add("nav-btn-4");
  reservationButton.textContent = "Book a table";
  reservationSecondColumn.appendChild(reservationButton);
}
