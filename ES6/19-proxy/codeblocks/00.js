// Proxy

const books = {
  book1: "Sapiens",
  book2: "Homo Deus"
};

const handler1 = {};

const proxy1 = new Proxy(books, handler1);
console.log(proxy1.book1); // Sapiens
console.log(proxy1.book2); // Homo Deus
