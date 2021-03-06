document.addEventListener('DOMContentLoaded', () => {
  const newSportstarForm = document.querySelector('#new-sportstar-form');
  newSportstarForm.addEventListener('submit', handleNewSportstarFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteClick);

})

const handleNewSportstarFormSubmit = function (event) {
  event.preventDefault();

  const sportstar = createSportstar(event.target);
  const sportstarList = document.querySelector('#sportstar-list');
  sportstarList.appendChild(sportstar);

  event.target.reset();
}

const createSportstar = function (form) {
  const sportstar = document.createElement('ul');
  sportstar.classList.add('sportstar');

  const firstName = buildElement('li', 'First Name: ' + form.first_name.value);
  sportstar.appendChild(firstName);
  const lastName = buildElement('li', 'Last Name: ' + form.last_name.value);
  sportstar.appendChild(lastName);
  const sport = buildElement('li', 'Sport: ' + form.sport.value);
  sportstar.appendChild(sport);
  const age = buildElement('li', 'Age: ' + form.age.value);
  sportstar.appendChild(age);
  const career = buildElement('li', 'Career Phase: ' + form.career.value);
  sportstar.appendChild(career);

  return sportstar;
}

const buildElement = function (tag, value) {
  const element = document.createElement(tag);
  element.appendChild(document.createTextNode(value));
  return element;
}

const handleDeleteClick = function (event) {
  const sportstarList = document.querySelector('#sportstar-list');
  sportstarList.innerHTML = '';
}
