// json data
var jsonData = '{"persons":[{"name":"John","city":"New York"},{"name":"Phil","city":"Ohio"}]}';
 
// parse json
module.exports ={
  parseJson : function (){
    var jsonParsed = JSON.parse(jsonData);
    console.log(jsonParsed.persons);
  }
}