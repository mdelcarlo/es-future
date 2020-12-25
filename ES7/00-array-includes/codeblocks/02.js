(function() {
    console.log(Array.prototype.includes.call(arguments, "a")); // true
    console.log(Array.prototype.includes.call(arguments, "d")); // false
  })("a", "b", "c");