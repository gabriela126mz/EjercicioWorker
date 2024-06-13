//enviar
postMessage('Soy el worker.js!');

//recibir mensaje
onmessage = function(e){
    console.log('Mensaje recibido por el main', e.data);
}

