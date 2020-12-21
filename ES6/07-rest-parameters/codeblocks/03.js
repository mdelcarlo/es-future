function showName() {
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);
  
    // it's iterable
    // for(let arg of arguments) console.log(arg);
  }
  
  // shows: 2, Julius, Caesar
  showName("Julius", "Caesar");
  
  // shows: 1, Ilya, undefined (no second argument)
  showName("Ilya");