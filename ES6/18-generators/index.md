# Generators

You can think of generators as processes (pieces of code) that you can pause and resume

```JS
function* genFunc() {
    console.log('First chapter');
    yield;
    console.log('Second chapter');
}
```

Note the new syntax: `function*` is a new “keyword” for generator functions (there are also generator methods). yield is an operator with which a generator can pause itself. Additionally, generators can also receive input and send output via yield.

When you call a generator function genFunc(), you get a generator object genChapter that you can use to control the process:

```JS
const genChapter = genFunc();
```

The process is initially paused in line A. genChapter.next() resumes execution, a yield inside genFunc() pauses execution:

```JS
genChapter.next();
// Output: First chapter
genChapter.next();
// output: Second chapter
```

## Implementing iterables

The objects returned by generators are iterable; each yield contributes to the sequence of iterated values. Therefore, you can use generators to implement iterables, which can be consumed by various ES6 language mechanisms: for-of loop, spread operator (...), etc.

Because it's an iterator you can also use the for/of syntax. We can say for(let word of generateHealthBook) and then log out the word and then run that. You can see the output is basically the same. Category Title Pages The main difference is that this is grabbing the value off of the next.

```javascript
function* genBook() {
  console.log(`Book`);
  yield "Category";
  console.log(`Health`);
  yield "Title";
  console.log(`The Paleo Solution`);
  yield "Pages";
  console.log(`320`);
}

var generateHealthBook = genBook();

for (let word of generateHealthBook) {
  console.log(word); // Book
  // Category
  // Health
  // Title
  // The Paleo Solution
  // Pages
  // 320
}
```

To do that by calling next we'd have to revert this and say .value, then run it again and we get the same output.

```javascript
console.log(generateHealthBook.next().value); // Book
// Category
console.log(generateHealthBook.next().value); // Health
// Title
console.log(generateHealthBook.next().value); // The Paleo Solution
// Pages
console.log(generateHealthBook.next().value); // 320
```

Lastly, generators also help you work with infinite sequences. If I wrap my yield with a while(true), which is never going to stop looping, I can safely yield {x:x, y:y} point knowing confidently that this stuff isn't going to evaluate until the next step through after the yield process.

```javascript
function* graph() {
  let x = 0;
  let y = 0;
  while (true) {
    yield { x: x, y: y };
    x += 2;
    y += 1;
  }
}

var graphGenerator = graph();
console.log(graphGenerator.next().value);
```

It will safely pause instead of infinitely going through this while loop. When I run this, you can see I get zero, two, four, six, eight and so on. Zero, one, two, three, four, and so on.

```javascript
// {x: 0, y: 0}
// {x: 2, y: 1}
// {x: 4, y: 2}
// {x: 6, y: 3}
// {x: 8, y: 4}
// {x: 10, y: 5}
// {x: 12, y: 6}
// {x: 14, y: 7}
```

I could generate these forever. They're also only created when I request them through the yield. They're not created ahead of time.

## simpler asynchronous code

You can use generators to tremendously simplify working with Promises. Let’s look at a Promise-based function fetchJson() and how it can be improved via generators.

```js
function fetchJson(url) {
  return fetch(url)
    .then(request => request.text())
    .then(text => {
      return JSON.parse(text);
    })
    .catch(error => {
      console.log(`ERROR: ${error.stack}`);
    });
}
```

With the library co and a generator, this asynchronous code looks synchronous:

```js
const fetchJson = co.wrap(function*(url) {
  try {
    let request = yield fetch(url);
    let text = yield request.text();
    return JSON.parse(text);
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
  }
});
```
