const mongoose = require('mongoose')
const peliculasSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: true,
    },
    genero: {
        type: String,
        enum:['DRAMA', 'ACCION', 'COMEDIA']
    },
    director: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'director'
    },

});

const peliculas = mongoose.model('peliculas', peliculasSchema);
module.exports = peliculas;