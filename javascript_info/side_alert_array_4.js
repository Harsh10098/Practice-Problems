function arrayOfArray(arr, len) {
    let resultArr = []
    for(let i = 0; i < arr.length; i += len) {
        let tempResult = arr.slice(i, i + len)
        resultArr.push(tempResult)
    }
    return resultArr
}

let testArr = [1, 2, 3, 4, 5, 6, 7]
let testLen = 2;

console.log(arrayOfArray(testArr, testLen));