function sum(a, b) {
    return a + b;
  }
  
  console.log(sum(1, 2, 3, 4, 5));

  function sumAll(...args) {
    // args is the name for the array
    let sum = 0;
  
    for (let arg of args) sum += arg;
  
    return sum;
  }
  
  console.log(sumAll(1));
  console.log(sumAll(1, 2));
  console.log(sumAll(1, 2, 3));