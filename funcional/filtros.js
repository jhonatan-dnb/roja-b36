const lista = [12, 343, 436, 436, 98, 9854]
const listaObj = [
    {nombre: 'lola', age: 20},
    {nombre: 'lolo', age: 21},
    {nombre: 'lula', age: 30},
    {nombre: 'lela', age: 23},
    {nombre: 'lala', age: 25},]

    /*const filtro =[]
    for(let i = 0; i < listaObj.length; i++){
        if (listaObj[i].age > 22){
            filtro.push(listaObj[i])
        }
    }
    console.log(filtro);*/

    const filtro = listaObj.filter((elemento, index, lista) => {
        return elemento.age > 22
    });
console.log(filtro)