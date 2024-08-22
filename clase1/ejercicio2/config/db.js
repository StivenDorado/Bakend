// en config se enlaza la base de datos para darle uso con js, se tiene que tener en cuenta parametros dados que son necesarios para que funcione correctamente.

const mysql = require ('mysql2'); // se importa la libreria de la basse de datos que usaremos

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // nombre del usuario por defecto
    password: '3153504386_sg', // contraseña de la base de datos
    database: 'App'  // nombre de la base de datos
});

db.connect((e) => {
    if (e) {
        console.log('Error en la coneccion db App')
    }
    else {
        console.log('Conectado a la base de datos App')
    }
});

module.exports = db; // exportar base de datos  

