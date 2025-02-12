// Handling Error with Callback

// Concept	Description
// Callback Function	A function passed as an argument to another function
// Synchronous Callbacks	Run immediately (e.g., forEach())
// Asynchronous Callbacks	Execute later (e.g., setTimeout(), fetch())
// Error Handling	Callbacks can handle errors
function divideNumber(a, b, callback) {
    if ( b === 0) {
        callback("Error: Cannot divide by zero", null)
    } else {
        let result = a / b;
        callback(null, result)
    }
}

divideNumber(10, 4, function(error, result) {
    if(error) {
        console.log(error);
    } else {
        console.log("Result:", result)
    }
})