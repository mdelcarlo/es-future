# Trailling commas

Trailing commas (sometimes called “final commas”) can be useful when adding new elements, parameters, or properties to JavaScript code. If you want to add a new property, you can simply add a new line without modifying the previously last line if that line already uses a trailing comma. This makes version-control diffs cleaner and editing code might be less troublesome.”

On ES8 when you use Trailing Comma at the above-mentioned places this won’t pass any errors. But in old browsers (which used old JS engine), if you add the Trailing Comma (or comma after the last item of the obj) it’ll surely throw an Error in the console.

On function declaration

```js
const addNumbers = (num1, num2,) => {
  //...
};
```

On fucntion call

```js
concatenate("John", "Galt",);
```

On Array Declaration

```js
const cities = ["New York", "San Francisco", "Miami",];
```

On Object Declaration

```js
let company = {
  name: `Netflix`, // Added by mdelcarlo with trailing comma
  founder: ` Marc Randolph`, // Added by github_octocat with trailing comma
  sector: `Consumer Services`, // Added by gearon with trailing comma
};
```

That’s why most of the developers love this approach. That’s why I love this approach. It helps to have a clean git record. That’s it for the Trailing Commas.
