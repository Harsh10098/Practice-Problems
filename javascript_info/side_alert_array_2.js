let u_input = prompt("Enter a string: ").toLocaleLowerCase();
let vowels = ["a", "e", "i", "o", "u"];

function countRepeatingElement(str, startIndex) {
    let counter = 1;
    let currentChar = str[startIndex];
    for (let i = startIndex + 1; i < str.length; i++) {
        if (str[i] === currentChar) {
            counter++;
        } else {
            break;
        }
    }
    return counter;
}

function repeating_vowels(u_input) {
    let result_string = "";
    for (let i = 0; i < u_input.length; i++) {
        if (vowels.includes(u_input[i])) {
            let num = countRepeatingElement(u_input, i);
            if (num > 1) {
                result_string += num;
                i += num - 1;
                let temp = `(${u_input[i]})`
                result_string += temp;
            } else {
                result_string += u_input[i];
            } 
        } else {
            result_string += u_input[i];
        }
    }
    return result_string
}

console.log(repeating_vowels(u_input));