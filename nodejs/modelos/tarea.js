const mongoose = require('mongoose');

let tareaSchema = new mongoose.Schema({
    tipoDocumento: String,
    documentoId: Number,
    Nombres: String,
    Apellidos: String,
    direccion: String,
    Correo: String,
    fijo: String,
    codigoIcfes: String,
    familiar: Boolean,
    estratro: Number,
    colegio: String,
    idTarea: Number,
    nombreTarea: String,
    detalleTarea: String
});

module.exports = mongoose.model('tarea', tareaSchema, 'Tareas');