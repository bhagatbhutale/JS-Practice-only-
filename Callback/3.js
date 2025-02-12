// 1. Basic Callback Function
function greet(name, callback) {
    console.log(`Hello, ${name}`)
    callback()
}

function sayGoodBy() {
    console.log("GoodBye !");
}

greet("Bhagat", sayGoodBy)


//2. Callback with Anonmous Function

function processN(num, callback) {
    let result = num * 2;
    callback(result);
}

processN(5, function(output) {
    console.log("Result :", output)
})




