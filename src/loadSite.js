export default function loadSite() {
  //selectors
  const headerContainer = document.querySelector("header");
  const contentContainer = document.getElementById("content");
  const navContainer = document.querySelector("nav");
  const navBtn = document.querySelectorAll("button");
  //add id's and classes to html tags
  navBtn.forEach((navBtn) => navBtn.classList.add("nav-btn"));
  headerContainer.id = "header";
  navContainer.id = "nav";
  //apply
  const headerTitle = document.createElement("h1");
  headerTitle.textContent = "Rich, Remarkable Coffee";
  contentContainer.appendChild(headerTitle);
}
