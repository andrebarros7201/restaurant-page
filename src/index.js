import "./style.css";
import { renderMenu } from "./pages/menu";
import { renderHome } from "./pages/home";
import { renderAbout } from "./pages/about";

const homeButton = document.getElementById("1");
const menuButton = document.getElementById("2");
const aboutButton = document.getElementById("3");

// Render the Home page on start
renderHome();

homeButton.addEventListener("click", () => {
  renderHome();
});

menuButton.addEventListener("click", () => {
  renderMenu();
});

aboutButton.addEventListener("click", () => {
  renderAbout();
});
