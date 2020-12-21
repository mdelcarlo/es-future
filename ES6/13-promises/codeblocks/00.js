// Promises

var promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("promise solved");
  } else {
    reject("oops! promise rejected :( ");
  }
});

// on success
promise.then(data => console.log("success : ", data));

// on error
promise.catch(error => console.error("error : ", error));

var promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (false) {
      resolve("promise solved");
    } else {
      reject("oops! promise rejected :( ");
    }
  }, 5000);
});
