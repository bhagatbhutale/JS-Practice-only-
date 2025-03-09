
function task1() {
    console.log("wait for 3s...")
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Promise 1 is Completed !")
            resolve();
        }, 3000)
    })
}

function task2() {
    console.log("wait for 4s...")
   return new Promise((resolve) => {
     setTimeout(() => {
       console.log("promise 2 is completed !");
       resolve();
     }, 4000);
   })
}

function task3() {
  console.log("wait for 5s...");
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("promise 3 is completed !");
      resolve();
    }, 5000);
  });
}


task1().then(task2).then(task3).then(() => {
    console.log("All tasks is completed");
    
})

