// Classes
class Book {
  constructor(cat) {
    this.category = cat;
  }
  present(x) {
    return `${x}, I have a ${this.category} book`;
  }
}

myBook = new Book("Sports");
myBook.present("Hello");
