# Enhanced Object literals

Object literals make it easy to quickly create objects with properties inside the curly braces. To create an object, we simply notate a list of key: value pairs delimited by comma.

In ES6, object literals are extended to support setting the prototype at construction, shorthand for foo: foo assignments, defining methods, making super calls, and computing property names with expressions.

Three ways that ES6 makes object literal declaration easier:

- It provides a shorthand syntax for initializing properties from variables.
- It provides a shorthand syntax for defining function methods.
- It enables the ability to have computed property names in an object literal definition.

### Shorthand for Initializing Properties

We will use an example to explain this. Let's create a getLaptop function. We are using a function here to make it easier for to pass variables. We are basically still creating an object. Prior to ES6, if we want to initialize a property in an object using object literals, we will do the following:

    ```js
    //ES5
    function getLaptop(make, model, year) {
        return {
            make: make,
            model: model,
            year: year
        }
    }

    getLaptop("Apple", "MacBook", "2015");// {make: "Apple", model: "MacBook", year: "2015"}
    ```

So in the above function, the object that is being returned is created using object literals. The properties of this object are created by assigning the value of the parameters passed to their corresponding keys. Did you notice the repetition there? I did too. ES6 removes all of that repetition. Here's how we will write our getLaptop function;

    ```js
    function getLaptop(make, model, year) {
        return {
            make,
            model,
            year
        }
    }

    getLaptop("Apple", "MacBook", "2015"); // {make: "Apple", model: "MacBook", year: "2015"}
    ```

Much more easier to write and read. What happens here is that it checks if the property key has a corresponding variable name and assigns the value of that variable to the property. Note that if no variable has the same name as the property key defined, we'll get an error.

### Shorthand for writing Methods

Prior to ES6, the syntax for writing methods in objects is this:

```js
//ES5
function getLaptop(make, model, year) {
  return {
    sayModel: function() {
      return model;
    }
  };
}

getLaptop("Apple", "MacBook", "2015").sayModel(); //"MacBook"
```

With ES6, we don't have to write much code just to get a method to work.

```js
//ES5
function getLaptop(make, model, year) {
  return {
    sayModel() {
      return model;
    }
  };
}

getLaptop("Apple", "MacBook", "2015").sayModel(); //"MacBook"
```

Did you notice the difference? The : and function are no longer necessary to define a method. So ES6 makes the syntax for creating methods concise.

### Computed Properties and Object Literals

The bracket notation allows us to access a property using expressions.
Computed property names allow us to write an expression wrapped in square brackets instead of the regular property name.
Whatever the expression evaluates to will become the property name. This means that we can do this:

```js
var name = "make";
const laptop = {
  [name]: "Apple"
};

console.log(laptop.make); //"Apple"
```

The value of name was computed to make and this was used as the name of the property. This is why we can access the property using laptop.make;

Similarly, this will work.

```js
var name = "make";
var i = 0;
const laptop = {
  [name + ++i]: "Apple",
  [name + ++i]: "Dell",
  [name + ++i]: "HP"
};

console.log(laptop.make1); //"Apple"
console.log(laptop.make2); //"Dell"
console.log(laptop.make3); //"HP"
```

In this case, the value of both name and i are computed and concatenated to get the name of the property.
