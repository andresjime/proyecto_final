//console.log("Hola mundo desde node js")
const express = require('express');
const mongoose = require('mongoose');
const tareaSchema = require("./modelos/inscripcion.js");

const app = express();
const router = express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());



//Conexion a base de datos
mongoose.connect("mongodb+srv://andresj:12345@clusterejemplog39.3axo90w.mongodb.net/ActividadesBD?retryWrites=true&w=majority");
//operaciones cruud
router.get('/', (req, res) =>{
    res.send("Mi primera api")
})

router.get('/inscripcion', (req, res) =>{
    tareaSchema.find(function(err, datos){
        if(err){
            console.log("error leyendo estudiante");
        }else{
            res.send(datos);
        }
    })
});

router.post('/inscripcion', (req, res) => {
    let nuevaInscripcion = new tareaSchema({
        estudianteId: req.body.id,
        tipoDocumento:req.body.tipo,
        documentoId: req.body.documento, 
        nombres: req.body.nombre,
        apellidos: req.body.apellidos,
        direccion: req.body.direccion,
        correo: req.body.correo,
        fijo: req.body.fijo,
        codigoIcfes: req.body.icfes,
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

app.use(router);
app.listen(3000, () => {
    console.log('servidor corriendo en puerto 3000')
})