# Enhanced Object literals

Object literals title it easy to quickly create objects with properties inside the curly braces. To create an object, we simply notate a list of key: value pairs delimited by comma.

In ES6, object literals are extended to support setting the prototype at construction, shorthand for foo: foo assignments, defining methods, making super calls, and computing property names with expressions.

Three ways that ES6 makes object literal declaration easier:

- It provides a shorthand syntax for initializing properties from variables.
- It provides a shorthand syntax for defining function methods.
- It enables the ability to have computed property names in an object literal definition.

### Shorthand for Initializing Properties

We will use an example to explain this. Let's create a getBook function. We are using a function here to title it easier for to pass variables. We are basically still creating an object. Prior to ES6, if we want to initialize a property in an object using object literals, we will do the following:

    ```js
    //ES5
    function getBook(title, author, year) {
        return {
            title: title,
            author: author,
            year: year
        }
    }

    getBook("Death on the Nile", "Agatha Christie", "1937");// {title: "Death on the Nile", author: "Agatha Christie", year: "1937"}
    ```

So in the above function, the object that is being returned is created using object literals. The properties of this object are created by assigning the value of the parameters passed to their corresponding keys. Did you notice the repetition there? I did too. ES6 removes all of that repetition. Here's how we will write our getBook function;

    ```js
    function getBook(title, author, year) {
        return {
            title,
            author,
            year
        }
    }

    getBook("Death on the Nile", "Agatha Christie", "1937"); // {title: "Death on the Nile", author: "Agatha Christie", year: "1937"}
    ```

Much more easier to write and read. What happens here is that it checks if the property key has a corresponding variable name and assigns the value of that variable to the property. Note that if no variable has the same name as the property key defined, we'll get an error.

### Shorthand for writing Methods

Prior to ES6, the syntax for writing methods in objects is this:

```js
//ES5
function getBook(title, author, year) {
  return {
    sayAuthor: function() {
      return author;
    }
  };
}

getBook("Death on the Nile", "Agatha Christie", "1937").sayAuthor(); //"Agatha Christie"
```

With ES6, we don't have to write much code just to get a method to work.

```js
//ES5
function getBook(title, author, year) {
  return {
    sayAuthor() {
      return author;
    }
  };
}

getBook("Death on the Nile", "Agatha Christie", "1937").sayAuthor(); //"Agatha Christie"
```

Did you notice the difference? The : and function are no longer necessary to define a method. So ES6 makes the syntax for creating methods concise.

### Computed Properties and Object Literals

The bracket notation allows us to access a property using expressions.
Computed property names allow us to write an expression wrapped in square brackets instead of the regular property name.
Whatever the expression evaluates to will become the property name. This means that we can do this:

```js
var name = "title";
const book = {
  [name]: "Death on the Nile"
};

console.log(book.title); //"Death on the Nile"
```

The value of name was computed to title and this was used as the name of the property. This is why we can access the property using book.title;

Similarly, this will work.

```js
var name = "title";
var i = 0;
const book = {
  [name + ++i]: "Death on the Nile",
  [name + ++i]: "Curtain",
  [name + ++i]: "The Big Four"
};

console.log(book.title1); //"Death on the Nile"
console.log(book.title2); //"Curtain"
console.log(book.title3); //"The Big Four"
```

In this case, the value of both name and i are computed and concatenated to get the name of the property.
