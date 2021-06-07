import { homePage } from "/src/home";
import { menuPage } from "/src/menu";

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

  home.addEventListener('click', ()=>{
    main.replaceChild(homePage(), main.children[2])
  })
  menu.addEventListener('click', () =>{
    main.replaceChild(menuPage(), main.children[2])
  })

  listOfElements.classList.add("d-flex", "navbar");

  nav.appendChild(listOfElements);

  return nav;
};

const footer = () => {
  const footer = document.createElement("footer");

  const listOfFooter = document.createElement("ul");
  const canva = document.createElement("li");
  const github = document.createElement("li");
  const icons = document.createElement("li");

  const gitIcon = document.createElement("img");
  const gitLegend = document.createElement("span");
  gitIcon.src = "/dist/images/icons/github.svg";
  gitIcon.classList.add("github-logo");
  gitLegend.innerText = "Github";
  github.appendChild(gitIcon);
  github.appendChild(gitLegend);

  canva.innerText = "Images: Canva.com";
  icons.innerText = "Icons: Icons8.com";

  canva.classList.add("footer-item");
  icons.classList.add("footer-item");
  github.classList.add("footer-item", "d-flex");

  listOfFooter.appendChild(canva);
  listOfFooter.appendChild(icons);
  listOfFooter.appendChild(github);

  listOfFooter.classList.add("d-flex", "footer");

  footer.appendChild(listOfFooter);

  return footer;
};


main.appendChild(navBar());
main.appendChild(footer());
main.appendChild(homePage());


