var fs = require("fs");

var path = process.argv[2];

fs.readFile(path, numLines);

function numLines(error, buffer){
    if (error) return console.error(error);
    
    var lines = buffer.toString().split('\n').length - 1;
    console.log(lines);
}