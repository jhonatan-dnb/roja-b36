const request = require ("request");

function getPeopleById (idPersonaje){

 return new Promise((resolve, reject) => {

    request.get ('https://swapi.co/api/people/${idPersonaje}' , (error, response, body) => {
        if (error) return console.log("error");
        if (response.statusCode === 200) {
            const people = JSON.parse (body)
            resolve(people)
        } else {
            reject("error buscando el personaje")
        }
    });

 });

}

function getMovieByUr (url){
    request.get (url, (error, response, body) => {
        if (error) return console.log("error");
        if (response.statusCode === 200) {
            resolve(JSON.parse(body))
        } else {
            reject("error en la peticion de peliculas")
        }
    });
}

getPeopleById(1)
    .then((respuesta) => getMovieByUr(respuesta.films[0]))
    .then((result) => console.log(result.title))
    .catch((err) => console.log(err))
