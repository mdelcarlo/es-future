# Exponentiation

The exponentiation operator returns the result of raising the first operand to the power of the second operand.

The exponentiation operator `**` is the equivalent of Math.pow(), but brought into the language instead of being a library function.

The exponentiation operator is right-associative. `a ** b ** c` is equal to `a ** (b ** c)`.

In most languages, such as PHP, Python, and others that have an exponentiation operator (**), the exponentiation operator is defined to have a higher precedence than unary operators, such as unary + and unary -, but there are a few exceptions. For example, in Bash, the ** operator is defined to have a lower precedence than unary operators.

In JavaScript, it is impossible to write an ambiguous exponentiation expression; that is, you cannot put a unary operator `(+/-/~/!/delete/void/typeof)` immediately before the base number.

```js
(-2) ** 2;
// 4 in Bash, -4 in other languages.
// This is invalid in JavaScript, as the operation is ambiguous.

-(2 ** 2);
// -4 in JavaScript and the author's intention is unambiguous.
```

Basic exponentiation

```js
2 ** 3; // 8
3 ** 2; // 9
3 ** 2.5; // 15.588457268119896
10 ** -1; // 0.1
NaN ** 2; // NaN
```

Associativity

```js
2 ** (3 ** 2); // 512
2 **
  ((3 ** 2)(
    // 512
    2 ** 3
  ) **
    2); // 64
```

Usage with unary operators
To invert the sign of the result of an exponentiation expression:

```js
-(2 ** 2); // -4
```

To force the base of an exponentiation expression to be a negative number:

```js
(-2) ** 2; // 4
```
