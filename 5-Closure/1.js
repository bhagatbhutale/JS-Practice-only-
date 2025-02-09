// Closure :-
// --> Closure in JavaScript is a combination of a function and the lexical environment (scope).
// --> This happens because of lexical scoping, where inner functions have access to outer function variables.

// Basic example 
function outer() {
  let outerVar = "i am a outer";
  function inner() {
    console.log(outerVar); // can access outervar
  }
  // This is a closure because innerFunction still has access to outerVar.

  return inner;
}
const myClosure = outer();
myClosure() // i am a outer