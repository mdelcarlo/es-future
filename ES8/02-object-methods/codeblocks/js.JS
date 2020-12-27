// Array-like object
const arrayLikeAnimals = { 0: "dog", 1: "cat", 2: "mouse" };
console.log(Object.values(arrayLikeObj1)); // ['dog', 'cat', 'mouse']
const dogNameDescriptor = Object.getOwnPropertyDescriptor(dog, "name");

console.log(dogNameDescriptor); // { value: "fido", writable: true, enumerable: true, configurable: true }
