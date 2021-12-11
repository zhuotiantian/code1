const net = require("net");

const response = `
  HTTP/1.1 200 OK
  Date: Tue, 30 Jun 2020 01:00:00 GMT
  Content-Type: text/plain
  Connection: Closed
 
  HELLO WORLD
`;

const server = net.createServer((socket) => {
  socket.end(response);
});

server.listen(80, () => {});
