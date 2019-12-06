/*Agrega un endpoint '/api/' que responda a 
una petición de tipo GET con un código de estado 200 
y el siguiente json: {'mensaje':'hola mundo'}*/

const express = require('express');
const app = express();


app.get('/api/', (request, response) => {
    response.status(200).send({mensaje: 'hola mundo' })
});


/*Agrega un endpoint '/api/suma' que responda a una 
petición de tipo GET con la suma de dos números que 
reciba mediante las querys num1 y num2. El servidor
debe responder con un código de estado 200 y un json 
como el siguiente: {'resultado': 7}*/



//app.get('/api/suma', (req, res) => {

//})

//app.get('/api/:suma', (req, res) => {
 //   console.log(req.params)
  //  res.status(200).send({message: `suma: ${req.params.suma}`})
//});








/*Agrega un endpoint '/api/usuario/' que responda a
una petición de tipo GET con el nombre que sea 
recibido a través de params. El servidor debe responder
con un código de estado 200 y un json como este:{'usuario': 'Edwin'}*/

app.get('/api/:usuario', (req, res) => {
    console.log(req.params)
    res.status(200).send({message:`usuario: ${req.params.usuario}`})
})






/*Agrega un endpoint '/api/swapi' que responda a una
petición de tipo GET con el personaje solicitado de 
https://swapi.co/
El cliente debe mandar el número de personaje mediante
params. La respuesta del servidor debe lucir algo así
{'personaje': {'name': 'Luke Skywalker',...,}}*/








app.listen(3000, () => {
    console.log('server on poort 3000')
});