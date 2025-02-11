// prototypes-->
// --> are Object, which acts like a fallback source to your Object;
// fallback --> child to Parant to grandparent

let obj = {
    a:10,
    fn:function() {
        console.log("Hello");
    }
}

console.log(obj.a); // 10
console.log(obj.g) // undefined
obj.fn()           // Hello
// obj.sam()         // Error
console.log(obj.toString()); // [ object object ]
// because Prototype fallback check toString is Present in prototype

// __proto__ --> dender proto
// (check your Parent)

// obj.__proto__ === Object.prototype --> true

// obj.__proto__.__proto__ === null  --> true 


let arr = [10,20,30,40,50]

// arr.__proto__ === arr --> false 
// arr.__proto === Array.prototype --> true 
// arr.__proto__.__proto__ === Object.prototype --> true






