function interSectionArray(arr_1, arr_2) {
    let result = []
    let passed = [];
    for (let i of arr_1) {
        if (passed.includes(i)) {
            continue
        }
        if (arr_2.includes(i)) {
            result.push(i);
            passed.push(i)
        }
    }
    return result
}

let num1 = [1,2,2,1];
let num2 = [2,2];
let num3 = [4,9,5];
let num4 = [9,4,9,8,4]

console.log(interSectionArray(num1, num2))
console.log(interSectionArray(num3, num4))
