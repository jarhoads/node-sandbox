var http = require("http");

var url = process.argv[2];

var respond = function(response){
  response.setEncoding('utf8');
  
  response.on('data', function(data){ console.log(data); });
  response.on('error', function(error){ console.log(error); });
  response.on('end', function() { });
  
};

http.get(url, respond)
    .on('error', console.error);