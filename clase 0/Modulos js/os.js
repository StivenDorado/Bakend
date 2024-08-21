const os = require('os');

// Imprimir el sistema operativo
console.log('Sistema operativo:', os.platform());

// Imprimir la cantidad total de memoria
console.log('Memoria total (en bytes):', os.totalmem());

// Imprimir la cantidad de memoria libre
console.log('Memoria libre (en bytes):', os.freemem());

// Imprimir información sobre los CPUs
console.log('Información sobre los CPUs:', os.cpus());
