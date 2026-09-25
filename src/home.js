import { contentContainer, headerContainer } from "./contentContainer.js";

export default function home() {
  contentContainer.textContent = "";
  contentContainer.removeAttribute("class");
  headerContainer.removeAttribute("style");
  //selectors
  const navContainer = document.querySelector("nav");
  const navBtn = document.querySelectorAll("button");
  //add id's and classes to html tags
  navBtn.forEach((navBtn, index) =>
    navBtn.classList.add(`nav-btn`, `nav-btn-${index}`),
  );
  navContainer.id = "nav";
  //apply
  const headerTitle = document.createElement("h1");
  const headerDescription = document.createElement("p");
  headerTitle.textContent = "Coffeeteria & Bistro";
  headerDescription.textContent = "Since 1991. Serving our local community.";
  contentContainer.appendChild(headerTitle);
  contentContainer.appendChild(headerDescription);
}
