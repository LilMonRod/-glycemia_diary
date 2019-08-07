(function() {
	const userForm = document.getElementById('userForm');
	let counter = 1;
	const list = new Object;
	const newForm = document.getElementById('newMedition');


	function saveNewData(event) {
		event.preventDefault();
		if (event.target.id == 'userForm') {
			console.log('datos de nuevo usuario');
			getUserData(event.target);
		} else if (event.target.id == 'newMedition') {
			console.log('datos de nueva medicion');
			getMeditionData(event.target);
		}
		event.target.reset();    
	}
	function getMeditionData(data) {
			console.log('datos de medición obtenidos');
			let formData = new Object;
			formData.medicion = data[0].value;
			formData.observaciones = data[1].value;
			if (data[2].checked == true) {
				formData.time = data[2].value;
			}

			if (data[3].checked == true) {
				formData.time = data[3].value;
			}
			
			if (data[4].checked == true) {
				formData.time = data[4].value;
			}

			if (data[5].checked == true) {
				formData.time = data[5].value;
			}

			if (data[6].checked == true) {
				formData.time = data[6].value;
			}

			if (data[7].checked == true) {
				formData.time = data[7].value;   
			}

			if (data[8].checked == true) {
				formData.time = data[8].value;

				formData.hora = data[9].value;
			}

			saveData(formData, 'form');

			console.log('toda la data');
			getData();
	}

	function getUserData(data) {
		let userData = new Object;
		userData.name = data[0].value;
		userData.tipoMedicion = data[1].value;

		saveData(userData, 'user');
	}

	function saveData(data, place) {
		if (place == 'form'){
			const date = new Date();
			let id = date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear() + '-' + counter;
			list[id] = data;

			console.log(list);
			localStorage.setItem( 'data', JSON.stringify(list));
			console.log(JSON.stringify(list));
			counter = counter+ 1;
		} else if (place == 'user') {
			localStorage.setItem('dataUser', JSON.stringify(data));
		}
	}

	function validateData() {
		let data = localStorage.getItem('data');
		if (!(data == null)) {
			console.log('hay data en localstortage:', data );
		}
		let user = localStorage.getItem('dataUser');
		if (!(user == null)) {
			console.log('hay data en stortage:', user );
			user = JSON.parse(user);
			printUserPreferences(user);
		}  
					
		let completeData = new Object;
		completeData.user = user;
		completeData.data = data;
		return completeData;
	}

	function printUserPreferences(data) {
		console.log(data.tipoMedicion);
		const units = document.getElementById('units');
		units.innerText = data.tipoMedicion;
	}

	newForm.addEventListener('submit', saveNewData);
	userForm.addEventListener('submit' , saveNewData);
	validateData();
})();