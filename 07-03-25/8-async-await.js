function task1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task 1 completed");
      resolve();
    }, 1000);
  });
}

function task2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task 2 completed");
      resolve();
    }, 1500);
  });
}

function task3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task 3 completed");
      resolve();
    }, 1200);
  });
}

function task4() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task 4 completed");
      resolve();
    }, 800);
  });
}

function task5() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task 5 completed");
      resolve();
    }, 1000);
  });
}

async function runTask() {
    await task1()
    await task2()
    await task3()
    await task4()
    await task5()

    console.log("All tasks is completed ")
}

runTask()
