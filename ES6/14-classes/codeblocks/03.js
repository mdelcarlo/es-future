
// Getters and Setters

class Book {
  constructor(cat) {
    this.category = cat;
  }
  get categoryName() {
    return this.category;
  }
  set categoryName(x) {
    this.category = x;
  }
}

myBook = new Book("Sports");
myBook.categoryName;
