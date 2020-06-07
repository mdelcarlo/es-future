# Classes

ES6 also introduced classes. A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword class, and the properties are assigned inside a constructor() method. This are primarily syntactical sugar over JavaScript's existing prototype-based inheritance. The class syntax does not introduce a new object-oriented inheritance size to JavaScript.

## Class Definition

Use the keyword class to create a class, and always add the constructor() method.

The constructor method is called each time the class object is initialized.

```js
class Screen {
  constructor(brand) {
    this.brandName = brand;
  }
}
myScreen = new Screen("Samsung");
```

## Constructor

The constructor method is special, it is where you initialize properties, it is called automatically when a class is initiated, and it has to have the exact name "constructor", in fact, if you do not have a constructor method, JavaScript will add an invisible and empty constructor method.

```js
class Screen {
  constructor(brand) {
    this.brandName = brand;
  }
  present(x) {
    return `${x}, I have a ${this.brandName} screen`;
  }
}

myScreen = new Screen("Samsung");
myScreen.present("Hello");
```

## Static Methods

Static methods are defined on the class itself, and not on the prototype.

That means you cannot call a static method on the object (myScreen), but on the class (Screen):

Create a static method and call it on the class:

```js
class Screen {
  constructor(brand) {
    this.brandName = brand;
  }
  static shutDown() {
    return "Shutting!!";
  }
}

myScreen = new Screen("Samsung");

//Call 'shutDown()' on the class Screen:
Screen.shutDown();

//and NOT on the 'myScreen' object:
//myScreen.shutDown();
//this would raise an error.
```

## Inheritance

To create a class inheritance, use the extends keyword.

A class created with a class inheritance inherits all the methods from another class:

Create a class named "CinemaScreen" which will inherit the methods from the "Screen" class:

```js
class Screen {
  constructor(brand) {
    this.brandName = brand;
  }
  present() {
    return `${x}, I have a ${this.brandName} screen`;
  }
}

class CinemaScreen extends Screen {
  constructor(brand, siz) {
    super(brand);
    this.size = siz;
  }
  show() {
    return `${this.present()} and it is ${this.size}`;
  }
}

myScreen = new CinemaScreen("Samsung", "Huge");
```

## Getters and Setters

Classes also allows you to use getters and setters.

It can be smart to use getters and setters for your properties, especially if you want to do something special with the value before returning them, or before you set them.

To add getters and setters in the class, use the get and set keywords.

Create a getter and a setter for the "brandName" property:

```js
class Screen {
  constructor(brand) {
    this.brandName = brand;
  }
  get bName() {
    return this.brandName;
  }
  set bName(x) {
    this.brandName = x;
  }
}

myScreen = new Screen("Samsung");
myScreen.bName;
```

## Hoisting

Unlike functions, and other JavaScript declarations, class declarations are not hoisted.

That means that you must declare a class before you can use it:

```js
//You cannot use the class yet.
//myScreen = new Screen("Samsung")
//This would raise an error.

class Screen {
  constructor(brand) {
    this.carname = brand;
  }
}

//Now you can use the class:
myScreen = new Screen("Samsung");
```
