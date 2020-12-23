
// WeakSets

let myDoggyWeakSet = new WeakSet();
let doggy = {};
myDoggyWeakSet.add(doggy);
console.log(myDoggyWeakSet.has(doggy));

// break the last reference to the object we created earlier
doggy = 5;

// false because no other references to the object which the weakset points to
// because weakset was the only object holding a reference it released it and got garbage collected
console.log(myDoggyWeakSet.has(doggy));
