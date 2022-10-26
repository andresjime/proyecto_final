const mongoose = require('mongoose');
//entidades: rol y usuario

let rolSchema = new mongoose.Schema({
    rolId:Number,
    rol_nombre: String,
    descripcion: String
});

module.exports = mongoose.model('rol', rolSchema, 'roles');