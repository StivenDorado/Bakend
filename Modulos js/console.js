const console = require('console');

// Imprimir un mensaje simple
console.log('¡Hola, mundo!');

// Imprimir un mensaje de advertencia
console.warn('Este es un mensaje de advertencia.');

// Imprimir un mensaje de error
console.error('Este es un mensaje de error.');

// Imprimir datos en formato de tabla
const datos = [
  { nombre: 'Juan', edad: 25 },
  { nombre: 'Ana', edad: 30 }
];
console.table(datos);
