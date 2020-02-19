var webSocket = require("ws");

var server = webSocket.Server;

var socket = new server({port:3250});

socket.on("connection",(data) =>{
    
    console.log("connected");
  
    data.on("message",(message) =>{
       
          var info = JSON.parse(message);

        socket.clients.forEach((c)=>{
            if(data!=c)
            c.send(info.sender+":"+info.data);
        });
        
    });
    
});