export { menuPage };

const menuPage = () => {
  const body = document.body;
  body.classList.add("main-background");
  body.style.backgroundImage = "url(/dist/images/menu-bg.png)";

  const mainMenu = document.createElement("div")
  mainMenu.classList.add("menu-container", "d-flex");

  const title =  document.createElement("h1")
  title.innerText = "Menu"
  title.classList.add("name")
  mainMenu.appendChild(title)

  mainMenu.appendChild(menuItem("Picanha", "89"));
  mainMenu.appendChild(menuItem("Cowboy", "75"));
  mainMenu.appendChild(menuItem("Porterhouse", "72"));
  mainMenu.appendChild(menuItem("Rib-eye", "84"));
  mainMenu.appendChild(menuItem("Ribs", "95"));
  mainMenu.appendChild(menuItem("Brisket", "80"));
  mainMenu.appendChild(menuItem("Tomahawk", "94"));
  mainMenu.appendChild(menuItem("Wagyu", "250"));

  return mainMenu
};

const menuItem = (name, price) => {
  const cardMenu = document.createElement("div");
  const imgWrapper = document.createElement("div");
  const cardDescription = document.createElement("div");
  const dishName = document.createElement("h3");
  const dishDescription = document.createElement("p");
  const dishPrice = document.createElement("p");

  dishName.innerText = name;
  dishDescription.innerText = `The best ${name} in town. Served with roquefort butter, accompanied by mashed potatoes.
        Order it with roquefort butter or garlic butter for an exceptional touch of flavor.`;
  dishPrice.innerText = `$${price}.00`;

  cardMenu.classList.add("card-menu");
  imgWrapper.classList.add("img-container", "d-flex");
  cardDescription.classList.add("card-menu-description", "d-flex");
  dishName.classList.add("dish-title");
  dishDescription.classList.add("dish-paragraph");
  dishPrice.classList.add("price");

  cardDescription.appendChild(dishName);
  cardDescription.appendChild(dishDescription);
  cardDescription.appendChild(dishPrice);

  imgWrapper.appendChild(cardDescription);
  imgWrapper.style.backgroundImage = `url(/dist/images/${name.toLowerCase()}.png)`;

  cardMenu.appendChild(imgWrapper);

  return cardMenu;
};
