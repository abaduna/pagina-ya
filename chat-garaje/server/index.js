const http = require("http");

const server = http.createServer();

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection",(socket)=>{
    console.log(`se a conectoado un cliente`);
    socket.broadcast.emit("chat_messageBack",{usuario:"info",messaje:"se a conectado un nuevo usuario"})
    socket.on("chat_message",(data)=>{
        io.emit("chat_messageBack",data)
    })
})

server.listen(3001);
