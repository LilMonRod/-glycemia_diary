const Chart = require('chart.js');
const graphic = document.getElementById('graphic');

console.log(Chart + 'Hodi');

const graphicControler = new Chart(graphic, {
  type: 'line',
  data: {
    labels: ['10:00', '11:00', '12:00', '01:00', '02:00', '03:00'],
    datasets: [
      {
        label: 'Glycemis',
        fill: 0,
        lineTension: 0.1,
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
        data: [65, 50, 80, 75, 45, 90],
      },
    ],
  },
  options: { 

   },
});

console.log(graphicControler);

const data = localStorage.getItem('data');
console.log(data);

/**
 * Funcion que guarda los datos nuevos
 */

function setMeditions() {
  
}
