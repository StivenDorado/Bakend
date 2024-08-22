const mysql = require('mysql2');


const db2 = mysql.createConnection ({
    host: 'localhost',
    user: 'root', // nombre del usuario por defecto
    password: '3153504386_sg', // contraseña de la base de datos
    database: 'Gestor_Tareas'
});

db2.connect((e) => {
    if (e) {
        console.log('Error en la coneccion db Gestor_Tareas')
    }
    else {
        console.log('Conectado a la base de datos Gestor_Tareas')
    }
});

module.exports = db2; 

