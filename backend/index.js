const express = require('express');

const app = express();
//configuracion para aceptar body en el objeto 'req
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (request, response) => {
    console.log('entree');
    response.send({mensaje: 'mi primera respuesta desde el backend'})
});

app.get('/saludo', (req, res) => {
    res.send
    ({mensaje: 'hola'})
});


http://localhost:3000/users/21 --> 21 es una variable
app.get('/users/:uid', (req, res) => {
    console.log(req.params)
    res.send({message: `usuario a buscar: ${req.params.uid}`})
});

app.get('/search', (req, res) => {
    console.log(req.query);
    res.send({message: 'busqueda'})
});

app.post('/users', (req, res) => {
    console.log(req.body);
    res.status(201).send({ ...req.body, id:1 })
});

app.listen(3000, () => {
    console.log('server on poort 3000')
});