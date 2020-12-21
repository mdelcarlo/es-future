const randianHero = {
    name: "John Galt",
    age: 40,
    characteristics: ["individulist", "generosity", "inteligence"]
  };
  
  function displayHero(hero) {
    console.log("Our hero is " + hero.name);
    console.log("The main characteristic is " + (hero.characteristics[0] || ""));
    console.log(
      "The secondary characteristic is " + (hero.characteristics[1] || "")
    );
    console.log(
      "The tertiary characteristic is " + (hero.characteristics[2] || "")
    );
  }
  
  displayHero(randianHero);

  // step 2

//   function displayHero({
//     name,
//     characteristics: [main = "", secondary = "", tertiary = ""]
//   }) {
//     console.log("Our hero is " + name);
//     console.log("The main characteristic is " + main);
//     console.log("The secondary characteristic is " + secondary);
//     console.log("The tertiary characteristic is " + tertiary);
//   }