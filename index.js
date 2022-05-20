import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', () => {});

server.listen(8080, () => {
  console.log('server up in 8080 port');
});
