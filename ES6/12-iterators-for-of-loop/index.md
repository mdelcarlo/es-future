# Destructuring

Destructuring simply implies breaking down a complex structure into simpler parts. In JavaScript, this complex structure is usually an object or an array. With the destructuring syntax, you can extract smaller fragments from arrays and objects. Destructuring syntax can be used for variable declaration or variable assignment. You can also handle nested structures by using nested destructuring syntax.

## Patterns for destructuring

The following two parties are involved in destructuring:

- _Destructuring source_: the data to be destructured. For example, the right-hand side of a destructuring assignment.
- _Destructuring target_: the pattern used for destructuring. For example, the left-hand side of a destructuring assignment.

The destructuring target is either one of three patterns:

- Assignment target. For example: x
  An assignment target is usually a variable. But in destructuring assignment, you have more options, as I’ll explain later.
- Array pattern. For example: [ «pattern», «pattern» ]
  The parts of an Array pattern are elements, the elements are again patterns (recursively).
- Object pattern. For example: { first: «pattern», last: «pattern» }
  The parts of an object pattern are properties, the property values are again patterns (recursively).

### Array destructuring

Imagine we have the data of a hero including several characteristics represented in an array and we need to display some information based on this data. We could end up with something that looks like this:

```js
const randianHero = {
  name: "John Galt",
  age: 40,
  characteristics: ["individulist", "generosity", "inteligence"]
};

function displayHero(hero) {
  console.log("Our hero is " + hero.name);
  console.log("The main characteristic is " + (hero.characteristics[0] || ""));
  console.log(
    "The secondary characteristic is " + (hero.characteristics[1] || "")
  );
  console.log(
    "The tertiary characteristic is " + (hero.characteristics[2] || "")
  );
}

displayHero(randianHero);

// Our hero is John Galt
// The main characteristic is individulist
// The secondary characteristic is generosity
// The tertiary characteristic is inteligence
```

With the above code snippet, we would achieve the desired result. However, there are a few caveats to writing code this way. One of which is — you can easily make a typo and instead of writing hero.characteristics for example, you write heros.characteristics which will result in an error. Again, if the characteristics object we are accessing is deeply nested in another object, the object access chain becomes longer which could mean more typing. These may not seem to be much an issue, but with destructuring we can do the same in a more expressive and compact syntax.

Using destructuring, the function from our previous snippet will look like this:

```js
function displayHero({
  name,
  characteristics: [main = "", secondary = "", tertiary = ""]
}) {
  console.log("Our hero is " + name);
  console.log("The main characteristic is " + main);
  console.log("The secondary characteristic is " + secondary);
  console.log("The tertiary characteristic is " + tertiary);
}
```

#### Array destructuring features

##### Elision

Elision lets you use the syntax of Array “holes” to skip elements during destructuring:

```js
const [, , x, y] = ["a", "b", "c", "d"]; // x = 'c'; y = 'd'
```

##### Rest operator (...)

The rest operator lets you extract the remaining elements of an iterable into an Array. If this operator is used inside an Array pattern, it must come last:

```js
const [x, ...y] = ["a", "b", "c"]; // x='a'; y=['b', 'c']
```

The spread operator has exactly the same syntax as the rest operator – three dots. But they are different: the former contributes data to Array literals and function calls, whereas the latter is used for destructuring and extracts data.

If the operator can’t find any elements, it matches its operand against the empty Array. That is, it never produces undefined or null. For example:

```js
const [x, y, ...z] = ["a"]; // x='a'; y=undefined; z=[]
```

The operand of the rest operator doesn’t have to be a variable, you can use patterns, too:

```js
const [x, ...[y, z]] = ["a", "b", "c"];
// x = 'a'; y = 'b'; z = 'c'
```

The rest operator triggers the following destructuring:

```js
[y, z] = ["b", "c"];
```

Array destructuring uses an iterator to get to the elements of a source. Therefore, you can Array-destructure any value that is iterable. Let’s look at examples of iterable values.

Strings are iterable:

```js
const [x, ...y] = "abc"; // x='a'; y=['b', 'c']
```

You can’t access the elements of a Set via indices, but you can do so via an iterator. Therefore, Array destructuring works for Sets:

const [x,y] = new Set(['a', 'b']); // x='a'; y='b’;
The Set iterator always returns elements in the order in which they were inserted, which is why the result of the previous destructuring is always the same.

### Object destructuring

JavaScript has operations for constructing data, one property at a time:

```js
const martian = {};
martian.name = "Marc";
martian.iq = 180;
```

The same syntax can be used to extract data. Again, one property at a time:

```js
const martianName = martian.name;
const martianIq = martian.iq;
```

Additionally, there is syntax to construct multiple properties at the same time, via an object literal:

```js
const martian = { name: "Marc", iq: 180 };
```

Before ES6, there was no corresponding mechanism for extracting data. That’s what destructuring is – it lets you extract multiple properties from an object via an object pattern. For example, on the left-hand side of an assignment:

```js
const { name: martianName, iq: martianIq } = martian;
console.log(martianName); // Marc
console.log(martianIq); // 180
```

#### Nested Destructuring:

Here in our main student object, we have a nested object and there are some scores. when we want to extract these key we need to follow nested Destructuring rules.

```js
const student = {
  firstname: "Jhon",
  lastname: "Snow",
  ielts_scores: {
    speaking: 8,
    listening: 7.5,
    writing: 8.5,
    reading: 7.0
  }
};

const {
  firstname,
  lastname,
  country,
  ielts_scores: { speaking, listening, writing, reading }
} = student;

console.log(`${firstname} ${lastname}`); //"Jhon Snow"
console.log(`
    speaking:${speaking},
    listening:${listening},
    writing:${writing},
    reading:${reading}
`);
//"speaking:8, listening:7.5, writing:8.5, reading:7"
```
