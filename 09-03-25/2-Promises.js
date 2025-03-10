// Promises 

// Example 1

// function promise1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let random = true;

//             if(random) {
//                 resolve("Promise is Resolved")
//             }
//             else {
//                 reject("Promise is Rejected")
//             }
//         })
//     })
// }

// promise1().then((msg) => {
//     console.log(msg)
// }).catch((error) => {
//     console.log(error);
// })

// -----------------------------------------------

// Example 2. Promises.all

// let p1 = new Promise((resolve) => {
//     setTimeout(() => {
//         console.log("Promise 1 is Resolved")
//     }, 1000)
// })

// let p2 = new Promise((resolve) => {
//   setTimeout(() => {
//     console.log("Promise 2 is Resolved");
//   }, 2000);
// });

// let p3 = new Promise((resolve) => {
//   setTimeout(() => {
//     console.log("Promise 3 is Resolved");
//   }, 3000);
// });

// console.log("Wait for Promises is Resolved...")

// Promise.all([p1, p2, p3])
// .then((result) => {
//     console.log("All Promises is Resolved", result)
// }).catch((error) => {
//     console.log("Error", error);
    
// })

// --------------------------------------------


// Example 3

fetch("https://jsonplaceholder.typicode.com/posts/1")
.then((response) => {
    return response.json()
}).then((data) => {
    console.log(data.title);  
}).catch((error) => {
    console.log("Error", error)
})


