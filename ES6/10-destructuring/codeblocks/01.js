
const [, , x, y] = ["a", "b", "c", "d"]; // x = 'c'; y = 'd'

// uncomment to test 

// const [x, ...y] = ["a", "b", "c"]; // x='a'; y=['b', 'c']
// const [x, y, ...z] = ["a"]; // x='a'; y=undefined; z=[]

// const [x, ...[y, z]] = ["a", "b", "c"];
// [y, z] = ["b", "c"];
// const [x, ...y] = "abc"; // x='a'; y=['b', 'c']