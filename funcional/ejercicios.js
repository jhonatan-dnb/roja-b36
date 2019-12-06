//Hacer un arreglo de 4 cantidades de tiempo en minutos [120, 80, 200, 100], 
//y agarrar sólo las que son mayores a dos horas (hacer la comparación en horas)

const lista = [
    {minutos: 120}, 
    {minutos: 80}, 
    {minutos: 200}, 
    {minutos: 100},
];
const filtro = lista.filter((elemento) => {
    return elemento.minutos > 120
});
console.log(filtro)