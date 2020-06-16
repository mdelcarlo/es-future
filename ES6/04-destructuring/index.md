# Destructuring

ES6 destructuring provides flexible options for variable assignment.

Typically in JavaScript if you have an object with a property and a value, and you want to log out this value, you would do some sort of assignment. Let's say book. Then when you log it out, you would say that book, and then the property title. You could run it and you would see the value in the log.

```javascript
var book = {
  title: "Frankenstein"
};
console.log(book.title); // Frankenstein
```

Destructuring allows you to do this in a little bit different way where, instead of doing this sort of assignment, I would say look up the title property and make that available so that I can just log out title and when I run this again, I'll just get Frankenstein again.

```javascript
var { title } = {
  title: "Frankenstein"
};
console.log(title); // Frankenstein
```

Meaning that this says find this guy and assign it to...so I have Frankenstein here available, and now title is available for me wherever I want to use it.

Now this also works if I have multiple properties and I want to get the title and the year. I could just say title, then year. Then I can log out the title and the year and they're both available now, so I can log out Frankenstein and forward.

```javascript
var { title, year } = {
  title: "Frankenstein",
  author: "Mary Shelley",
  year: 1931
};

console.log(title);
console.log(year);
```

A very common scenario where you will see destructuring come into play is when you have a function which returns an object but you only want the author and the title off of that return, so I'll just say var and then I'll say {author, title}.

```javascript
function buildBook() {
  return {
    title: "Frankenstein",
    author: "Mary Shelley",
    year: 1931
  };
}
var { author, title } = buildBook();
```

Then I can simply use the author and I can use the title. I can run this and I can get Mary Shelley and Frankenstein because author was found here, which was Mary Shelley, and title was found here, which was Frankenstein. Once I logged them out, I got only those things that I wanted.

```javascript
console.log(author); // Mary Shelley
console.log(title); // Frankenstein
```

If you want these named something else, you can actually just put a colon in here. I'll say first author and I'll say bookTitle. This means still look up the author, but instead assign it to first author. Look up the title, but instead assign it to bookTitle. So that when I go first author here and I go bookTitle here and I run this, I'll still get Mary Shelley and Frankenstein.

```javascript
var { author: bookAuthor, title: bookTitle } = buildBook();

console.log(bookAuthor); // Mary Shelley
console.log(bookTitle); // Frankenstein
```

Now where this gets crazy, and also a little awesome, is when you have an array and you only want the first item and the fifth item and you don't care about the second, third or fourth. I can do the array syntax, so var and then assign an array.

I'll say first and then the second item, don't care about. Third, don't care about. Fourth, don't care about. But I do want the fifth, and I'll just name it first and fifth. I'll log out the first item, then I will log out the fifth item.

```javascript
var [first, , , , fifth] = ["dog", "cat", "jirafe", "turtle", "parrot"];

console.log(first); // dog
console.log(fifth); // parrot
```

Then when I run this, you can see I get dog, because first is assigned to dog, and parrot, because fifth is assigned to parrot. If I wanted to start putting in second, third, fourth, I could, but right now they're not accessible, because there's just empty commas in there.

For this example we have an array of authors which are just objects with some authors firstName, lastName, et cetera on them. I want you to watch very carefully as we do this, because I'm going to take the authors.

I'll go through them with a forEach(), and then we'll pass on a function. I'll use the arrow syntax, so that's the arrow syntax for a function, and I'm going to destructure the parameter that comes in. This would typically be the person.

```javascript
var authors = [
  {
    firstName: "Mary",
    lastName: "Shelly",
    city: "London",
    country: "England"
  },
  {
    firstName: "Isaac",
    lastName: "Asimov",
    city: "Petrovichi",
    country: "Russia"
  }
];

authors.forEach(({ firstName }) => console.log(firstName));
```

I'll say I only want the firstName off of it, so that when I log this out I can get the first name. I can run this and I can log out all of the first names of those authors, because what happened is this function took in the destructured version of this, saying only give me the first name of all of these authors that come in. Then I can log out just the firstName.

Lastly, to combine a couple of these concepts, if I want to get Isaac, I can actually use that array syntax, and I'll just say [, "Isaac"] and assign that to authors, meaning that this is going to skip the first one, look up the second one and name it Isaac. Then I'll make a function which I'll call logCity(), which will take a destructured of that object of just the country property, and we'll say log country.

```javascript
var [, Isaac] = authors;

function logCity({ country }) {
  console.log(country);
}

logCity(Isaac); // Russia
```

Then when I say log the country of Mary, and I run this, it logs out Mary's country, which is right here, because it looks up the second item, names it Mary. This is not looking up the name Mary, it's just naming it Mary from authors. I'm logging Mary's country, which is destructuring that Mary object, and only taking the country off of it and logging out the country string, which is this.
