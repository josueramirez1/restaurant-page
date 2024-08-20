export function Section() {
  const section = document.createElement("section");
  return { section };
}

export function Container() {
  const container = document.createElement("div");
  container.classList.add("container");
  return { container };
}

export function SecondaryHeader() {
  const secondaryHeader = document.createElement("h2");
  return { secondaryHeader };
}

export function paragraphText() {
  const paragraphText = document.createElement("p");
  return { paragraphText };
}

export function listItem() {
  const listItem = document.createElement("li");
  listItem.classList.add("list-item");
  return { listItem };
}
