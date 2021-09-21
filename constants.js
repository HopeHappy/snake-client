const host = 'localhost';
const port = 50541;
const name = process.argv[2] ? process.argv[2] : 'UNK';
const movement = {
  w: 'up',
  a: 'left',
  s: 'down',
  d: 'right'
};
const messages = {
  1: 'Hi',
  2: 'I cannot stop eating',
  3: 'Bye'
};

module.exports = { host, port, name, movement, messages };