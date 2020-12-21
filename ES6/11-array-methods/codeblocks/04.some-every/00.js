// Array.prototype.some()

function isNegative(x) {
  return x < 0;
}

assert([-10, 0, 10].some(isNegative) === true);
assert([1, 2, 3, 4].some(isNegative) === false);

assert([-10, 0, 10].some(x => x < 0) === true);
assert([1, 2, 3, 4].some(x => x < 0) === false);