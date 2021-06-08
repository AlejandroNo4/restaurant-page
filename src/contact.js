const contactPage = () => {
  const { body } = document;
  body.classList.add('main-background');
  body.style.backgroundImage = 'url(images/outside-front.png)';

  const contact = document.createElement('div');
  const title = document.createElement('h1');
  const infoContainer = document.createElement('ul');
  const street = document.createElement('li');
  const city = document.createElement('li');
  const zip = document.createElement('li');
  const telephone = document.createElement('li');
  const email = document.createElement('li');

  title.innerText = 'Contact';
  street.innerText = 'Street: 1756  Hoffman Avenue';
  city.innerText = 'City: New York, NY';
  zip.innerText = 'Zip code: 10016';
  telephone.innerText = 'Telephone: 917-954-7929';
  email.innerText = 'Email: stokehouse@testmail.com';

  infoContainer.appendChild(street);
  infoContainer.appendChild(city);
  infoContainer.appendChild(zip);
  infoContainer.appendChild(telephone);
  infoContainer.appendChild(email);

  infoContainer.classList.add('info-container');
  title.classList.add('name');
  contact.classList.add('contact-container');

  contact.appendChild(title);
  contact.appendChild(infoContainer);

  return contact;
};

export default contactPage;
