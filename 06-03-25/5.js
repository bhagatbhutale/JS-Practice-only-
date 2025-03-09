// 👉  Fetch data Using API 

async function fetchUser() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    let data = await response.json()
    console.log(data);
    }
    catch(error) {
        console.error("Error Occur" , error)
    }
}

fetchUser()
