
var promise = new Promise((resolve, reject) => {
    if (true) {
      resolve("promise solved");
    } else {
      reject("oops! promise rejected :( ");
    }
  });
    
// chain of then
promise
    .then(data => console.log("success : ", data))
    .then(data => console.log("success 2 : ", data))
    .catch(error => console.error("error : ", error));
```
// return values on then // uncomment to test

// promise
//   .then(data => {
//     console.log("success : ", data);
//     return "foo bar";
//   })
//   .then(data => console.log("success 2 : ", data))
//   .catch(error => console.error("error : ", error));
