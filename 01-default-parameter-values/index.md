# Default parameters

On ES6 we can set default parameters to our functions.

Default arguments in ES6 allow you to assign some defaults to these guys. If I run this right now you'll see I'll get undefined, undefined because nothing was passed in for message or receiver, so when they get logged out they're both undefined.

```javascript
function sendMessage(message, receiver) {
  console.log(message + " to " + receiver);
}

sendMessage();
```

If I want his receiver to at least default to Peter, if I don't pass anything in, I can get undefined to Peter. I didn't pass anything in here, but I said the receiver should at least be Peter so it logs out the receiver as Peter.

If I pass in Bye here, and then run this, you can see I get Bye to Peter. Bye comes through the message, logged out here as Bye and the receiver still defaults to Peter, and then is logged out here.

```javascript
function sendMessage(message, receiver = "Peter") {
  console.log(message + " to " + receiver);
}

sendMessage("Bye"); // Bye to Peter
```

If I say Hello, Mark, the default will be overridden and I'll get Mark instead of Peter, because the default was Peter, but I said explicitly to say Mark.

```javascript
function sendMessage(message, receiver = "Peter") {
  console.log(message + " to " + receiver);
}

sendMessage("Cheers", "Mark"); // Cheers to Mark
```

Where this gets a little bit crazier is when you assign a default function to one of the arguments. Right now, callback is undefined, so it will say undefined is not a function when I try to invoke it.

```javascript
function excecute(callback) {
  callback();
}

excecute();
```

But, if I pass in a function and say log logging callback, and I run this, you can see it logs logging callback out, because it invokes it when it's passed in.

```javascript
function excecute(callback) {
  callback();
}

excecute(function() {
  console.log("logging callback");
});
```

But, I can take this function, I'll cut it out of here and then assign that as the default function and then I'll rerun it and you'll see I still get logging callback.

```javascript
function excecute(
  callback = function() {
    console.log("logging callback");
  }
) {
  callback();
}

excecute();
```

We can make this a little bit shorter using the arrow syntax covered before. If I do that and then get rid of the braces and then bring everything up to the same line, you can see that I can assign a default function, all within that same line, run it again, and I still get callback.

```javascript
function excecute(callback = () => console.log("logging callback")) {
  callback();
}
```

If you want to go completely crazy with arrow functions, which I don't recommend, you could go let excecute and I'll assign it to an arrow function, delete these braces, pull everything up to the same line, and then just invoke it this way. It still runs and this just doesn't look like JavaScript.

```javascript
let excecute = (callback = () => console.log("callback")) => callback();
```

It's not a JavaScript you'd write, but it's very unfamiliar with the new syntax, with the arrow functions and the default assignments all working on the same line.
