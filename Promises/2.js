// Fetching Api 
// try & catch
async function fetchData() {
    try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        // console.log(response);
    const data = await response.json()
    console.log(data);
    } catch (error) {
        console.log("E: ", error)
    }
}
fetchData() 




// using .then() catch() method
fetch("https://jsonplaceholder.typicode.com/users")
.then((respnse) => {
    return respnse.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))






