var numbersArray = [];
for (var num = 0; num < 10; num++) {
  numbersArray.push(function() {
    console.log(num);
  });
}

numbersArray.forEach(function(fun) {
  fun(); // 10 10 10 10 10 10 10 10 10 10
});

// with let

for (let num = 0; num < 10; num++) {
  numbersArray.push(function() {
    console.log(num); // 0 1 2 3 4 5 6 7 8 9
  });
}