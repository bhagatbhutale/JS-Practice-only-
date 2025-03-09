// Promise 

function fetchData() {
    console.log("wait for Data fetching...")
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve("Data Fetched Successfully")
        }, 3000)
    })
}

fetchData().then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})

