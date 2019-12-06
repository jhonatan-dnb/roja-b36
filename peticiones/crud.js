const request = require("request");
const URL = "https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/"

function createAuthor(nombre, apellidos, nac, bio, gender, age){
const jsonSend = {
    name: nombre,
    last_name: apellidos,
    nacionalidad: nac,
    biography:bio,
    gender:gender,
    age:age,
};

request.post(URL, {form: jsonSend}, (err, res, body) => {
    console.log(res.statusCode);
    console.log(JSON.parse(body));
});
}

function updateNameAuthorById(idAuthor, name) {
    const json = {name}
    request.patch(`${URL}${idAuthor}/`, {form: json},
    (err, res, body) => {
        console.log(res.statusCode);
        console.log(JSON.parse(body));
    });
}


function getAuthorById(idAuthor){
    request.get(URL, (err, res, body) =>{
    console.log(res.statusCode);
    console.log(JSON.parse(body));
    });
}

function getALLAuthors () {
    request.get(URL, (err, res, body) =>{
    console.log(res.statusCode);
    console.log(JSON.parse(body));
    })
}


function deleteAuthorById(idAuthor){
    request.delete(`${URL}${idAuthor}/`, (err, res, body) => {
    console.log(res.statusCode); 
    
})
}


//createAuthor('cinta roja 36', 'nada', 'MX', 'lorem', 'M', '25')
//updateNameAuthorById('3603', 'nuevo nombre')
//getAuthorById('3581')
deleteAuthorById('3645')