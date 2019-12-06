const { mascota } = require("./herencia")

class perro extends mascota {
    constructor (raza, color, nombre) {
        super(4, nombre)
        console.log("se creo el perro");
        this.raza = raza;
        this.color = color;
    }
    getraza(){
        return this.raza;
    }
}

module.exports = {
    perro
}
