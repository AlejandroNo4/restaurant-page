const homePage = () => {
  const { body } = document;
  body.classList.add('main-background');
  body.style.backgroundImage = 'url(/dist/images/pub.png)';

  const center = document.createElement('div');
  const nameContainer = document.createElement('div');
  const name = document.createElement('h1');
  const subName = document.createElement('p');

  name.innerText = 'Stokehouse';
  subName.innerText = 'Gastro Pub';

  nameContainer.appendChild(name);
  nameContainer.appendChild(subName);

  name.classList.add('name');
  nameContainer.classList.add('restaurant-name');
  const testimonial = document.createElement('p');

  testimonial.innerText = '"The best place in town with the best meat and service." - Gastro Magazine';
  testimonial.classList.add('quote');
  center.appendChild(nameContainer);
  center.appendChild(testimonial);
  center.classList.add('main-center');

  return center;
};

export default homePage;