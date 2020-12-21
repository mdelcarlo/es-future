// part 1

let book = "Meditations";
let pages = 93;

function myVehicleTag(strings, bookExp, pagesExp) {
  let str0 = strings[0]; // "That "
  let str1 = strings[1]; // " is a "

  // There is technically a string after
  // the final expression (in our example),
  // but it is empty (""), so disregard.
  // let str2 = strings[2];

  let pagesStr;
  if (pagesExp < 100) {
    pagesStr = "small book";
  } else if (pagesExp < 300) {
    pagesStr = "medium book";
  } else {
    pagesStr = "big book";
  }

  // We can even return a string built using a template literal
  return `${str0}${bookExp}${str1}${pagesStr}`;
}

let output = myVehicleTag`That ${book} is a ${pages}`;

console.log(output);

// part 2

function replaceValues(strings, ...keys) {
    return function(...values) {
      let dict = values[values.length - 1] || {};
      let result = [strings[0]];
      keys.forEach(function(key, i) {
        let value = Number.isInteger(key) ? values[key] : dict[key];
        result.push(value, strings[i + 1]);
      });
      return result.join("");
    };
  }
  
  let firstReplacement = replaceValues`${1}${4}${0}${3}${2}!!`;
  firstReplacement("L", "H", "O", "L", "E"); // "HELLO!!"
  let secondReplacement = replaceValues`${0} bought ${"book"}`;
  secondReplacement("John", { book: "Sapiens" }); // John bought Sapiens