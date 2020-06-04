# Destructuring

ES6 destructuring provides flexible options for variable assignment.

Typically in JavaScript if you have an object with a property and a value, and you want to log out this value, you would do some sort of assignment. Let's say car. Then when you log it out, you would say that car, and then the property color. You could run it and you would see the value in the log.

```javascript
var car = {
  color: "red"
};
console.log(car.color); // red
```

Destructuring allows you to do this in a little bit different way where, instead of doing this sort of assignment, I would say look up the color property and make that available so that I can just log out color and when I run this again, I'll just get red again.

```javascript
var { color } = {
  color: "red"
};
console.log(color); // red
```

Meaning that this says find this guy and assign it to...so I have red here available, and now color is available for me wherever I want to use it.

Now this also works if I have multiple properties and I want to get the color and the position. I could just say color, then position. Then I can log out the color and the position and they're both available now, so I can log out red and forward.

```javascript
var { color, position } = {
  color: "red",
  brand: "Ferrari",
  model: "Portofino",
  year: 2020
};

console.log(color);
console.log(year);
```

A very common scenario where you will see destructuring come into play is when you have a function which returns an object but you only want the brand and the model off of that return, so I'll just say var and then I'll say {brand, model}.

```javascript
function buildCar() {
  return {
    color: "red",
    brand: "Ferrari",
    model: "Portofino",
    year: 2020
  };
}
var { brand, model } = buildCar();
```

Then I can simply use the brand and I can use the state. I can run this and I can get Ferrari and Portofino because brand was found here, which was Ferrari, and state was found here, which was Portofino. Once I logged them out, I got only those things that I wanted.

```javascript
console.log(brand); // Ferrari
console.log(model); // Portofino
```

If you want these named something else, you can actually just put a colon in here. I'll say first brand and I'll say subCategory. This means still look up the brand, but instead assign it to first brand. Look up the model, but instead assign it to subCategory. So that when I go first brand here and I go subCategory here and I run this, I'll still get Ferrari and Portofino.

```javascript
var { brand: category, model: subCategory } = buildCar();

console.log(category); // Ferrari
console.log(subCategory); // Portofino
```

Now where this gets crazy, and also a little awesome, is when you have an array and you only want the first item and the fifth item and you don't care about the second, third or fourth. I can do the array syntax, so var and then assign an array.

I'll say first and then the second item, don't care about. Third, don't care about. Fourth, don't care about. But I do want the fifth, and I'll just name it first and fifth. I'll log out the first item, then I will log out the fifth item.

```javascript
var [first, , , , fifth] = ["dog", "cat", "jirafe", "turtle", "parrot"];

console.log(first); // dog
console.log(fifth); // parrot
```

Then when I run this, you can see I get dog, because first is assigned to dog, and parrot, because fifth is assigned to parrot. If I wanted to start putting in second, third, fourth, I could, but right now they're not accessible, because there's just empty commas in there.

For this example we have an array of users which are just objects with some users firstName, lastName, et cetera on them. I want you to watch very carefully as we do this, because I'm going to take the users.

I'll go through them with a forEach(), and then we'll pass on a function. I'll use the arrow syntax, so that's the arrow syntax for a function, and I'm going to destructure the parameter that comes in. This would typically be the person.

```javascript
var users = [
  {
    firstName: "Paul",
    lastName: "Lewis",
    city: "Sidney",
    country: "Australia"
  },
  {
    firstName: "Penny",
    lastName: "Roggers",
    city: "New York",
    country: "USA"
  }
];

users.forEach(({ firstName }) => console.log(firstName));
```

I'll say I only want the firstName off of it, so that when I log this out I can get the first name. I can run this and I can log out all of the first names of those users, because what happened is this function took in the destructured version of this, saying only give me the first name of all of these users that come in. Then I can log out just the firstName.

Lastly, to combine a couple of these concepts, if I want to get Paul, I can actually use that array syntax, and I'll just say [, "Paul"] and assign that to users, meaning that this is going to skip the first one, look up the second one and name it Paul. Then I'll make a function which I'll call logCity(), which will take a destructured of that object of just the city property, and we'll say log city.

```javascript
var [, Paul] = users;

function logCity({ city }) {
  console.log(city);
}

logCity(Paul); // Sidney
```

Then when I say log the city of Paul, and I run this, it logs out Paul's city, which is right here, because it looks up the second item, names it Paul. This is not looking up the name Paul, it's just naming it Paul from users. I'm logging Paul's city, which is destructuring that Paul object, and only taking the city off of it and logging out the city string, which is this.
