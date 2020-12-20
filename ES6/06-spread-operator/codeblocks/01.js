let first = [10, 20, 30];
let second = [10, 20, 30];

first.push(second);

console.log(first); // [ 10, 20, 30, [ 1, 2, 3] ]

// with spread

// first.push(...second);

// console.log(first); // [10, 20, 30, 1, 2, 3]