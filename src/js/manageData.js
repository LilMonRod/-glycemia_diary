import validateRegister from './manageSession';

const userForm = document.getElementById('userForm');
let list = {};
const newForm = document.getElementById('newMedition');

function printUserPreferences(data) {
  // console.log(data.tipoMedicion);
  const units = document.getElementById('units');
  units.innerText = data.tipoMedicion;
}

function saveData(data, place) {
  list = {};
  list = JSON.parse(localStorage.getItem('data'));

  if (place === 'form') {
    const date = new Date();
    const id = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}-${date.getMilliseconds()}`;
    list[id] = data;

    // console.log(list);
    localStorage.setItem('data', JSON.stringify(list));
    // console.log(JSON.stringify(list));

    /**
     * Lamando ala función cada vez que
     * se haga una nueva
     * setMeditions();
     */
  } else if (place === 'user') {
    localStorage.setItem('dataUser', JSON.stringify(data));
  }
}

function getUserData(data) {
  // console.log('datos del usuario');
  const userData = {};
  userData.name = data[0].value;
  userData.tipoMedicion = data[1].value;
  // console.log(userData);
  saveData(userData, 'user');
  validateRegister();
  // console.log('funcionó la expoertacón');
}

function getMeditionData(data) {
  // console.log('datos de medición obtenidos');
  const formData = {};
  formData.medicion = data[0].value;
  formData.observaciones = data[1].value;
  if (data[2].checked === true) {
    formData.time = data[2].value;
  }

  if (data[3].checked === true) {
    formData.time = data[3].value;
  }

  if (data[4].checked === true) {
    formData.time = data[4].value;
  }

  if (data[5].checked === true) {
    formData.time = data[5].value;
  }

  if (data[6].checked === true) {
    formData.time = data[6].value;
  }

  if (data[7].checked === true) {
    formData.time = data[7].value;
  }

  if (data[8].checked === true) {
    formData.time = data[8].value;

    formData.hora = data[9].value;
  }

  saveData(formData, 'form');
}

function saveNewData(event) {
  event.preventDefault();
  if (event.target.id === 'userForm') {
    // console.log('datos de nuevo usuario');
    getUserData(event.target);
  } else if (event.target.id === 'newMedition') {
    // console.log('datos de nueva medicion');
    getMeditionData(event.target);
  }
  event.target.reset();

  location.reload(); /*eslint-disable-line*/
}

function validateData() {
  const data = localStorage.getItem('data');
  if (data !== null) {
    // console.log('hay data en localstortage:', data);
  }
  let user = localStorage.getItem('dataUser');
  if (user !== null) {
    // console.log('hay data en stortage:', user);
    user = JSON.parse(user);
    printUserPreferences(user);
  }
  const completeData = {};
  completeData.user = user;
  completeData.data = data;
  return completeData;
}

newForm.addEventListener('submit', saveNewData);
userForm.addEventListener('submit', saveNewData);

validateData();
