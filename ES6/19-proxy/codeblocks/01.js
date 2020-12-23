
const books = {
  book1: "Sapiens",
  book2: "Homo Deus"
};

const handler2 = {
  get: function(books, prop, receiver) {
    return "21 lessons for 21 century";
  }
};

const proxy2 = new Proxy(books, handler2);

console.log(proxy2.book1); // 21 lessons for 21 century
console.log(proxy2.book2); // 21 lessons for 21 century
