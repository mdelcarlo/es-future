const arr = ["a", "b", "c"];
arr.fill(7); //[ 7, 7, 7 ]
arr; //[ 7, 7, 7 ]

// restricting where the filling starts and ends:
["a", "b", "c"].fill(7, 1, 2); // [("a", 7, "c")];