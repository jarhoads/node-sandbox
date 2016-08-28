// performs HTTP GET on a URL provided as first argument
// collects all data from the server
// writes to stdout the number of characters from the server
// and the complete string of the characters from the server

// this uses the bl module from npm

var http = require("http");
var bl = require("bl");

var url = process.argv[2];

var respond = function(response){
  response.setEncoding('utf8');
  
  var getData = function(err, data){
      if(err){ return console.log(err); }
      
      var serverData = data.toString();
      console.log(serverData.length);
      console.log(serverData);
  };
  
  response.pipe(bl(getData));
};

http.get(url, respond)
    .on('error', console.error);