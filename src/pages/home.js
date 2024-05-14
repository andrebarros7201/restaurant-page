const renderHome = () => {
  const content = document.getElementById("content");
  //Remove all the content children
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }

  const title = document.createElement("h2");
  title.classList.add("pageTitle");
  title.textContent = "Home";

  content.appendChild(title);

  const header = document.createElement("h2");
  header.classList.add("pageHeader");
  header.textContent = "Lorem Ipsum";

  content.appendChild(header);

  const paragraph = document.createElement("p");
  paragraph.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  content.appendChild(paragraph);
};

export { renderHome };
