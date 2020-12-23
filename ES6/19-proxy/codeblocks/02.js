const books = {
    book1: "Sapiens",
    book2: "Homo Deus"
  };
  
  const handler3 = {
    get: function(books, prop, receiver) {
      if (prop === "book2") {
        return "21 lessons for 21 century";
      }
      return Reflect.get(...arguments);
    }
  };
  
  const proxy3 = new Proxy(books, handler3);
  
  console.log(proxy3.book1);
  console.log(proxy3.book2);
  