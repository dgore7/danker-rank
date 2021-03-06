#!/usr/bin/env node

/**
 * Module dependencies.
 */

var app = require('../app');
var debug = require('debug')('dankerrank:server');
var http = require('http');

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '80');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

var CronJob = require('cron').CronJob;

var io = require('socket.io')(server);
var State = require('../state');
if (!global.state) global.state = new State();

console.log('bla');
var job1 = new CronJob('*/15 * * * * *', function () {
  io.emit('winner', global.state);
});

setTimeout(function () {
  var job2 = new CronJob('*/15 * * * * *', function () {
    global.state = new State(global.state);
    io.emit('new state',global.state);
  });
}, 5000);

io.on('connection', function (socket) {
  console.log(socket);
  socket.on('vote', function (data) {
    if (data.memeId == global.state.memeOne.memeId) {
      global.state.memeOne.score++;
    } else {
      global.state.memeTwo.score++;
    }
  });
});

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
