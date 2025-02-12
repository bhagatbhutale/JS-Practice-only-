// 5. Arrow Function :
// --> syntactical sugar of normal fn

// function square(n) {
//     return n * n
// }
// console.log(square(5));

// way 2 
let square = (n) => n * n;
console.log(square(5));

// way 3 : syntacical
let addition = o => o + o;
console.log(addition(4, 7))

// -------------------

// eg 1
let obj = {
    a : 10,
    fn: () => {
        console.log(this, "1"); // window (depends on parent this)
        let sam = function() {
            console.log(this, "2"); // window
        }
        sam()
    }
}
obj.fun();

// --------------------
// eg 2

let obj1 = {
    a : 10,
    fn : function() {
        console.log(this, "1"); // obj
        let sam = () => {
            console.log(this, "2");; // obj
        }
        sam()
    }
}

obj1.fn();

// ------------------

// checck parent using arrow fn
let obj2 = {
    a : 10,
    fn : () => {
        console.log(this, "1"); // obj
        let sam1 = () => {
            console.log(this, "2"); // obj
        }
        sam1()
    }
}
obj.fn()

