const express = require('express');
const app = express();
const PORT = 3000
app.use(express.json());




const {traerUsers1} = require('./modules/modules.js');
app.get('/app', (req, res) => {
    traerUsers1((results) => {
        res.json(results);
    });
});


const {traerUsersPasw2} = require('./modules/modules.js');
app.post('/app', (req, res) => {
    traerUsersPasw2((results) => {
        res.json(results);
    });
});

const {actualizar1} = require('./modules/modules.js');
app.delete('/app', (req, res) => {
    actualizar1((results) => {
        res.json(results);
    });
});

// db Gestor_Tareas
const {selecDes1} = require('./modules/modules2.js');
app.patch('/app1', (req, res) => {
    selecDes1((results) => {
        res.json(results);
    });
});



// conectar a Localhost
app.listen(PORT, () => {
    console.log(`Servidor escuchando`)
});

