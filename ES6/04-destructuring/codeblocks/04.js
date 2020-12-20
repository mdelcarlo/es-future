// combined destructuring

var [, Isaac] = authors;

function logCity({ country }) {
  console.log(country);
}

logCity(Isaac); // Russia