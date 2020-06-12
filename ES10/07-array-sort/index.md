# Array.prototype.sort() stability

If you've used .sort() before, you might know that it's a recommended practice not to rely on its default sorting algorithm. That's because there was no mention of any stability requirements for the algorithm, in the previous specifications.

Now, in ES2019, that "stable sort" is required by specs, every JS engine needs to comply with it. That means that they still can use different algorithms, but there shouldn't be any misconceptions related to that. To see what I mean - check out the example below.

```js
const dogs = [
  { name: "Abby", rating: 12 },
  { name: "Bandit", rating: 13 },
  { name: "Choco", rating: 14 },
  { name: "Daisy", rating: 12 },
  { name: "Elmo", rating: 12 },
  { name: "Falco", rating: 13 },
  { name: "Ghost", rating: 14 }
];

// Sort the dogs by `rating` in descending order.
dogs.sort((a, b) => b.rating - a.rating);
/* 
[
  { name: "Choco",  rating: 14 },
  { name: "Ghost",  rating: 14 },
  { name: "Bandit", rating: 13 },
  { name: "Falco",  rating: 13 },
  { name: "Abby",   rating: 12 },
  { name: "Daisy",  rating: 12 },
  { name: "Elmo",   rating: 12 },
]
*/
```
