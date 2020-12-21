const author = "Epictetus";
const category = "Non fiction";
const title = "Manual for Living";

leftPad = function(str, length = 10) {
    return `${" ".repeat(length)}${str}`;
  };
  
  console.log(leftPad(author)); // ' Epictetus'
  console.log(leftPad(category)); // ' Non fiction'
  console.log(leftPad(title)); // ' Manual for Living'


  // step 2

//   leftPad = function(str, length = 20) {
//     return `${" ".repeat(Math.max(length - str.length, 0))}${str}`;
//   };
//   ```
  
//   I can take author, category, and color, put them in here. It's going to console.log each one of them out. I'm going to leave out the length because we're going to default it to 20, and it should just pass in the author, category, and color.
  
//   ```js
//   console.log(leftPad(author)); // ' Epictetus'
//   console.log(leftPad(category)); // ' Non fiction'
//   console.log(leftPad(title)); // ' Manual for Living'