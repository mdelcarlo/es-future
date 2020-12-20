// foreach destructuring 

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