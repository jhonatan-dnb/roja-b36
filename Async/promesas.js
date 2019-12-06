// definicion de la promesa ( se retorna)

function miPrimerPromesa (numero) {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            if (numero === 5){
                resolve("se cumplio la promesa")
            } else {
                reject("no se cumplio la promesa")
            }
        },3000)
    });
}

/*ejecucion de la funcion y se recibe la respuesta
then ---> resolve()
catch ---> rejec ()
resolve y reject reciben un parametro y lo recibes en el callback de 
then (callback(parametrox)) & catch(callback(parametrox))*/

miPrimerPromesa(6)
    .then((resolve) => {
        console.log(resolve);
    })
    .catch((reject) => {
        console.log(reject)
    })