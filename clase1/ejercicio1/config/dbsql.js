const mysql = require ('mysql2');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'CTPI2024*',
    database: 'Empleado'
});

db.connect((e) => {
    if (e) {
        console.log('Error en la coneccion')
    }
    else {
        console.log('Conectado a la base de datos')
    }
});

module.exports = db;