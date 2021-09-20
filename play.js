const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });

  // Listen to data event and receive a message when being kicked out for idling
  conn.on('data', (data) => {
    console.log('Server says:', data);
  });

  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();