const db = require ('../config/db2');

// base de datos Gestor_Tareas
function selecDes1(callback) {
    const selecDes = `SELECT descripcion, prioridad FROM tareas WHERE prioridad = 'Baja'`;
    db.query(selecDes, (err, result) => {
        if (err) {
            console.log('Consulta no realizada gestor der tareas');
        }
        else{
            callback(result);
        }
    }
)};

module.exports = {selecDes1}