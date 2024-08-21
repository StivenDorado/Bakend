const express = require('express');
const app = express();
const PORT = 5000
app.use(express.json());


const {traerEmpleado} = require('./modules/empleadoModel.js')

app.get('/empleados', (req, res) => {
    traerEmpleado((results) => {
        res.json(results);
    });
});





/* const {traerEmpleadoA} = require('./modules/empleadoModel.js')
app.get('/empleado2', (req, res) => {
    traerEmpleadoA((results) => {
        res.json(results);
    });
}); */

const {traerEmpleadoAts} = require('./modules/empleadoModel.js')

app.get('/empleados2', (req, res) => {
    traerEmpleadoAts((results) => {
        res.json(results);
    });
});


app.post('/empleado', (req, res) => {
    res.send('pobre, porque rica esta tu prima')
});


app.delete('/empleado', (req, res) => {
    res.send('Buenas, porque malos mis dias delete')
});


/* app.put('/empleado/:id', (req, res) => {
    let empleadoid = req.params.id;
    res.send(empleadoid);
}); */


app.put('/empleado/:id', (req, res) => {
    let dataE = req.params.id;
    res.json({
        "id": dataE,
        "nombre": "Juan",
    });
}); 

app.delete('/empleado/:id', (req, res) => {
    res.json({
        "id": req.params.id,
    });
});










app.listen(PORT, () => {
    console.log(`Servidor escuchando`)
});

