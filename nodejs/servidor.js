//console.log("Hola mundo desde node js")
const express = require('express');
const mongoose = require('mongoose');
const tareaSchema = require("./modelos/tarea.js");

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

router.get('/tarea', (req, res) =>{
    tareaSchema.find(function(err, datos){
        if(err){
            console.log("erroe leyendo tareas");
        }else{
            res.send(datos);
        }
    })
});

router.post('/tarea', (req, res) => {
    let nuevaTarea = new tareaSchema({
        idTarea: req.body.id,
        nombreTarea: req.body.nombre,
        detalleTarea: req.body.detalle
    });
     nuevaTarea.save(function(err, datos){
        if(err){
            console.log(err);
        }
        res.send("tareal almacenada correctamente")
     })
})

app.use(router);
app.listen(3000, () => {
    console.log('servidor corriendo en puerto 3000')
})