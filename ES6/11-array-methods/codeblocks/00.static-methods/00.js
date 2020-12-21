var booksToLove = ["Think fast and slow", "Fountainhead", "Art of war"];
for (var index = 0; index < booksToLove.length; index++) {
  console.log(booksToLove[index]);
}

booksToLove.forEach(function (books) {
  console.log(books);
});

// for in loop

for (var index in booksToLove) {
  // don't actually do this
  console.log(booksToLove[index]);
}

// for of loop

for (var books of booksToLove) {
  console.log(books);
}

// uncomment to see a rin of alerts
//   for (var character of "my beatiful dog") {
//     alert(character);
//   }

// iterate a set
var uniqueBooks = new Set(books);
for (var book of uniqueBooks) {
  console.log(book);
}

// iterate its key and value
for (var [key, value] of books) {
  console.log(key + "'s book is: " + value);
}

// dump an object's own enumerable properties to the console
for (var key of Object.keys(someObject)) {
  console.log(key + ": " + someObject[key]);
}
