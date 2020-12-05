const http = require('http');

 http.createServer((requerimos, respuesta)=>{
            respuesta.writeHead(200,{'content-tipe':'application/json'});

            let salida = {
                nombre:'Ruth',
                edad:51,
                url:requerimos.url
    
            };
            respuesta.write(JSON.stringify(salida));
            //respuesta.write('Hola mundo');
            respuesta.end();
    })
    .listen(8080);

    
 console.log('Escuchando el puerto 8080');