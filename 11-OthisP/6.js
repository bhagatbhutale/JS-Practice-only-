

let obj1 = {
    a : 10,
    fn : function(x, y, z) {
        console.log(this.a, x, y, z);
    }
}
let obj2 = {
    a : 40
}

// both are executing 
obj1.fn()  // 10
// call --> change the reference of the keyword, cal accepts comma separaited arguments
obj1.fn.call(obj2, 10, 20, 30) // 40
// apply --> change the reference of this keyword, apply accepts arguments in array
obj1.fn.apply(obj2, [20, 30, 40])



// creates a copy (does not execute)

let copiedFn = obj1.fn.bind(obj2, 50, 60, 70)
copiedFn()


// outputs 
// 10 undefined undefined undefined
// 40 10 20 30
// 40 20 30 40
// 40 50 60 70
