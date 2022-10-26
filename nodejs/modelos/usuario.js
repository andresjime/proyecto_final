const mongoose = require('mongoose');
//entidades: rol y usuario

let usuarioSchema = new mongoose.Schema({
    usuarioId:Number,
    primer_nombre: String,
    segundo_nombre: String,
    primer_apellido: String,
    segundo_apellido: String,
    documento_id: String,
    rol_nombre: Number,
    correo: String,
    celular: String,
    clave: String
});
module.exports = mongoose.model('usuario', usuarioSchema, 'usuarios');