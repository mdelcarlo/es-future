# New regular expression features

ES9 provides 4 new features to regular expressions.

## Flag /s (dotAll)

Dot (.) in regular expressions don't match line terminators

```js
console.log(/^.$/.test("\n")); // Prints false
```

DotAll flag (/s) allows . in a regExp to match line terminators ( /n) and emojis (😁)

```js
console.log(/^.$/s.test("\n")); // Prints true
```

## Unicode Property Escapes

Unicode standard assings properties to each symbol, like White_Space. Now, we can access this properties inside of RegEXp using flag /u.

```js
const sentence = "$ I love ES9 course! ♥️ .";

const regexpEmojiPresentation = /\p{Emoji_Presentation}/gu;
console.log(sentence.match(regexpEmojiPresentation)); // Prints ["♥️"]

const regexpNonLatin = /\P{Script_Extensions=Latin}+/gu;
console.log(sentence.match(regexpNonLatin)); // Prints ["$ ", " ", " ", "9 ", "! ♥️ ."]

const regexpCurrencyOrPunctuation = /\p{Sc}|\p{P}/gu;
console.log(sentence.match(regexpCurrencyOrPunctuation)); // Prints ["!", "."]

const regexpNonWhiteSpace = /\P{White_Space}+/gu;
console.log(sentence.match(regexpNonWhiteSpace)); // Prints ["I", "love", "ES9", "course", "♥️", "."]
```

This new feature makes RegExp much more easy to read.

## Lookbehind Assertions

A look behind assertion is denoted by `?<=`, and enables you to match a pattern based on the substring that precedes the pattern. For example,

```js
const regExp = /(?<=\$|£|€)\d+(\.\d*)?/;
console.log(regExp.exec("199")); // Prints null
console.log(regExp.exec("$199")[0]); // Prints 199
```

Also, we have the negative version replacing `=` with !, that is `?<!`

```js
const negativeRegExp = /(?<!\$|£|€)\d+(\.\d\*)?/;
```

Remember that the substring matched by the look behind expression isn’t captured and isn’t part of the result.

## Named capture groups

Named capture groups enable you to take apart a string with a regular expression.
Matching a regular expression returns an object. If a fragment of the regular expression is inside a parentheses, is a capture group and it’s stored in the matched object.
Prior to ES2018, all capture groups were indexed by indexes

```js
const eventDate = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const matchedObject = eventDate.exec("2019-04-03");
console.log(matchedObject[1]); // 2019
console.log(matchedObject[2]); // 04
console.log(matchedObject[3]); // 23
```

After this update, we can name groups year, month and day using `<groupName>`, that are stored inside groups key:

```js
const eventDate = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;
const matchedObject = eventDate.exec("2019-04-03");
console.log(matchedObject.groups.year); // Prints 2019
console.log(matchedObject.groups.month); // Prints 04
console.log(matchedObject.groups.day); // Prints 03
```

We can combine with destructuring!

```js
const {
  groups: { day, month }
} = matchedObject.exec("2019-04-03");
console.log(day); // Prints 03
```

With this update is easier to find groups by ID(year, month, day), each group is self descriptive.
