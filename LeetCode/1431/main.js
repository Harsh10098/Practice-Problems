function kidsWithCandy (arr, extraCandy) {
    let maxCandy = Math.max(...arr);
    let result = []
    for (let i of arr) {
        if (i + extraCandy >= maxCandy) {
            result.push(true)
        } else {
            result.push(false)
        }
    }
    return result
}

let candies = [2,3,5,1,3];
let extraCandies = 3;

let candies2 = [4,2,1,1,2];
let extraCandies2 = 1;

console.log(kidsWithCandy(candies, extraCandies));
console.log(kidsWithCandy(candies2, extraCandies2));
