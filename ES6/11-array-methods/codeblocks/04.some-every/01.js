
// Array.prototype.every()

assert([-10, 0, 10].every(x => x < 0) === false);
assert([-10, 0, 10].every(x => x >= 0) === false);

assert([1, 2, 3, 4].every(x => x < 0) === false);
assert([1, 2, 3, 4].every(x => x >= 0) === true);
