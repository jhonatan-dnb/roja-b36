const myPenguin = {
    
    nombre: "Tux",
    origen: "Linux",

    puedevolar: function(){
        return false
    },

    graznar: function(){
        return "Kaww Kaww"
    },    
}

console.log("Hola soy un pinguino y mi nombre es ",myPenguin.nombre);
console.log(myPenguin.graznar());

class Penguin {
    constructor(saludar){
        this.saludar = saludar;
    }
    }
var penguin1 = new Penguin("Hola soy un pinguino y mi nombre es Tux");
var penguin1 = new Penguin("señor pingu")
console.log(penguin1);














let myPenguin = {
    nombre: "Tux",
    origen: "Linux",
    notas: "Mascota de Linux",
};
console.log(`Hola soy un pinguino y mi nombre es ${myPenguin.nombre}`);

myPenguin.puedevolar = false;
console.log(myPenguin);
myPenguin.graznar = function(){
    console.log("kaww kaww");
}
console.log(myPenguin.puedevolar());

myPenguin.saludar = function(){
    console.log(`hola soy un pinguino y mi nombre es ${this.nombre}`);
}
myPenguin.saludar ();

myPenguin.nombre = "xxxxxx"
myPenguin.saludar();


myPenguin.volar = function (){
    if(this.puedevolar) {
        console.log("puedo volar");
    } else {
        console.log("no puedo volar");
    }
}

 console.log(myPenguin.volar());

myPenguin.volar = true;
myPenguin.volar();



let receta = {
    "tutulo": "mole"
};
console.log(receta, titulo);







for(let i = 0; i < libros.length; i++){
    let libro = libros (i);
    let libroInfo = libro.titulo + "por" + libro.autor;
    if (libro.leido) {
        console.log(`ya has leido ${libroInfo}`);
    } else {
        console.log(`aun no has leido este libro ${libroInfo}`);
    }
}


//rfc concatenar datos


//class persona {
  //  constructor
//}


class cuenta{
    constructor (titula, cantidad){ 
        this.titular = titular
        this.cantidad = cantidad
    }
    ingresar(cantidad){
        if(this.cantidad + cantidad > 900){
            return "estas superando el limite de $900, operacion cancelada"
        } else {
            this.cantidad += cantidad;
            return `operacion exitosa tu saldo es de ${this.cantidad}`
        }
    }

    retirar(cantidad){
        if(this.cantidad - cantidad < 10) {
            return "no tienes fondos suficientes, operacion cancelada";
        } else {
            this.cantidad -= cantidad;

            return `has retirado $ ${cantidad}. tu saldo ahora es $ ${this.cantidad}`;
        }
    }
}

let cuenta = new Cuenta("jhonatan flores", 350);
console.log(cuenta.cantidad);

console.log(cuenta.ingresar(400));
console.log(cuenta.retirar(400));