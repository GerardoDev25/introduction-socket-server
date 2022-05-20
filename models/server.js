import express from 'express';
import http from 'http';
import { Server as ServerSocket } from 'socket.io';

import Sockets from './sockets.js';

class Server {
  constructor() {
    this.app = express();
    this.port = 8080;
    this.server = http.createServer(this.app);
    this.io = new ServerSocket(this.server);
  }

  socketConfigure() {
    new Sockets(this.io);
  }

  middlewares() {
    this.app.use(express.static('./public'));
  }

  listen() {
    this.server.listen(this.port, () => {
      console.log(`server up in 8080 ${this.port}`);
    });
  }

  execute() {
    this.middlewares();
    this.socketConfigure();
    this.listen();
  }
}

export default Server;
