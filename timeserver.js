var net = require("net");

var port = process.argv[2];

// a simple date and time server that 
// takes the port as the first argument
// and return the date in "YYYY-MM-DD hh:mm" format

var listener = function(socket){
    var date = new Date();
    
    var formatDate = function(part){
        return (part < 10) ? "0" + part : part;
    };
    
    var month = formatDate(date.getMonth() + 1);
    var day = formatDate(date.getDate());
    var hours = formatDate(date.getHours());
    var minutes = formatDate(date.getMinutes());
    
    var dateFormat = date.getFullYear() + "-" + 
                     month + "-" + day + " " +
                     hours + ":" + minutes + "\n";
                     
    //var dateFormat = "2016-09-10 04:18\n";
    socket.end(dateFormat);
};

var server = net.createServer(listener);

server.listen(port);