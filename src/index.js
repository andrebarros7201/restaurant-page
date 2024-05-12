import "./style.css";
import { renderMenu } from "./pages/menu";

const menuButton = document.getElementById("2");

menuButton.addEventListener("click", () => {
  renderMenu();
});
console.log("Hi5");
