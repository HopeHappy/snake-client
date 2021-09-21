const { host, port, name } = require('./constants');

// TCP connection
const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({ host, port });

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write(`Name: ${name}`);
  });

  // Listen to data event and receive a message when being kicked out for idling
  conn.on('data', (data) => {
    console.log('Server says:', data);
  });

  conn.setEncoding("utf8");

  return conn;
};

module.exports = { connect };