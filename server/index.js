const express = require('express');
const sockectio = require('socket.io');
const http = require('http');
const cors = require('cors');

const PORT = process.env.PORT || 5000;
const router = require('./routes');
const { addUser, removeUser, getUser, getUserInRoom } = require('./user/users');

const app = express();
const server = http.createServer(app);
const io = sockectio(server);

app.use(cors());

io.on('connection', socket => {
  console.log('We have a new connection!!!');
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) return callback(error);

    socket.emit('message', {
      user: 'admin',
      text: `${user.name} wellcome to the room ${user.room}`
    });
    socket.broadcast
      .to(user.room)
      .emit('message', { user: 'admin', text: `${user.name} has Joined!` });

    socket.join(user.room);
    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message });

    callback();
  });

  socket.on('disconnect', () => {
    console.log('User had left');
  });
});

app.use(router);

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
