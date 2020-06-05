# Sanitizing tagged templates

Cross site scripting attacks (XSS)
If you don't know what that means, essentially when you get data from a user, or whenever you're displaying data from an untrusted (or even what you think is trusted) source, you must make sure that the user isn't doing any Sneaky Pete stuff on you, and trying to maybe insert an iFrame, or an image, or to do an XSS attack.

Here I've got an example:

```js
const title = "ES6 course";
const description = `Template from backend <img src="http://pinterest.com?dog" onload="function maliciousJS(){}();" />`;

const html = `
    <h3>${title}</h3>
    ${description}
`;

constmain = document.querySelector("main");
main.innerHTML = html;
```

Let's assume I took this title from a database, an API or something sort of data source where the user had this saved in their database.

They set their mainto be, "Template from backend," and they inserted an image from pinterest, which is allowed. You can insert an image into your page, no problem, but they do the Sneaky Pete thing here by inserting an onload=function maliciousJS(){}();, so when this image loads, it runs some JavaScript.

That is a huge problem. You cannot let your users run JavaScript on your page because then they could drain your bank account, or delete your app, or post spam, or really anything! Imagine if you let someone run JavaScript on Facebook. You could have people unfriending everyone, or you could look at all of their messages, or send nasty messages on their behalf.

Here I've taken the about me and I've just popped it into HTML and then I've set it into our page:

```js
const title = "ES6 course";
const description = `Template from backend <img src="http://pinterest.com?dog" onload="function maliciousJS(){}();" />`;

const html = `
    <h3>${title}</h3>
    ${description}
`;

constmain = document.querySelector("main");
main.innerHTML = html;
```

## Sanitizing your HTML

The solution to this is to sanitize your HTML. This is another place where you could use the tag template. In creating all this HTML here, I have all kinds of inputs from a user. But before I put it into my HTML, it's probably a good idea to run it through a sanitizer, so our HTML will look something like this:

<script src="https://cdnjs.cloudflare.com/ajax/libs/dompurify.0.8.2/purify.min.js"></script>
<script>
const title = 'ES6 course';
const description = `Template from backend <img src="http://pinterest.com?dog" onload="function maliciousJS(){}();" />`;

const html = `
    <h3>${title}</h3>
    ${description}
    `;

const main = document.querySelector('.main');
main.innerHTML = html;
</script>

I've loaded it in this library called DOMPurify. It's a pretty good library that we use to sanitize. You can have all kinds of options in here in terms of what tags are allowed and aren't allowed. There are all kinds of sanitize libraries here.

You could make a sanitized tag template and use this library inside of it. I'm going to show you how to do that now:

```js
function sanitize(strings, ...values) {
  return strings.reduce((prev, next, i) => `${prev}${next}${values[i]} || ''}`);
}
const title = "ES6 course";
const description = sanitize`Template from backend <img src="http://pinterest.com?dog" onload="function maliciousJS(){}();" />`;

const html = `<h3>${title}</h3> ${description}`;

const main = document.querySelector(".main");
main.innerHTML = html;
```

So we have a reduce function, which takes in a function and what we start with, an arrow function, which we'll use the title iteration, prev, our current iteration, next, and i for index. So we're just going to return a string that tacks all of those things together. We've got prev. We've got the next. We've got values, which is i or nothing.

We still have, the onload because we're not finished yet.

```js
function sanitize(strings, ...values) {
  const dirty = strings.reduce(
    (prev, next, i) => `${prev}${next}${values[i]} || ''}`
  );
}
const title = "ES6 course";
const description = sanitize`Template from backend <img src="http://pinterest.com?dog" onload="function maliciousJS(){}();" />`;

const html = `<h3>${title}</h3> ${description}`;

const main = document.querySelector(".main");
main.innerHTML = html;
```

But instead, what we can do is add a new const called dirty, because our string is dirty because it still has it's onload, or iFrames, or any of the other nasty stuff people are trying to do.

Now we'll use our library that we loaded, and it's called with DOMPurify.sanitize. We'll sanitize the dirty HTML:

```js
function sanitize(strings, ...values) {
  const dirty = strings.reduce(
    (prev, next, i) => `${prev}${next}${values[i]} || ''}`,
    ""
  );
  return DomPurify.sanitize(dirty);
}
const title = "ES6 course";
const description = sanitize`Template from backend <img src="http://pinterest.com?dog" onload="function maliciousJS(){}();" />`;

const html = `<h3>${title}</h3> ${description}`;

const main = document.querySelector(".main");
main.innerHTML = html;
```

Now when you refresh, you can see see that the onload has been stripped out, along with any other nasty stuff!
