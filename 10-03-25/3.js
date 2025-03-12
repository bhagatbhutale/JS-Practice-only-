function createCounter() {
  let count = 0;

  return {
    increment: function () {
      count++;
      console.log("Increment:", count);
    },
    decrement: function () {
      count--;
      console.log("Decrement:", count);
    },
    reset: function () {
      count = 0;
      console.log("Reset:", count);
    },
    getCount: function () {
      return count;
    },
  };
}

const counter = createCounter();
counter.increment(); // ✅ Output: Increment: 1
counter.increment(); // ✅ Output: Increment: 2
counter.decrement(); // ✅ Output: Decrement: 1
console.log("Current Count:", counter.getCount()); // ✅ Output: Current Count: 1
counter.reset(); // ✅ Output: Reset: 0
