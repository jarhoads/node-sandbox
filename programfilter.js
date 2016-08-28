var dirfilter = require("./filtermodule.js");

var file = process.argv[2];
var extension = process.argv[3];

function filterdir(err, list){
    if(err){ return console.error(err); }
    
    var print = function(s){ console.log(s); }
    list.map(print);
    
}

//console.log("extension : " + extension);

dirfilter(file, extension, filterdir);
