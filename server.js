#!/usr/bin/env nodejs
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello PCAP Testing\n');
}).listen(3000, 'localhost');
console.log('nodejs running locally on localhost:3000');

