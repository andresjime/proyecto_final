const mongoose = require('mongoose');

let tareaSchema = new mongoose.Schema({
    estudianteId: Number,
    tipoDocumento: String,
    documentoId: String,
    Nombres: String,
    Apellidos: String,
    direccion: String,
    Correo: String,
    fijo: String,
    codigoIcfes: String,
    familiar: Boolean,
    estrato: Number,
    tipoColegio: String,
    idTarea: Number,
    nombreTarea: String,
    detalleTarea: String
});

module.exports = mongoose.model('inscripcion', tareaSchema, 'inscripciones');