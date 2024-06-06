function handOfStraights (hand, groupSize) {
    if (hand.length % groupSize !== 0) return false;
    let result = [];
    hand.sort((a,b) => a-b);
    while (hand.length != 0) {
        let temp = []
        for (let i = 0; i < hand.length; i++) {
            if (temp.includes(hand[i])) {
                continue
            } else if (temp.length === groupSize) {
                break
            } else {
                temp.push(hand[i])
                hand.splice(i, 1);
                i--
            }
        }
        let checkCons = checkConsecutive(temp, groupSize)
        result.push(checkCons)
    }
    // result.map((item) => item.length == groupSize)
    for (let x of result ) {
        if (x === false) return false
    }
    return true
}

function checkConsecutive(arr, groupSize) {
    if (arr.length != groupSize) return false
    let cons = true;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] !== arr[i] + 1) {
            cons = false;
        }
    }
    return cons
}
