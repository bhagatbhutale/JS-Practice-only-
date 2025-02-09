// Let :-  reference error : Cannot access "a" before initilization
console.log(a);  
let a = 10;

console.log(a)// output 10;

// reason : 
// --> let a is hoisted but it's in the TDZ
// --> accessing a before this line causes Reference error 
