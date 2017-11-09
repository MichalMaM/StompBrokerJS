var http = require("http");
var StompServer = require('./stompServer');

var args = process.argv;
var server = http.createServer();
var stompServer = new StompServer({
  server: server,
  useHttp: true,
  allowQueues: true,
  debug: console.log.bind(console)
});

server.listen(args.length > 3 ? args[3] : 61614, args.length > 2 ? args[2] : undefined);

/*
stompServer.subscribe("/**", function(msg, headers) {
  var topic = headers.destination;
  console.log("DIRECT API SUBSCRIBTION");
  console.log(topic, "->{" + (typeof msg) + "}", msg, headers);
  console.log("END DIRECT API SUBSCRIBTION");
  //setTimeout(function(){ stompServer.send('/init', {}, 'Ahoj') }, 1000);
});
*/
