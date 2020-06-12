# JSON improvements

## JSON.parse

Before this change, the line separator (\u2028) and paragraph separator (\u2029) symbols were not allowed in strings parsed as JSON.

Using `JSON.parse()`, those characters resulted in a SyntaxError but now they parse correctly, as defined by the JSON standard.

## Well-formed JSON.stringify()

Fixes the `JSON.stringify()` output when it processes surrogate UTF-8 code points (U+D800 to U+DFFF).

Before this change calling `JSON.stringify()` would return a malformed Unicode character (a “�”).

Now those surrogate code points can be safely represented as strings using `JSON.stringify()`, and transformed back into their original representation using `JSON.parse()`.
