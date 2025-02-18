// Async and Await 

// Ex 1 --> 
// async function fetchData() {
//     let data = await fetch("https://jsonplaceholder.typicode.com/users/1");
//     let user = await data.json()
//     console.log(user)
// }
// fetchData()


// Ex 2

const container = document.getElementById("container")
const btn = document.querySelector("#btn")

async function fetchData() {
   try {
    container.innerHTML = `<h2 style="color: blue;">Loading data...</h2>`;

     let response = await fetch("https://jsonplaceholder.typicode.com/users/7");
     if(!response.ok) throw new Error("User Not Found")
        let user = await response.json()

    // console.log(user.name)
    setTimeout(() => {
        container.innerHTML = "Data is Fetching Wait for 5s..."
         container.innerHTML = `
   <h2>${user.name} </h3>
    `;
    }, 5000)
   

   }
   catch (error) {
    console.log("Error :", error.message);
   }
}

btn.addEventListener("click", fetchData)

// Ex 3 
