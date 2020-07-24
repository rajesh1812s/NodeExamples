var fs = require('fs');
var calculator = require('./calculator.js');
var jsonParser = require('./json-services.js');


fs.writeFile('./newFile', 'Hello World', function(error){
  if(error){
    throw error;
  } else {
    console.log('success');
  }
});


// read file sample.html
fs.readFile('./newFile',
    // callback function that is called when reading file is done
    function(err, data) { 
        if (err) throw err;
        // data is a buffer containing file content
        console.log(data.toString('utf8'))
});
 
jsonParser.parseJson();

var a=10, b=5;
 
console.log("Addition : "+calculator.add(a,b));
console.log("Subtraction : "+calculator.subtract(a,b));
console.log("Multiplication : "+calculator.multiply(a,b));