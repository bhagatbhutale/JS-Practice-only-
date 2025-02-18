// Promises Problem :-

// Ex 1
let myPromise = new Promise((resolve, reject) => {
  let success = true; // Change to false to test rejection
  setTimeout(() => {
    if (success) {
      resolve("Operation Successful! ✅");
    } else {
      reject("Operation Failed! ❌");
    }
  }, 2000);
});

myPromise
  .then((message) => {
    console.log("Success:", message);
  })
  .catch((error) => {
    console.log("Error:", error);
  });


  // EX 2

  let promise1 = new Promise((resolve, reject) => {
    let msgSend = false;
    setTimeout(() => {
        if(msgSend) {
            resolve("Operation Succesfull...")
        }
        else {
            reject("Operation is Failed")
        }
    }, 5000)
  })

  promise1.then((msgSend) => {
    console.log("Success :", msgSend)
  })
  .catch((error) => {
    console.log("Failed..", error)
  })


  // Ex 3 :

// function stepOne() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Step 1 completed");
//       resolve();
//     }, 1000);
//   });
// }

// function stepTwo() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Step 2 completed");
//       resolve();
//     }, 1000);
//   });
// }

// function stepThree() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Step 3 completed");
//       resolve();
//     }, 1000);
//   });
// }

// // Promise Chaining
// stepOne()
//   .then(stepTwo)
//   .then(stepThree)
//   .then(() => {
//     console.log("All steps completed!");
//   });


  // Ex 4 :

let promice3 = new Promise((resolve, reject) => {
    let age = 2;
    setTimeout(() => {
        if(age > 18) {
            resolve("You are a Eligible")
        }
        else {
            reject("You are Not Eligible !")
        }
    }, 5000)
})

promice3.then((msg) => {
    console.log("YES :" , msg)
}).catch((error) => {
    console.log("NO :", error);
})