# New string methods

The String type in ES6 has come with four new methods that are really handy, help us write a little bit more readable code, as well as reduce our reliance on using regular expressions, or RegExp, for certain things.

## .startsWith() and .endsWith()

So I have a const variable named category, which has the value of science.

```js
const category = "science";
```

Sometimes I have science which is the category, sport which is other category, history which is another category. I don't really care too much about that in certain cases, I just want to know if category starts with his, and not something like sp, which is sport.

We can use the console to check this out by typing category.startsWith('sc'), it will return true, because obviously it does start with it.

If I did his, in lowercase letters, it says, false, because there is no way to author this case insensitive. If you do need case sensitivity you must still use a Regular Expression.

One other thing that .startsWith() will do is it'll allow you to skip a certain number of characters and start looking at a set point.

```js
const phone = "5493513092817";
```

This phone number here, I want to see if it starts with 351. Over in the console, I'm going to type phone.startsWith('351'). It's false, because the variable starts with 549.

What you can do is you can use phone.startsWith('351', 3);, which says start after three characters. That is returning true, because it ignores the first three and then starts at 351 and checks against that.

EndsWith works fairly similar. Here is an example where we have 17 at the end of the phone, and I want to know if it's a special phone. We can say phone.endsWith('17'), which will be true, obviously, because it ends with it.

There's another option that we can pass .endsWith(), and I'm going to use an phone number variable as an example here:

I need to check if this number, which ends with 351, and I want to ignore this right here. What you can do is you can tell the phone number to just take a certain number of characters, and ignore the rest.

Just like with our phone, we can use the console to put in phone.endsWith('351'), which will be false. What I can tell it, though, is only take the first 6 numbers, by using phone.endsWith('351', 6); which will be true.

Essentially you're just going to take the first 6 numbers of phone, ignore the rest, and then see if it ends in 351 or whatever else it might be.

## .includes()

Then next up we have .includes() which will just check if that string is anywhere in it. If I wanted to see if my name includes the letters Galt, then I could use name.includes('Galt'), which is true.

```js
const name = "John Galt";
name.includes("Galt"); // true
```

Again, it is not case sensitive so you cannot use lower case letters here.

.includes() checks to see if your string has something in it. As a bit of an aside, it was originally supposed to be called .contains(), but it got changed to includes because of some conflicts with the MooTool libraries and the way that they modified the prototype.

## .repeat() and String Padding

Next up we have author, category and title here:

```js
const author = "Epictetus";
const category = "Non fiction";
const title = "Manual for Living";
```

I'm going to show you where that would be useful for using .repeat(), which allows you to take a string, and repeat it. You can just call .repeat() and it's going to repeat that string over and over and over again.

Where is that useful? Sometimes we have some words here. I'm going to take my Epictetus, Non fiction and manual of living, and if I wanted to display the variables in a terminal or something, but I want to right align them. How would that work? I'd have to just put a whole bunch of padding in, depending on how long this was and how much space will be used, kind of like this:

                 Epictetus
                  Non fiction
          Manual for Living

What we can do, instead of hitting the space bar each time, we can use a left pad function, and you can use .repeat()to code a nice little left padding function.

Here we can return a string, and we need to then pad it with however many characters we need. We'll take a space and repeat it 10 times.

```js
leftPad = function(str, length = 10) {
  return `${" ".repeat(length)}${str}`;
};

console.log(leftPad(author)); // ' Epictetus'
console.log(leftPad(category)); // ' Non fiction'
console.log(leftPad(title)); // ' Manual for Living'
```

However, if we want it right aligned, we'll need to subtract however many characters are in the string, so we subtract str.length here before we return the actual string itself in \${str};

```js
leftPad = function(str, length = 20) {
  return `${" ".repeat(Math.max(length - str.length, 0))}${str}`;
};
```

I can take author, category, and color, put them in here. It's going to console.log each one of them out. I'm going to leave out the length because we're going to default it to 20, and it should just pass in the author, category, and color.

```js
console.log(leftPad(author)); // ' Epictetus'
console.log(leftPad(category)); // ' Non fiction'
console.log(leftPad(title)); // ' Manual for Living'
```

There we go. See how all these are perfectly right aligned? Epictetus Non fiction in manual of living, whereas all of this is however much padding we actually need. That's a nice little use for repeat.
