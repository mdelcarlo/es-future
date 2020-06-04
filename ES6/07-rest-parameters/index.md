# Template strings

If you have ever worked with strings in JavaScript, you've most likely concatenated two strings by just saying the variable then plus and then adding a string to it.

```javascript
var name = "Carol";
var action = "walking";
var activity = name + " is " + action;
console.log(activity);
```

ES6 allows you to put your variables inside of your string. Template literals are enclosed by the backtick (``) (grave accent) character instead of double or single quotes.

Template literals can contain placeholders. These are indicated by the dollar sign and curly braces (\${expression}). The expressions in the placeholders and the text between the backticks (``) get passed to a function.

The default function just concatenates the parts into a single string. If there is an expression preceding the template literal (tag here), this is called a tagged template. In that case, the tag expression (usually a function) gets called with the template literal, which you can then manipulate before outputting.

I'm going to surround this with a grave. So I'll put one there and I'll put one here.

Then, instead of doing plus and then quote, I'll just surround this guy with the dollar sign, curly brace, and then close curly brace. You'll see if I rerun this, I'll get Carol is walking.

```javascript
var activity = `${name} is ${action}`;
```

It actually respects white space even across multiple lines. If I put some lines in here and if I say name, is and action and run this. You'll see I get some blank lines, Carol all the way at the left and then a couple tabs, and then is, and then more blank lines till you get walking.

```javascript
var activity = `

${name} 

    is
    
    ${action}
`;
```

It's also worth noting that you can do expressions inside of these braces. If you want to do X + Y, then just show Y and just show X, and then run this. You can see we get 1 + 2 = 3, and then this is one.

```javascript
var a = 3;
var b = 5;
var equation = `${a} * ${b} = ${a * b}`;

console.log(equation); // "3 * 5 = 15"
```

In certain cases, nesting a template is the easiest (and perhaps more readable) way to have configurable strings. Within a backticked template, it is simple to allow inner backticks simply by using them inside a placeholder \${ } within the template.

For instance, if condition a is true, then return this templated literal.

In ES5:

```js
let classes = "header";
classes += isLargeScreen()
  ? ""
  : item.isCollapsed
  ? " icon-expander"
  : " icon-collapser";
```

In ES6 with template literals and without nesting:

```js
const classes = `header ${
  isLargeScreen() ? "" : item.isCollapsed ? "icon-expander" : "icon-collapser"
}`;
```

In ES6 with nested template literals:

const classes = `header ${ isLargeScreen() ? '' :`icon-\${item.isCollapsed ? 'expander' : 'collapser'}`}`;
