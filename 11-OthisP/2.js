// this --> HOW IT IS BEING CALLED UPON (RUN KEISE KIYA JA RHA HAI)
// 1. Function Calling : this point --> WINDOW

function abc() {
    console.log(this); // window
}
abc();


// 2. Method Calling -->  points to the object inside which method is available
let obj = {
    a : 10,
    b: 20,
    fn: function() {
        console.log(this); // obj
    }
}
obj.fn()


// Eg:1

let obj1 = {
    abc: "i am sam",
    fun : function() {
        console.log(this , "1") // obj
        function bhai() {
            console.log(this, "2"); // window
        }
        bhai();  // method calling : window
    }
}
obj1.fun();


// eg:2

let obj3 = {
    a : 20,
    fun : function() {
        console.log(this, "1"); // window
        function sam() {
            console.log(this, "2"); // window
        }
        sam()
    }
}
let ans = obj.fun;
ans()  // direct calling : window




