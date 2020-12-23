
// Implementing iterables

function* genBook() {
  console.log(`Book`);
  yield "Category";
  console.log(`Health`);
  yield "Title";
  console.log(`The Paleo Solution`);
  yield "Pages";
  console.log(`320`);
}

var generateHealthBook = genBook();

for (let word of generateHealthBook) {
  console.log(word); // Book
  // Category
  // Health
  // Title
  // The Paleo Solution
  // Pages
  // 320
}

console.log(generateHealthBook.next().value); // Book
// Category
console.log(generateHealthBook.next().value); // Health
// Title
console.log(generateHealthBook.next().value); // The Paleo Solution
// Pages
console.log(generateHealthBook.next().value); // 320

