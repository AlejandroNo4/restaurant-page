export { footer };

const footer = () => {
  const footer = document.createElement("footer");

  const listOfFooter = document.createElement("ul");
  const canva = document.createElement("li");
  const github = document.createElement("li");

  const gitIcon = document.createElement("img");
  const gitLegend = document.createElement("span");
  gitIcon.src = "/dist/images/icons/github.svg";
  gitIcon.classList.add("github-logo");
  gitLegend.innerText = "Github.com/AlejandroNo4";
  github.appendChild(gitIcon);
  github.appendChild(gitLegend);

  canva.innerText = "Images: Canva.com";

  canva.classList.add("footer-item");
  github.classList.add("footer-item", "d-flex");

  canva.addEventListener("click", () => {
    window.open("https://www.canva.com/");
  });

  github.addEventListener("click", () => {
    window.open("https://github.com/AlejandroNo4");
  });

  listOfFooter.appendChild(canva);
  listOfFooter.appendChild(github);

  listOfFooter.classList.add("d-flex", "footer");

  footer.appendChild(listOfFooter);

  return footer;
};
