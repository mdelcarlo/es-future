# Private Class Variables

On ES2020 there’s a finished JavaScript proposal, almost in the standard, that provides language-level support for private properties and methods.

Privates should start with #. They are only accessible from inside the class.

```js
class LittleDog {
  #age = 40;

  #checkAge(value) {
    if (value < 0) throw new Error("Negative age");
    if (value > this.#age) throw new Error("Too old");
  }

}

let fido = new LittleDog();

// can't access privates from outside of the class
fido.#checkAge(); // Error
fido.#age = 40; // Error
```

On the language level, # is a special sign that the field is private. We can’t access it from outside or from inheriting classes.

Private fields do not conflict with public ones. We can have both private #age and public age fields at the same time.

For instance, let’s make age an accessor for #age:

```js
class LittleDog {

  #age = 0;

  get age() {
    return this.#age;
  }

  set age(value) {
    if (value < 0) throw new Error("Negative water");
    this.#age = value;
  }
}

let fido = new LittleDog();

fido.age = 100;
alert(fido.#age); // Error
```

Unlike protected ones, private fields are enforced by the language itself. That’s a good thing.
