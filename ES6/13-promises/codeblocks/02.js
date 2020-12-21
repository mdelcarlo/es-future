
    var promise = new Promise((resolve, reject) => {
      throw new Error("error thrown!");
      setTimeout(() => {
        if (true) {
          resolve("promise solved");
        } else {
          reject("oops! promise rejected :( ");
        }
      }, 2000);
    });
