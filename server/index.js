const express = require('express');
const sockectio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = sockectio(server);

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
