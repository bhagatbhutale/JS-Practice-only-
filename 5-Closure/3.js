// Closure With Parameter
// -->
function multipliyer(factor) {
    return function(number) {
        return factor * number;
    }
}

let multiVar = multipliyer(4);
console.log(multiVar(5));


// Ex.2  : divisible
function num1(n) {
    return function(o) {
        return n / o;
    }
}
const num1var = num1(25);
console.log(num1var(4));
