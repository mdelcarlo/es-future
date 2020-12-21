// array with filled values
new Array(3).fill(7);

// Filling with ascending numbers

[...new Array(3).keys()]; // [(0, 1, 2)];

// Filling with computed values

Array.from(new Array(5), (x, i) => i * 2); // [ 0, 2, 4, 6, 8 ]

// Filling with undefined

[...new Array(3)]; // [(undefined, undefined, undefined)];