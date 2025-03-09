// Callback 

function task1(callback) {
    console.log("wait for 3s...")
    setTimeout(() => {
        console.log("Tasks 1 Completed !")
        callback()
    }, 3000)
}

function task2(callback) {
    console.log("wait for 4s...");
    setTimeout(() => {
        console.log("Task 2 is Completed !")
        callback()
    }, 3000)
}


task1(() => {
    task2(() => {
        console.log("All tasks is Cmpleted")
    })
})