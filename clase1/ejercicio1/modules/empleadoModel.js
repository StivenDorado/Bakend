const db = require ('../config/dbsql.js');

function traerEmpleado(callback) {
    const consulEmpleados = 'SELECT * FROM empleados';
    db.query(consulEmpleados, (err, result) => { //las funciones flechas no se pueden llamar dentro de una ruta, a no ser que se cambie la const por una function
        if (err) {
            console.log('Consulta no realizada');
        }
        else {
            callback(result);
        }
    }
)};

function traerEmpleadoAts(callback) {
    const consEmpleLA = `SELECT nombre FROM empleados WHERE nombre LIKE 'A%'`;
    db.query(consEmpleLA, (err, result) => {
        if (err) {
            console.log('Consulta no realizada');
        }
        else{
            callback(result);
        }
    }
)};

module.exports = {traerEmpleado, traerEmpleadoAts} // usa las putas llaves siempre
