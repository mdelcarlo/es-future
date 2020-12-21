Array.from(["Howard", "Dominique"].keys()); // [ 0, 1 ]
Array.from(["Howard", "Dominique"].values()); // [ 'Howrad', 'Dominique' ]
Array.from(["Howard", "Dominique"].entries()); // [ [ 0, 'Howrad' ],[ 1, 'Dominique' ] ]

// another way of doing it
[...["Howard", "Dominique"].keys()]; // [0, 1];