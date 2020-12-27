
const dog = {
  name: "fido",
  eyes: 2,
  legs: 4
};

Object.entries(dog); //[["name", "fido"], ["eyes", 2], ["legs", 4]]

Object.entries(dog).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

// output
// "name: fido"
// "eyes: 2"
// "legs: 4"

Object.values(dog); // ["fido", 2, 4]

