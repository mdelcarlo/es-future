// destructuring a function

function buildBook() {
  return {
    title: "Frankenstein",
    author: "Mary Shelley",
    year: 1931,
  };
}
var { author, title } = buildBook();

console.log(author); // Mary Shelley
console.log(title); // Frankenstein


// naming destructured values

var { author: bookAuthor, title: bookTitle } = buildBook();

console.log(bookAuthor); // Mary Shelley
console.log(bookTitle); // Frankenstein