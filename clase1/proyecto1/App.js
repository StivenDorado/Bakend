// llamar a express
const express = require ('express');
const app = express();
// Puerto de servidor
const PORT = 2000

// creacion de rutas usando los metodos
app.get('/', (req, res) =>{
    res.send('Metodo GET')
})

// puedes tener 2 metodos get en una misma ruta ('/')
app.get('/empleado', (req, res) =>{
    res.send('Metodo GET Empleado')
})


app.post('/', (req, res) => {
    res.send('Metodo POST')
})

app.put('/', (req, res) => {
    res.send('Metodo PUT')
})

app.delete('/', ( req, res) => {
    res.send('Metodo DELETE')
})

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})