var arduino = require('../');

var board = new arduino.Board({
  debug: true
});

var led = new arduino.Led({
  board: board,
  pin: 13
});

led.blink();
