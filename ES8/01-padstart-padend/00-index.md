# padStart / padEnd

The `padStart()` method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.

```js
const surname = "Del Carlo";

console.log(surname.padStart(13, "MR. "));
// expected output:  "MR. Del Carlo"
```

You can mask a number

```js
const fullNumber = "2034399002125581";
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, "*");

console.log(maskedNumber);
// expected output: "************5581"
```

The `padEnd()` method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of the current string.

```js
const email = "mati.dc@";

console.log(`${email.padEnd(12, "*")}.com`);
// expected output: "mati.dc@***.com"
```

Or you can create a emailMask

```js
const email = "mati.dc@hotmail.com";

const emailFirstDigits = email.slice(0, 8);
const maskedEmail = emailFirstDigits.padEnd(email.length, "*");
console.log(maskedEmail);
// expected output: "mati.dc@***********"
```
