
// Hoisting

//You cannot use the class yet.
//myBook = new Book("Sports")
//This would raise an error.

class Book {
  constructor(cat) {
    this.category = cat;
  }
}

//Now you can use the class:
myBook = new Book("Sports");
