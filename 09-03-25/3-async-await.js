// Async and Await 

// Example 1.

// function task1() {
//     console.log("Wait for 3s...");
//     return new Promise((resolve) => {
//         setTimeout(() => {
//           console.log("Task 1 is completed");
//           resolve()
//         }, 3000);
//     })
// }

// function task2() {
//   console.log("Wait for 3s...");
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Task 2 is completed");
//       resolve();
//     }, 3000);
//   });
// }

// function task3() {
//   console.log("Wait for 3s...");
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Task 3 is completed");
//       resolve();
//     }, 3000);
//   });
// }

// async function runningTasks() {
// await task1();
// await task2();
// await task3()
// }

// runningTasks()


// async function fetchData() {
//  try {
//    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//   let data = await response.json();
//   console.log(data.title);
//  }
//  catch (error) {
//   console.log("Error", error);
//  }
// }

// fetchData()