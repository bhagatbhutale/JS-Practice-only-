// Promises 

const promice1 = new Promise(function(resolve, reject) {
    // Do an Async Task
    setTimeout(function() {
        console.log("Async task is completed")
        resolve();
    },2000)
})

// Promice Consuftion directly reltion then() --> resolve
promice1.then(function() {
    console.log("promice Consumed")
})



// 2.
new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log("Async task 2")
        resolve()
    }, 3000)
}).then(function() {
    console.log("Async 2 Resolved")
})

// 3. data pass
const promice3 = new Promise(function(resolve, reject) {
   setTimeout(function() {
    resolve({username : "Bhagat", email: "bhagat@123"})
   }, 5000)
})

promice3.then(function(user) {
    console.log(user);
    
})


// 4.

const promice4 = new Promise(function(res, rej) {
    setTimeout(() => {
        let error = false;
        if(!error) {
            res({name: "ajay", age: 18})
        } else {
            rej("ERROR: Somethng went wrong")
        }
    }, 6000)
})

promice4
.then((user) => {
    console.log(user);
        return user.name;
})
.then((name) => {
    console.log(name);
})
.catch((error) => console.log(error))
.finally(() => console.log("The Promice is resolve or reject")
)


// 5.
const promise5 = new Promise(function(res,rej) {
    setTimeout(() => {
      let error = true;
      if (!error) {
        res({ name: "javascript", age: 18 });
      } else {
        rej("ERROR: JS went wrong");
      }
    }, 7000);
})


async function consumePromise5() {
    try{
        const response = await promise5
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromise5()