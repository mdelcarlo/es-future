# Classes

ES6 also introduced classes. A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword class, and the properties are assigned inside a constructor() method. This are primarily syntactical sugar over JavaScript's existing prototype-based inheritance. The class syntax does not introduce a new object-oriented inheritance mainCharacter to JavaScript.

## Class Definition

Use the keyword class to create a class, and always add the constructor() method.

The constructor method is called each time the class object is initialized.

```js
class Book {
  constructor(cat) {
    this.category = cat;
  }
}
myBook = new Book("Sports");
```

## Constructor

The constructor method is special, it is where you initialize properties, it is called automatically when a class is initiated, and it has to have the exact name "constructor", in fact, if you do not have a constructor method, JavaScript will add an invisible and empty constructor method.

```js
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
```

## Static Methods

Static methods are defined on the class itself, and not on the prototype.

That means you cannot call a static method on the object (myBook), but on the class (Book):

Create a static method and call it on the class:

```js
class Book {
  constructor(cat) {
    this.category = cat;
  }
  static shutDown() {
    return "Shutting!!";
  }
}

myBook = new Book("Sports");

//Call 'shutDown()' on the class Book:
Book.shutDown();

//and NOT on the 'myBook' object:
//myBook.shutDown();
//this would raise an error.
```

## Inheritance

To create a class inheritance, use the extends keyword.

A class created with a class inheritance inherits all the methods from another class:

Create a class named "Novel" which will inherit the methods from the "Book" class:

```js
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
```

## Getters and Setters

Classes also allows you to use getters and setters.

It can be smart to use getters and setters for your properties, especially if you want to do something special with the value before returning them, or before you set them.

To add getters and setters in the class, use the get and set keywords.

Create a getter and a setter for the "category" property:

```js
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
```

## Hoisting

Unlike functions, and other JavaScript declarations, class declarations are not hoisted.

That means that you must declare a class before you can use it:

```js
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
```
