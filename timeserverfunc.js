var net = require("net");

var port = process.argv[2];

// a more functional version of the datetime server
// I don't know if this is better, it's just something
// I wanted to try out

// a simple date and time server that 
// takes the port as the first argument
// and return the date in "YYYY-MM-DD hh:mm" format

var listener = function(socket){
    var date = new Date();
    
    var formatDate = function(part){
        return (part < 10) ? "0" + part : part;
    };
    
    var parts = [date.getMonth() + 1, 
                 date.getDate(), 
                 date.getHours(), 
                 date.getMinutes()];
    
    var formattedParts = parts.map(formatDate);
    
    var dateFormat = date.getFullYear() + "-" + 
                     formattedParts[0] + "-" + formattedParts[1] + " " +
                     formattedParts[2] + ":" + formattedParts[3] + "\n";
                     
    socket.end(dateFormat);
};

var server = net.createServer(listener);

server.listen(port);