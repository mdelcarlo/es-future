// For of loop

const booksToLove = ["Think fast and slow", "Fountainhead", "Art of war"];

for (var result in booksToLove) {
  console.log(result);
}

console.log("-----------------");

for (var result in booksToLove) {
  console.log(result);
}

// for of loop with strings

const name = "John";
for (var letter in name) {
  console.log(letter);
}


// for of on MAP entries

var myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

for (const [key, value] of myMap.entries()) {
  console.log(key, value);
}
