class mascota {
    constructor (patas, nombre) {
        this.patas = patas;
        this.cerebro = true;
        this.nombre = nombre;
        console.log("se creo la mascota");
    }
    getNombre() {
        return this.nombre;
    }
}

module.exports = {
    mascota
}