
// Static Methods

class Book {
  constructor(cat) {
    this.category = cat;
  }
  static getTitle() {
    return "I don't have a title yet!!";
  }
}

myBook = new Book("Sports");

//Call 'getTitle()' on the class Book:
Book.getTitle();

//and NOT on the 'myBook' object:
//myBook.getTitle();
//this would raise an error.
