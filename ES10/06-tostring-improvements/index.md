# toString() improvements

Functions have always had an instance method called toString() which return a string containing the function code.

ES2019 introduced a change to the return value to avoid stripping comments and other characters like whitespace, exactly representing the function as it was defined.

Now toString() method returns a string representing the source code of the function

If previously we had:

```js
function /* my es10 course */ es10() {}
```

The behavior was this:

```js
es10.toString(); //'function es10() {}
```

now the new behavior is:

```js
es10.toString(); // 'function /* my es10 course */ es10 () {}'
```
