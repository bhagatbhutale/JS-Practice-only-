// 👉 Using async/await (Handling Asynchronous Code Easily)

function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Fetched !");
        }, 3000)
    })
}

async function getData() {
    console.log("Data Loading...");
    let result = await fetchData();
    console.log(result);
}

getData()