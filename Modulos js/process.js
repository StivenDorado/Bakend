// Importar el módulo 'process'
const process = require('process');

// Imprimir el ID del proceso actual
console.log('ID del proceso:', process.pid);

// Imprimir la versión de Node.js
console.log('Versión de Node.js:', process.version);

// Imprimir los argumentos de la línea de comandos
// Por ejemplo, si ejecutas 'node miArchivo.js arg1 arg2', esto mostrará ['miArchivo.js', 'arg1', 'arg2']
console.log('Argumentos de la línea de comandos:', process.argv);

// Imprimir una variable de entorno específica
// Asegúrate de que la variable de entorno 'HOME' esté definida en tu sistema
console.log('Directorio home del usuario:', process.env.HOME || 'No disponible');
