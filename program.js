var add = function(a, b){ return a + b; };

var argSum = process.argv.slice(2)
                         .map(Number)
                         .reduce(add, 0);

console.log(argSum);