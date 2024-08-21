const fs = require('fs');

// Leer un archivo de manera asíncrona
fs.readFile('ejemplo.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err);
    return;
  }
  console.log('Contenido del archivo:', data);
});

// Escribir en un archivo de manera asíncrona
fs.writeFile('ejemplo.txt', '¡Hola, Node.js!', (err) => {
  if (err) {
    console.error('Error al escribir en el archivo:', err);
    return;
  }
  console.log('Archivo guardado exitosamente.');
});
