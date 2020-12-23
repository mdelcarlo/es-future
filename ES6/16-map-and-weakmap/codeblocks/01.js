
var myMap = new Map();

myMap.set("author", "John Grisham");
myMap.set("book", "The inocent man");


console.log(myMap.has("author")); // true
console.log(myMap.has("pages")); // false

for(var key of myMap.keys()){
  console.log(key)
  // "author"
  // "book"
}
for(var key of  myMap.values(){
  console.log(value)
  // "John Grisham"
  // "The inocent man"
}
for ([key, value] of myMap.entries()) {
  console.log(key + " = " + value);
  // "author = John Grisham"
  // "book = The inocent man"
}
