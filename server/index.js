const express = require('express');
const sockectio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 5000;
const router = require('./routes');

const app = express();
const server = http.createServer(app);
const io = sockectio(server);

io.on('connection', socket => {
  console.log('We have a new connection!!!');

  socket.on('disconnect', () => {
    console.log('User had left');
  });
});

app.use(router);

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
