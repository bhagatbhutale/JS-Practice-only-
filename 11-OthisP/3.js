// 3. Constructor Calling 

// --> this points to the newly created Object

function abc(name, rollNo) {
    console.log(this, "this")
    this.name = name
    this.rollNo = rollNo
}

let p1 = new abc("Bhagat", 14)
let p2 = new abc("Ajay") // undefinid

console.log(p1)
console.log(p2);


