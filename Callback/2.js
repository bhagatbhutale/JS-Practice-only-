// 👉 Callback Function :-
// -->  A callback is a function passed as a argument to another function.

const calculate = (a, b, operation) => {
    return operation(a,b);
}

const multipleF = (num1, num2) => {
    return num1 * num2;
}

const result = calculate(3,4, multipleF);
console.log(result)  // output : 12

