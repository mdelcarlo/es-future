
var myObj = {};
var myFunc = function() {};

myMap.set(myObj, "John Grisham");
myMap.set(myFunc, "The inocent man");
// "[object Object] = John Grisham"
// "function myFunc() {} = The inocent man"

myMap.set("string", 2);
// "string = 2"

