const timers = require('timers');

// Ejecutar una función después de 2 segundos
setTimeout(() => {
  console.log('Este mensaje se muestra después de 2 segundos.');
}, 2000);

// Ejecutar una función cada 1 segundo
const intervaloId = setInterval(() => {
  console.log('Este mensaje se muestra cada 1 segundo.');
}, 1000);

// Cancelar el intervalo después de 5 segundos
setTimeout(() => {
  clearInterval(intervaloId);
  console.log('Intervalo cancelado.');
}, 5000);
