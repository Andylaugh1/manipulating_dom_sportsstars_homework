document.addEventListener('DOMContentLoaded', () => {
  const newSportstarForm = document.querySelector('#new-sportsman-form');
  newSportstarForm.addEventListener('submit', handleNewSportstarFormSubmit);

})

const handleNewSportstarFormSubmit = function (event) {
  event.preventDefault();

const sportstar = createSportstar(event.target);
const sportstarList = document.querySelector('#sportstar-list');
sportstarList.appendChild(sportstar);

event.target.reset();
}

const createSportstar = function (form) {
  const sportstar = document.createElement('li');
  sportstar.classList.add('sportstar');

  const firstName = buildElement('h2', form.first-name.value);
  sportstar.appendChild(firstName);
  const lastName = buildElement('h3', form.last-name.value);
  sportstar.appendChild(lastName);
  const sport = buildElement('h3', form.sport.value);
  sportstar.appendChild(sport);
  const age = buildElement('h3', form.age.value);
  sportstar.appendChild(age);

  return sportstar;
}

const buildElement = function (tag, value) {
  const element = document.createElement(tag);
  element.textContext = value;
  return element;
}
