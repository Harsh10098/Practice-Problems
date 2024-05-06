let input = prompt("Enter a string: ").toLowerCase();

function array_split(user_input) {
    let result = [];
    let arr_obj = {}
    for (let i of input) {
        if (arr_obj[i]) {
            arr_obj[i] += 1;
        } else {
            arr_obj[i] = 1;
        }
    }

    for (let j in arr_obj) {
        result.push({ alpha: j, number: arr_obj[j] });
    }

    return result
}

console.log(array_split(input));