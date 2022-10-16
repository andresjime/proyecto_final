//console.log("Hola mundo desde node js")
const { request } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const inscripcionSchema = require("./modelos/inscripcion.js");

const app = express();
const router = express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());



//Conexion a base de datos
mongoose.connect("mongodb+srv://andresj:12345@clusterejemplog39.3axo90w.mongodb.net/InscripcionBD?retryWrites=true&w=majority");
//operaciones cruud
router.get('/', (req, res) =>{
    res.send("Mi primera api")
})

router.get('/inscripcion', (req, res) =>{
    inscripcionSchema.find(function(err, datos){
        if(err){
            console.log("error leyendo estudiante");
        }else{
            res.send(datos);
        }
    })
});

router.post('/inscripcion', (req, res) => {
    let nuevaInscripcion = new inscripcionSchema({
        estudianteId: req.body.estudianteId,
        tipoDocumento:req.body.tipoDocumento,
        documentoId: req.body.documentoId, 
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        direccion: req.body.direccion,
        correo: req.body.correo,
        fijo: req.body.fijo,
        codigoIcfes: req.body.codigoIcfes,
        familiar: req.body.familiar,
        estrato: req.body.estrato,
        tipoColegio: req.body.tipoColegio
    });
     nuevaInscripcion.save(function(err, datos){
        if(err){
            console.log(err);
        }
        res.send("Incripcion almacenada correctamente")
     })
})

router.put('/inscripcion', (req, res) =>{
    inscripcionSchema.updateOne({estudianteId:req.body.estudianteId},{
        $set: {
        tipoDocumento:req.body.tipoDocumento,
        documentoId: req.body.documentoId, 
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        direccion: req.body.direccion,
        correo: req.body.correo,
        fijo: req.body.fijo,
        codigoIcfes: req.body.codigoIcfes,
        familiar: req.body.familiar,
        estrato: req.body.estrato,
        tipoColegio: req.body.tipoColegio
        }
    },
    function(err,datos){
        if(err){
            res.json({
                resultado: 'no se pudo actualizar la incripcion',
                err
            });
        }else{
            res.send('La informacion fue actualizada correctamente')
        }
    })
})

// eliminar
router.delete('/inscripcion', (req, res) =>{
    inscripcionSchema.deleteOne({estudianteId:req.body.estudianteId},{
        $set: req.body
    },
    function(err,datos){
        if(err){
            res.json({
                resultado: 'no se pudo actualizar la incripcion',
                err
            });
        }else{
            res.send('La informacion fue eliminada correctamente')
        }
    })
})
app.use(router);
app.listen(3000, () => {
    console.log('servidor corriendo en puerto 3000')
})