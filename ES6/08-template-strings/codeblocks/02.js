function logArgs() {
    arguments.forEach(function(arg) {
      console.log(arg); // TypeError: arguments.forEach is not a function
    });
  }
  
  logArgs(1, 2, 3);