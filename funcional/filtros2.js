/*A partir del siguiente arreglo de animalitos: 
    Genera un nuevo arreglo en el que solo se encuentren
    los conejos del arreglo original. */


    const animalitos = [
        { nombre: "carlitos"  , especie: "conejo" },    // 0
        { nombre: "esteban"   , especie: "perro" },     // 1
        { nombre: "fabiruchis", especie: "tortuga" },   // 2
        { nombre: "anita"     , especie: "gato" },      // 3
        { nombre: "miranda"   , especie: "conejo" },    // 4
        { nombre: "lucas"     , especie: "conejo" },    // 5
        { nombre: "Horacia"   , especie: "tortuga" }    // 6
        ];

    const filtro = animalitos.filter((elemento, index, lista) => {
            return elemento.especie === "conejo"
        });
    console.log(filtro)
