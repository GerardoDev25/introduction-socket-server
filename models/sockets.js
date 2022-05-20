class Sockets {
  constructor(io) {
    this.io = io;
    this.socketsEvent();
  }

  socketsEvent() {
    this.io.on('connection', (socket) => {
      socket.on('massage-to-server', (data) => {
        console.log(data);

        this.io.emit('massage-from-server', data);
      });
    });
  }
}
export default Sockets;
