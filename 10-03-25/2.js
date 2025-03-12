


function createCounter() {
    let count = 0; // Private variable

    return function () {
        count++; // Increment count
        console.log(count);
    };
}

const counter = createCounter();
counter(); // ✅ Output: 1
counter(); // ✅ Output: 2
counter(); // ✅ Output: 3
