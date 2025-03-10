
// Callback Example 1

function task1(callback) {
    console.log("Wait for 3s...")
    setTimeout(() => {
        console.log("Task 1 is Completed")
        callback()
    }, 3000)
}

function task2(callback) {
  console.log("Wait for 3s...");
  setTimeout(() => {
    console.log("Task 2 is Completed");
    callback();
  }, 3000);
}

function task3(callback) {
  console.log("Wait for 3s...");
  setTimeout(() => {
    console.log("Task 3 is Completed");
    callback();
  },3000);
}


task1(() => {
    task2(() => {
        task3(() => {
            console.log("All tasks is Completed....");
            
        })
    })
})

// ------------------------------------

// Example 2

function greet1(name , callback) {
    console.log("Executing this function Wait ...");
    
    setTimeout(() => {
        console.log(`Hello ${name}`);
        callback();
    }, 3000)
}

function greet2() {
    console.log("How Are You ?")
}

greet1("Mobile", greet2);

// ---------------------------------

// Example 3 --> 

function add(a, b, callback) {
    let sum = a + b;
    callback(sum);
}

function displayAns(result) {
    console.log("THe sum is " ,result);
}

add(4, 5, displayAns)



// Example 4 -->

function getFirstNumber( callback) {
    let a = 25;
    console.log("First Number is ", a);
    callback(a)
}

function getSecondNumber(a, callback) {
    let b = 45;
    console.log("Second Number is ", b);
    callback(a, b);
}

function CalculateOutput(a, b, callback) {
    let sum = a + b;
    callback(sum)
}

function result(sum) {
    console.log("The Result is : ", sum);
}

getFirstNumber(function(a) {
    getSecondNumber(a, function(a, b) {
        CalculateOutput(a, b, result)
    })
})





