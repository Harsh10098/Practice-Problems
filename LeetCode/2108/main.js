function firstPalindrome(arr) {
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        if (word === word.split("").reverse().join("")) {
            return word;
        }
    }
    return "";
}

let test1 = ["abc","car","ada","racecar","cool"];
let test2 = ["notapalindrome","racecar"];
let test3 = ["def","ghi"];

console.log(firstPalindrome(test1));
console.log(firstPalindrome(test2));
console.log(firstPalindrome(test3));