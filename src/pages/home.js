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
};

export { renderHome };
