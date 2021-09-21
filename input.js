const { movement, messages } = require('./constants');

let connection;

const setupInput = function(conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  const handleUserInput = function() {

    stdin.on('data', (key) => {
      if (key === '\u0003') {
        process.exit();
      }
      // Move commands
      connection.write(`Move: ${movement[key]}`);
      // Send canned messages to the server
      if (messages[key]) {
        const message = `Say: ${messages[key]}`;
        connection.write(message);
      }
      
    });

  };

  handleUserInput();
  return stdin;
};

module.exports = { setupInput };