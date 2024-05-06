function countingPairs(array, value) {
    let counter = 0;
    let passedElement = []
    for (let i of array) {
        for (let j of array) {
            if (i + j == value) {
                if (passedElement.includes(j) || passedElement.includes(i) || i == j) {
                    continue
                } else {
                    counter++
                    passedElement.push(j)
                    console.log(i, j)
                }
            }
        }
    }
    return counter 
}

let test_arr_1 = [1, 2, 3, 4, 5, 6, 8];
alert(countingPairs(test_arr_1, 10 ));