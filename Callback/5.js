// Callback in Fetching Data (Api Request)

function fetchData(callback) {
    console.log("fetching data...")
    setTimeout(() => {
        let data = {name : "Bhagat", age : 22};
        callback(data);
    }, 3000)
}

function displayData(data) {
    console.log("Data Received :",data)
}

fetchData(displayData);