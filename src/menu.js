import { contentContainer, headerContainer } from "./contentContainer.js";
import croissants from "./assets/images/croissants.jpg";
import carrot_cake from "./assets/images/carrot_cake.jpg";
import eclairs from "./assets/images/eclairs.jpg";

export default function menu() {
  //clear all things
  headerContainer.style.background = "none";
  headerContainer.style.backgroundColor = "black";
  contentContainer.textContent = "";
  //add menu classlist to id content
  contentContainer.classList.add("menu");
  //create unorderlist and item containers
  const menuTitle = document.createElement("h1");
  menuTitle.textContent = "Coffee Shop Favorites!";

  const menuUnorderedList = document.createElement("ul");
  const menuListItemOne = document.createElement("li");
  const menuListItemTwo = document.createElement("li");
  const menuListItemThree = document.createElement("li");
  menuUnorderedList.append(menuListItemOne, menuListItemTwo, menuListItemThree);
  contentContainer.append(menuTitle, menuUnorderedList);
  //first item
  const descriptionOne = document.createElement("h6");
  const imgOne = document.createElement("img");
  descriptionOne.textContent =
    "Sugar-coated croissaint filled with strawberry jelly";
  imgOne.src = croissants;
  imgOne.classList.add("menu-item-one");
  menuListItemOne.append(descriptionOne, imgOne);
  //second item
  const descriptionTwo = document.createElement("h6");
  const imgTwo = document.createElement("img");
  descriptionTwo.textContent = "Cozy carrot cake to warm up every morning";
  imgTwo.src = carrot_cake;
  imgTwo.classList.add("menu-item-two");
  menuListItemTwo.append(imgTwo, descriptionTwo);
  //third item
  const descriptionThree = document.createElement("h6");
  const imgThree = document.createElement("img");
  descriptionThree.textContent =
    "Donuts are great but eclairs...well we'll let you find out :)";
  imgThree.src = eclairs;
  imgThree.classList.add("menu-item-three");
  menuListItemThree.append(imgThree, descriptionThree);
}
