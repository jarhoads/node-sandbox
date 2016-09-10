// performs HTTP GET on three URLs
// collects all data from the server
// writes to stdout the number of characters from the server
// and the complete string of the characters from the server

// this uses the bl module from npm

var http = require("http"),
    bl = require("bl");

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var urls = 
    [ 
        {"url": url1,"done": false,"data": ""}, 
        {"url": url2,"done": false,"data": ""}, 
        {"url": url3,"done": false,"data": ""}
    ];

var urlCount = 0;


// respond takes the index of the url and returns
// the callback to be used for the call to get
var respond = function(u) {
    
    // return the callback for get
    return function(response) {
        response.setEncoding('utf8');

        var getData = function(err, data) {
            if (err) {
                return console.log(err);
            }

            var print = function(serverData) {
                console.log(serverData);
            };

            var update = function(urlN, d) {

                urls[urlN].done = true;
                urls[urlN].data = d.toString();
                
                if (urls[0].done && urls[1].done && urls[2].done) {
                    print(urls[0].data);
                    print(urls[1].data);
                    print(urls[2].data);
                }
            };
            
            // update for data for url index u
            update(u, data);
        };
        
        response.pipe(bl(getData));
    };
};


for (var i = 0; i < urls.length; i++) {
    // pass the index so the callback knows which one to update
    http.get(urls[i].url, respond(i)); 
}
