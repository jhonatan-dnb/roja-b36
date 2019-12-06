class Perro{
    constructor(color, nombre, patas){
        this.color = color;
        this.nombre = nombre;
        this.patas = patas;
    }

    ladrar(){
        return "wauuu"
    }
    getNombre(){
        return `El perro se llama: ${this.nombre}`
}
}
const perro1 = new Perro("cafe, ayudante de santa, 4")
const perro2 = new Perro("blanco, snoopy, 4")
console.log(perro1);
console.log(perro2);