import { contentContainer, headerContainer } from "./contentContainer.js";
import community from "./assets/images/community.jpg";

export default function about() {
  //clear
  contentContainer.textContent = "";
  contentContainer.removeAttribute("class");
  headerContainer.style.backgroundImage = "none";
  headerContainer.style.backgroundColor = "black";
  contentContainer.textContent = "";
  //add menu classlist to id content
  contentContainer.classList.add("about");

  const aboutTextContainer = document.createElement("div");

  const aboutTitle = document.createElement("h1");
  aboutTitle.textContent = "About Us";
  const aboutDescription = document.createElement("h6");
  const aboutImg = document.createElement("img");
  aboutDescription.textContent =
    "Since 1991 our purpose has been to serve our local community. We believe in a space to savor drinks, conversations and long-lasting memories. We are Landmark Coffee.";
  aboutImg.src = community;
  aboutTextContainer.append(aboutTitle, aboutDescription);
  contentContainer.append(aboutTextContainer, aboutImg);
}
