// 3. Var :-
//--> var is hoisted and initilized with undefined , so no Reference Error

console.log(x);

var x = "i am a tdz using var";
console.log(x);


// 4. TDZ in Block : Reference error
//--> y is in TDZ inside the { }
{
    console.log(y) // Reference Error

    let y = 30;
    console.log(y); // 30
}


// 5. TDZ in Function : Reference Errir
//-->
function tdzFunction() {
    console.log(p); // Reference Error
    let p = 50;
}
tdzFunction()