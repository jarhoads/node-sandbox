var http = require("http"),
    fs = require("fs");

var port = process.argv[2];
var file = process.argv[3];

// simple http server that uses 
// the port from the first argument
// and sends text specified in a file  
// from the second argument 

var listener = function(request, response){
    response.writeHead(200, { 'content-type': 'text/plain' });
    fs.createReadStream(file).pipe(response);
};

var server = http.createServer(listener);

server.listen(port);
