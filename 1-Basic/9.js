//

console.log(isNaN( "hello"));   // isNaN is Converting a Number 
console.log(typeof isNaN);     // function

console.log(Number.isNaN("hello"));   // false (because Strictly Check);

console.log(Number.isNaN(NaN));   // true  (is Stricty check value is NaN);

console.log(typeof NaN);  // number 
console.log(NaN == NaN) ;  // false

