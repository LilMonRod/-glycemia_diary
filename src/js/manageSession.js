const magageGlicemya = document.getElementById('magageGlicemya');
const registration = document.getElementById('registration');
const grafic = document.getElementById('graphic-cont');
const list = document.getElementById('list');

function hideLog() {
  // escondiendo log

  registration.classList.add('none');
  magageGlicemya.classList.remove('none');
  grafic.classList.remove('none');
  list.classList.remove('none');
}
function showLog() {
  // mostrando log
  registration.classList.remove('none');
  magageGlicemya.classList.add('none');
  grafic.classList.add('none');
  list.classList.add('none');
}

function validateRegister() {
  const user = localStorage.getItem('dataUser');
  if (user == null) {
    // no hay data en stortage: first session
    showLog();
  } else {
    // hay data
    hideLog();
  }
}

validateRegister();

export default validateRegister;
