function plusOne (arr) {
    let result = []
    let string = BigInt(arr.join('')) + 1n;
    let newArr = string.toString()
    for (let i of newArr) {
        result.push(i)
    }
    return result
}

console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))