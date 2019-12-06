const lista = [12, 343, 436, 436, 98, 9854]
const listaObj = [
    {nombre: 'lola', age: 20},
    {nombre: 'lolo', age: 21},
    {nombre: 'lula', age: 22},
    {nombre: 'lela', age: 23},
    {nombre: 'lala', age: 25},
]
/*for (let i = 0; i <= lista.length; i++){
    console.log(lista[i])
}*/

/*lista.map ((elento, index, lista) => {
    console.log(elento);
});*/

//listaObj.map((elemento, index, lista) => {
//    console.log(elemento.nombre);
//})

const listaNombre = listaObj.map((element) => {
    return element.nombre
})

console.log(listaNombre)