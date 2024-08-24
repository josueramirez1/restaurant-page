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

  const city = document.createElement("p");
  city.classList.add("city");
  city.innerHTML = "Marthwaite, Sedbergh <br/> Cumbria";

  const phoneNumber = document.createElement("p");
  phoneNumber.classList.add("phone-number");
  phoneNumber.textContent = "+00 44 123 4567";

  const address = document.createElement("div");
  address.classList.add("address");
  address.appendChild(city);
  address.appendChild(phoneNumber);

  container.appendChild(address);

  const hoursOfOperation = document.createElement("div");
  hoursOfOperation.classList.add("hours-of-operation");
  container.appendChild(hoursOfOperation);

  const hours = document.createElement("p");
  hours.innerHTML =
    "Open Hours: <br/> Mon - Fri: 09:00 AM - 10:30 PM <br/> Sat - Sun: 09:00 AM -  11:30 PM ";

  hoursOfOperation.appendChild(hours);
}
