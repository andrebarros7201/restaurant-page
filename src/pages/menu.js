function Menu(title, description, price) {
  return { title, description, price };
}

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
  let menuItems = [];

  for (let i = 0; i < 3; i++) {
    const title = "Lorem Ipsum";
    const description =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    const price = 5.0;
    menuItems.push(Menu(title, description, price));
  }

  console.log(menuItems);

  //Create menu template
  menuItems.forEach((item) => {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    const left = document.createElement("div");
    left.classList.add("left");
    const right = document.createElement("div");
    right.classList.add("right");

    const title = document.createElement("h2");
    title.classList.add("menuTitle");
    title.textContent = `${item.title}`;

    const description = document.createElement("p");
    description.classList.add("description");
    description.textContent = `${item.description}`;

    const price = document.createElement("p");
    price.classList.add("price");
    price.textContent = `Price: ${item.price}$`;

    right.appendChild(title);
    right.appendChild(description);
    right.appendChild(price);

    menu.appendChild(left);
    menu.appendChild(right);

    content.appendChild(menu);
  });
};

export { renderMenu };
