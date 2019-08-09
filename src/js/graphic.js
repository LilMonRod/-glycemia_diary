const Chart = require('chart.js');

const btnSave = document.getElementById('btn__safe');
const graphic = document.getElementById('graphic');
let graphicMeditions;
let graphicTime;

const graphicControler = new Chart(graphic, {
  type: 'line',
  data: {
    labels: ['', 'Ayunas', 'Antes de desayunar'],
    datasets: [
      {
        label: 'Nivel de azucar',
        fill: 0,
        lineTension: 0.4,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,0.4)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,0.4)',
        pointHoverBorderColor: 'rgba(75,192,192,0.4)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [80, 75, 92],
      },
    ],
  },
});

btnSave.addEventListener('click', (event) => {
  event.preventDefault();
  const medida = document.getElementById('glycemi').value;
  console.log(medida);
});

/**
 * Funcion que guarda los datos nuevos
 */
function setMeditions() {
  graphicMeditions = [];
  graphicTime = [];
  const data = JSON.parse(localStorage.getItem('data'));
  // console.log(data);
  const keys = Object.keys(data);
  keys.map((key) => {
    graphicMeditions.push(data[key].medicion);
    graphicTime.push(data[key].time);
    return true;
  });
  graphicMeditions.forEach(element => {
    console.log(element);
  });
  console.log(graphicMeditions.length + '- Medición');
  console.log(graphicTime + '- Tiempo')
  // console.log(graphicControler);
  // graphicControler.config.data.labels.push(graphicTime.length - 1);
  // console.log(graphicControler.config.data.labels);
  // console.log(graphicControler.config.data.datasets);
  // graphicControler.config.data.datasets[0].data.push(parseInt(graphicMeditions[graphicMeditions.length - 1]));
  // console.log(graphicMeditions);
  // console.log(graphicTime);

}

setMeditions();
