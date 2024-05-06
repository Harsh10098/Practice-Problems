function joiningArray (arrOfArr) {
    let result = []
    for (let i of arrOfArr) {
        for (let j of i) {
            result.push(j)
        }
    }
    return result
    // return arrOfArr.flat(Infinity)
}

testArr = [[1, 2], [3, 4], [5, 6], [7]]
console.log(joiningArray(testArr))