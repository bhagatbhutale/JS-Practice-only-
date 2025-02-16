// Q : Given Array each element return in arrray of greter than key value ?

let str = ["apple", "banana",  "abc","cherry", "ng"];
let key = 3;

const strResult = str.filter((element) => {
    if(element.length > key) {
        return element
    }
})
console.log(strResult)