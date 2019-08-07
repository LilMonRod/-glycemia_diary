(function() {
	const radioList = document.getElementsByClassName('check-time');
	const hour = document.getElementById('hour');
	radioArr = Array.prototype.slice.call(radioList);

	function activateHour() {
		hour.removeAttribute('disabled');
	}
	function desactivateHour() {
		hour.setAttribute('disabled', 'true');
	}

	function checkData(event) {
		if (event.target.id == 'other') {
			if (event.target.checked) {
				activateHour();
			} 
		} else {
				desactivateHour();
			}
	}
	for (let radio of radioArr) {
		radio.addEventListener('change', function(event) {
			checkData(event);
		});
	}

})();