let number_1 = Number(prompt("Enter a number: ", ""))
let operand = prompt("Enter an operand: ", "")
let number_2 = Number(prompt("Enter another number: ", ""))


if (operand == "+"){
    alert(number_1 + number_2)
}else if (operand == "-"){
    alert(number_1 - number_2)
}else if (operand == "*"){
    alert(number_1 * number_2)
}else if (operand == "/"){
    alert(number_1 / number_2)
}else if (operand == "%"){
    alert(number_1 % number_2)
}else if (operand == "**"){
    alert(number_1 ** number_2)
}else{
    alert("Provide Correct Input")
}