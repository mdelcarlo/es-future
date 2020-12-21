[6, -5, 8]
  .find(x => x < 0) // -5

  [(6, 5, 8)].find(x => x < 0); // undefined

// findIndex(predicate, thisArg?)
[6, -5, 8]
  .findIndex(x => x < 0) // 1

  [(6, 5, 8)].findIndex(x => x < 0); // -1