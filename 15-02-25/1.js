// Q. What is Curriying in js --> 

// Eg 1 -->
function add(a,) {
    return function(b){
        return function(c){
            return a + b + c;
        }
    }
}
console.log(add(7)(2)(3));


// Eg 2 -->
function sendAutoE(to) {
    return function(subject) {
        return function(body) {
            console.log(`Sending emain to ${to} with abuject ${Subject} and this content ${body}`);
        }
    }
}

let step1 = sendEmail("bhagatbhutale@123");
let step2 = step2("New Course Purches..")
step2("Hello can you give me your Paid Course")
