
// Inheritance

class Book {
  constructor(cat) {
    this.category = cat;
  }
  present() {
    return `${x}, I have a ${this.category} book`;
  }
}

class Novel extends Book {
  constructor(cat, character) {
    super(cat);
    this.mainCharacter = character;
  }
  show() {
    return `${this.present()} and it is ${this.mainCharacter}`;
  }
}

myBook = new Novel("Classic", "Edmundo Dantès");
