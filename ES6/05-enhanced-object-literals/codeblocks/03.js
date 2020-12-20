var name = "title";
var i = 0;
const book = {
  [name + ++i]: "Death on the Nile",
  [name + ++i]: "Curtain",
  [name + ++i]: "The Big Four",
};

console.log(book.title1); //"Death on the Nile"
console.log(book.title2); //"Curtain"
console.log(book.title3); //"The Big Four"