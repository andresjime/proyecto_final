//console.log("Hola mundo desde node js")
//import fetch from "node-fetch";
import fetch from 'cross-fetch';
const { request } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const rolSchema = require("./modelos/rol.js");
const usuarioSchema = require("./modelos/usuario.js");

const app = express();
const router = express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());


//Conexion a base de datos
mongoose.connect("mongodb+srv://andresj:12345@clusterejemplog39.3axo90w.mongodb.net/Propiedad_Horizontal_BD?retryWrites=true&w=majority");


//operaciones crud Rol
router.get('/', (req, res) =>{
    res.send("hola mundo")
})

router.get('/ingreso-rol', (req, res) =>{
    rolSchema.find(function(err, datos){
        if(err){
            console.log("error leyendo Rol");
        }else{
            res.send(datos);
        }
    })
});

router.post('/ingreso-rol', (req, res) => {
    let nuevoRol = new rolSchema({
        rolId: req.body.rolId,
        rol_nombre: req.body.nombreRol,
        descripcion: req.body.descripcion
    });
     nuevoRol.save(function(err, datos){
        if(err){
            console.log(err);
        }
        res.send("se guarado automaticamente")
     })
})

router.put('/ingreso-rol', (req, res) =>{
    rolSchema.updateOne({rolId:req.body.rolId},{
        $set: {
            rol_nombre: req.body.nombreRol,
            descripcion: req.body.descripcion
        }
    },
    function(err,datos){
        if(err){
            res.json({
                resultado: 'no se pudo actualizar el nombre del Rol',
                err
            });
        }else{
            res.send('La informacion fue actualizada correctamente')
        }
    })
})

// eliminar
router.delete('/ingreso-rol', (req, res) =>{
    rolSchema.deleteOne({rolId:req.body.rolId},{
        $set: req.body
    },
    function(err,datos){
        if(err){
            res.json({
                resultado: 'no se pudo eliminar el rol',
                err
            });
        }else{
            res.send('La informacion fue eliminada correctamente')
        }
    })
})


// CRUD para el usuario

router.get('/ingreso-usuario', (req, res) =>{
    usuarioSchema.find(function(err, datos){
        if(err){
            console.log("error leyendo usuario");
        }else{
            res.send(datos);
        }
    })
});

router.post('/ingreso-usuario', (req, res) => {
    let nuevoUsuario = new usuarioSchema({
        usuarioId:req.body.usuarioId,
        primer_nombre: req.body.primerNombre,
        segundo_nombre: req.body.segundoNombre,
        primer_apellido: req.body.primerApellido,
        segundo_apellido: req.body.SegundoApellido,
        documento_id: req.body.numeroDocumento,
        rol_nombre: req.body.idRol,
        correo: req.body.correo,
        celular: req.body.celular,
        clave: req.body.clave
    });
    nuevoUsuario.save(function(err, datos){
        if(err){
            console.log(err);
        }
        res.send("Ingreso de nuevo usuario almacenado correctamente")
     })
})

router.put('/ingreso-usuario', (req, res) =>{
    usuarioSchema.updateOne({usuarioId:req.body.usuarioId},{
        $set: {
            primer_nombre: req.body.primerNombre,
            segundo_nombre: req.body.segundoNombre,
            primer_apellido: req.body.primerApellido,
            segundo_apellido: req.body.SegundoApellido,
            documento_id: req.body.numeroDocumento,
            rol_nombre: req.body.idRol,
            correo: req.body.correo,
            celular: req.body.celular,
            clave: req.body.clave
        }
    },
    function(err,datos){
        if(err){
            res.json({
                resultado: 'no se pudo actualizar los datos del usuario',
                err
            });
        }else{
            res.send('La informacion fue actualizada correctamente')
        }
    })
})

// eliminar
router.delete('/ingreso-usuario', (req, res) =>{
    usuarioSchema.deleteOne({usuarioId:req.body.usuarioId},{
        $set: req.body
    },
    function(err,datos){
        if(err){
            res.json({
                resultado: 'no se pudo eliminar el usuario',
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


