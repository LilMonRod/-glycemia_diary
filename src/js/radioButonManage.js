const hour = document.getElementById('hour');
const radioArr = [...document.getElementsByClassName('check-time')];

function activateHour() {
  hour.removeAttribute('disabled');
}
function desactivateHour() {
  hour.setAttribute('disabled', 'true');
}

function checkData(event) {
  if (event.target.id === 'other') {
    if (event.target.checked) {
      activateHour();
    }
  } else {
    desactivateHour();
  }
}

radioArr.forEach((radio) => {
  radio.addEventListener('change', checkData);
});
