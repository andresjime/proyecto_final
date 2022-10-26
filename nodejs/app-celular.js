import fetch from "node-fetch";

let data = {
    telefono: '3128284806',
    mensaje:'hola, estamos probando con codigo limpio'
}

let url_service_sms = `http://localhost:5000/sms?telefono=${data.telefono}&mensaje=${data.mensaje}`;
fetch (url_service_sms)
    .then((response) => {
        return 'El mensaje SMS se ha entregado con exito';
    })
    .then(data => console.log(`respuestas del servidor: ${data}`));