// Example 1
function outer() {
    console.log("i am Outer");
    function inner() {
        console.log("i am inner");
        function veryInner() {
            console.log("i am very Inner");
        }
        veryInner()
    }
    inner()
}
console.log(x)
outer()
var x = 10;
console.log(x);

// output 
// undefinid
// i am outer 
// i am inner 
// i am very inner 
// 10

