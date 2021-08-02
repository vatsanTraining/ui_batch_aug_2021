var calc = require("./Calculator");
var Item = require("./Product");

console.log(calc(20,40));

let tv = new Item(101,"sony tv");

console.log(tv.toString());
