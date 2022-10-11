const mongoose = require('mongoose');

let inscripcionSchema = new mongoose.Schema({
    estudianteId: Number,
    tipoDocumento: String,
    documentoId: String,
    nombres: String,
    apellidos: String,
    direccion: String,
    Correo: String,
    fijo: String,
    codigoIcfes: String,
    familiar: String,
    estrato: Number,
    tipoColegio: String
});

module.exports = mongoose.model('inscripcion', inscripcionSchema, 'inscripciones');