import { footer } from "/src/footer";
import { homePage } from "/src/home";
import { menuPage } from "/src/menu";
import { contactPage } from "/src/contact";

const main = document.getElementById("content");

const navBar = () => {
  const nav = document.createElement("nav");
  const listOfElements = document.createElement("ul");
  const home = document.createElement("li");
  const contact = document.createElement("li");
  const menu = document.createElement("li");

  home.innerText = "Home";
  contact.innerText = "Contact";
  menu.innerText = "Menu";

  home.classList.add("nav-item");
  contact.classList.add("nav-item");
  menu.classList.add("nav-item");

  listOfElements.appendChild(home);
  listOfElements.appendChild(menu);
  listOfElements.appendChild(contact);

  home.addEventListener("click", () => {
    main.replaceChild(homePage(), main.children[2]);
  });
  menu.addEventListener("click", () => {
    main.replaceChild(menuPage(), main.children[2]);
  });
  contact.addEventListener("click", () => {
    main.replaceChild(contactPage(), main.children[2]);
  });

  listOfElements.classList.add("d-flex", "navbar");

  nav.appendChild(listOfElements);

  return nav;
};

main.appendChild(navBar());
main.appendChild(footer());
main.appendChild(homePage());
