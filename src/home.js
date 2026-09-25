import { contentContainer } from "./contentContainer.js";

export default function home() {
  //selectors
  const navContainer = document.querySelector("nav");
  const navBtn = document.querySelectorAll("button");
  //add id's and classes to html tags
  navBtn.forEach((navBtn) => navBtn.classList.add("nav-btn"));
  navContainer.id = "nav";
  //apply
  const headerTitle = document.createElement("h1");
  const headerDescription = document.createElement("p");
  headerTitle.textContent = "Landmark Coffee";
  headerDescription.textContent =
    "Since 1991. Serving local, rich coffee to our community.";
  contentContainer.appendChild(headerTitle);
  contentContainer.appendChild(headerDescription);
}
