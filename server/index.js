function startserver() {
    turtleserveron = false

    const WebSocket = require('ws')

    const server = new WebSocket.Server({ port: '8080' })
    

    console.log('listening on http://localhost:8080')

    server.on('connection', socket => { 
        console.log("User Connected")

        socket.on('message', message => {
            if (message == "id") {
                console.log("Haha silly turtle")
            }
            else {
                console.log("Message Recieved: ", message)
                
                server.broadcast = function broadcast(msg) {
                    server.clients.forEach(function each(client) {
                        client.send(msg);
                    });
                };

                server.broadcast(message)
                if (message == "inspect") {
                    socket.on('message', message => {
                        server.broadcast(message)
                    })
                }                
            }

            });
  });

 };
startserver()