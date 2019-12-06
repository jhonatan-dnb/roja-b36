const ayudanteDeSanta = {
    ojos: 2, 
    patas: 4,
    nombre: "Ayudante De Santa",
    raza: "galgo",
    ladrar: function (){
        return "waaau"
    },
    comer: function(comida){
        if (comida === "croquetas"){
            return "wakala"
        } else {
            return "yomi yomi"
        }
    }
}



const snoopy = {
    ojos: 2, 
    patas: 4,
    nombre: "snoopy",
    raza: "beagle",
    ladrar: function (){
        return "waaau"
    },
    comer: function(comida){
        if (comida === "croquetas"){
            return "wakala"
        } else {
            return "yomi yomi"
        }
    }
}

console.log(ayudanteDeSanta.raza);
console.log(snoopy.raza);