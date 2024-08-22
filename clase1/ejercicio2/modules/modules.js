// importamos la base de datos del proyecto, para darle funcionalidad con js haciendo las consultas por medio de js
const db = require ('../config/db');


//Obtener todos los usuarios:
function traerUsers1(callback) {
    const traerUsers = 'SELECT * FROM Users';
    db.query(traerUsers, (err, result) => { //las funciones flechas no se pueden llamar dentro de una ruta, a no ser que se cambie la const por una function
        if (err) {
            console.log('Consulta no realizada');
        }
        else {
            callback(result);
        }
    }
)};


//Obtener los usuarios que tienen la contraseña registrada en julio de 2024:
function traerUsersPasw2(callback) {
    const traerUsersPasw = `SELECT * FROM Users WHERE contraseña BETWEEN '2024-07-01' AND '2024-07-31'`;
    db.query(traerUsersPasw, (err, result) => {
        if (err) {
            console.log('Consulta no realizada');
        }
        else{
            callback(result);
        }
    }
)};

// Actualizar el nombre del usuario con id = 4 a 'Ana Gutiérrez'   ``
/* function actualizar1(callback) {
    const actualizar = `UPDATE Users SET nombre = 'Ana Gutiérrez' WHERE id = 4;`;
    db.query(actualizar, (err, result) => {
        if (err) {
            console.log('Consulta no realizada');
        }
        else {
            callback(result);
        }
    }
)}; */






// Exportar Fuhnciones
module.exports = {traerUsers1, traerUsersPasw2} // usa las putas llaves siempre, exportar las funciones con las consultas
