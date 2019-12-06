const mongoose = require('mongoose')
const usuarioSchema = mongoose.Schema({
    nombre: String,
    edad: Number,
    bio: {
        type: String,
        default: 'no-bio'
    },
    nacionalidad:{
        type: String,
        enum: ['MX', 'USA', 'BR']
    },
    sexo:{
        type: String,
        enum: ['F', 'M', 'SN']
    },
    trabajo:{
        type: [String],
    },
    publicacion:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'publicacion'
    },

});

const Usuario = mongoose.model('usuario', usuarioSchema);
module.exports = Usuario;