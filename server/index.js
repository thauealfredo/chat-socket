
const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io')

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ['GET', 'POST']
    }
})


io.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);

    //Listens and logs the message to the console
    socket.on('message', (data) => {
      console.log('msg',data);
       io.emit('messageResponse', data);
    });
  
    socket.on('disconnect', () => {
      console.log('🔥: A user disconnected');
    });
});

server.listen(4000, () => console.log('Server is running on port 4000'));