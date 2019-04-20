const express = require('express');
const path = require('path');
const http = require('http');
const socketio = require('socket.io')

const publicDir = path.join(__dirname, './public')

const app = express();
const server = http.createServer(app);

const io = socketio(server);
app.use(express.static(publicDir));

server.listen(3001, () => {
    console.log('server is running on port 3001')
});

io.on('connection', (socket) => {
    console.log('New WebSocket Connection')
 
    socket.on('sendMessage', (message) => {
        socket.broadcast.emit('message', message)

    })
});


