var fs = require("fs");
var path = require("path");

module.exports = function(dirname, extension, callback){
    
    fs.readdir(dirname, filterdir);

    function filterdir(err, list){
        if(err){ return callback(err); }
    
        var ext = function(name){ return path.extname(name) === '.' + extension; };
        
        var dir = list.filter(ext);
        
        callback(null, dir);
    
    }
}