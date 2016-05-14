'use strict';

const net = require('net');
const port = process.argv[2]|| 3000;
const ClientPool = require('./lib/client-pool');
const chatPool = new ClientPool();
const server = net.createServer();

server.on('connection',function(socket){
  chatPool.emit('register',socket);
});

server.on('error', function(err){
  console.error('SERVER ERROR: ', err.message);
});

server.listen(port, function(){
  console.log('server is running on port: ', port);
});
