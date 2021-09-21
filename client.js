const { host, port, name } = require('./constants');

// TCP connection
const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({ host, port });
  // Listen for connect event and send name to server
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write(`Name: ${name}`);
  });

  // Listen for data event and receive messages from server
  conn.on('data', (data) => {
    console.log('Server says:', data);
  });

  conn.setEncoding("utf8");

  return conn;
};

module.exports = { connect };