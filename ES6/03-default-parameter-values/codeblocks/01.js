function excecute(callback) {
    callback();
  }
  
excecute();

excecute(function() {
    console.log("logging callback");
});

// first step

// function excecute(
//     callback = function() {
//       console.log("logging callback");
//     }
//   ) {
//     callback();
//   }
  
//   excecute();

//second step

// function excecute(callback = () => console.log("logging callback")) {
//     callback();
//   }

// third step
// convert into a one liner

// let excecute = (callback = () => console.log("callback")) => callback();



