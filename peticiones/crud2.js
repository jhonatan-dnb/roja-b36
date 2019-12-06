/*Crear usuario (POST) --> 201
Modificar Usuario por id (PATCH) --> 200
Obtener Usuario por id (GET) --> 200
Borrar Usuario por id (DELTE) --> 204
Obtener Usuario port id (GET) --> 404*/

const request = require("request");
const URL = "https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/"

function createAuthor(nombre, apellidos, nac, bio, gender, age){
    return new Promise ((resolve, reject) => {
        const jsonSend = {
            name: nombre,
            last_name: apellidos,
            nacionalidad: nac,
            biography:bio,
            gender:gender,
            age:age,
        };
        request.post(URL, {form: jsonSend}, (err, res, body) =>{
            console.log(res.statusCode);
            if (res.statusCode === 201){
            resolve(JSON.parse(body));
            }
            else {
                reject('error');
            }
            }
        )}
    )}

createAuthor('cinta roja 36', 'nada', 'MX', 'lorem', 'M', '25')
    .then((result) => {
    console.log('creado', result);
    //return updateNameAuthorById(result.id, 'once')
        })
    .catch((err) => {
    console.log(err);
        })