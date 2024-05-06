// function min(a, b){
//     return (a > b) ? a : b
// }

// let a = +prompt("Enter a number: ", "")
// let b = +prompt("Enter another number: ", "")

// alert(min(a,b))

function pow(x, y){
    return x ** y
}

let x = +prompt("Enter a number: ", "")
let y = +prompt("Enter another number: ", "")

if (x < 1){
    alert("Please enter a valid number.");
}else {
    alert(pow(x,y));
}
