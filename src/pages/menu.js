const renderMenu = () => {
  const content = document.getElementById("content");

  //Remove all the content children
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }

  const title = document.createElement("h2");
  title.classList.add("pageTitle");
  title.textContent = "Menu";

  content.appendChild(title);

  //Create menu template
  for (let index = 0; index < 3; index++) {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    const left = document.createElement("div");
    left.classList.add("left");
    const right = document.createElement("div");
    right.classList.add("right");

    const title = document.createElement("h2");
    title.classList.add("menuTitle");

    const description = document.createElement("p");
    description.classList.add("description");

    right.appendChild(title);
    right.appendChild(description);

    menu.appendChild(right);
    menu.appendChild(left);

    content.appendChild(menu);
  }

  let [menu1, menu2, menu3] = document.querySelectorAll(".menu");
  console.log(menu1);
  let menu1Title = menu1.querySelector(".right .menuTitle");
  menu1Title.textContent = "Test";
};

export { renderMenu };
