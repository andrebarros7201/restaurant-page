const renderAbout = () => {
  const content = document.getElementById("content");
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }

  const title = document.createElement("h2");
  title.classList.add("pageTitle");
  title.textContent = "About";

  content.appendChild(title);

  //Remove all the content children
};

export { renderAbout };
