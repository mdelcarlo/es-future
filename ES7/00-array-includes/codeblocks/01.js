
let arr = ["a", "b", "c"];

arr.includes("c", 3); // false
arr.includes("c", 100); // false
arr.includes("a", -100); // true
arr.includes("b", -100); // true
arr.includes("c", -100); // true
arr.includes("a", -2); // false

