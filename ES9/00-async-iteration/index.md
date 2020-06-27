# Asynchronous iteration

With synchronous iterations, we are able to iterate data from a synchronous source, but not when data is from an asynchronous source, for example https fetch. The way of iterating is synchronous, it doesn’t work for asynchronous sources.

ES9 provided the `for await...of` statement that creates a loop iterating over async iterable objects as well as on sync iterables, including: built-in String, Array, Array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined async/sync iterables. It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object. Like await operator, the statement can only be used inside an async function.

You can use it to iterate over async generators
Since the return values of async generators conform to the async iterable protocol, they can be looped using for await...of.

```js
async function* asyncGenerator() {
  let i = 0;
  while (i < 3) {
    yield i++;
  }
}

(async function() {
  for await (let num of asyncGenerator()) {
    console.log(num);
  }
})();
// 0
// 1
// 2
```

For a more concrete example of iterating over an async generator using for await...of, consider iterating over data from an API.

This example first creates an async iterable for a stream of data, then uses it to find the size of the response from the API.

```js
async function* streamAsyncIterable(stream) {
  const reader = stream.getReader();
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        return;
      }
      yield value;
    }
  } finally {
    reader.releaseLock();
  }
}

async function getResponseSize(url) {
  const response = await fetch(url);
  let responseSize = 0;
  for await (const chunk of streamAsyncIterable(response.body)) {
    responseSize += chunk.length;
  }

  console.log(`Response Size: ${responseSize} bytes`);
  return responseSize;
}

getResponseSize("https://api.github.com/users/mdelcarlo");
```

As we are getting the data as chunks we need to add the length of every chuck to get the total response size.

```js
import fs from "fs";
import readline from "readline";

async function processLineByLine(filePath) {
  const fileStream = fs.createReadStream(filePath);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  for await (const line of rl) {
    console.log(`Line from file: ${line}`);
  }
}

processLineByLine("./index.mjs");
```
