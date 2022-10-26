import fetch from "node-fetch";

let data_correo={
    correo: 'acamilojimenez@gmail.com',
    asunto: 'otra prueba desde node js',
    mensaje: "otra prueba desde node  <img src='https://t2.ea.ltmcdn.com/es/posts/4/9/9/curiosidades_del_tigre_25994_orig.jpg'/>"
}

let url_correo = `http://localhost:5000/enviar-correo?correo=${data_correo.correo}&asunto=${data_correo.asunto}&mensaje=${data_correo.mensaje}`
fetch (url_correo)
    .then((response)=>{
        return "mensaje enviado";
    })
    .then(data => console.log(`respuesta del mensaje: ${data}` ))