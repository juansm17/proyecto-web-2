const socket= require("socket.IO");


sockets.on('connection', function(client) {
    console.log("Client connected...");

    client.on('saludar', function(saludo) {
        client.broadcast.emit('saludar', saludo);
    });

    client.on('oanotificacion', function(accion) {
        switch(accion)
        {
            case 'ejecutar':
                client.broadcast.emit('saludar');
                break;
        }
    });
});