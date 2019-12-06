const mongoose = require('mongoose')
const publicacionSchema = mongoose.Schema({
    nombre: String,
    text: {
        type: String,
    },
});

const Publicacion = mongoose.model('publicacion', publicacionSchema);
module.exports = Publicacion;