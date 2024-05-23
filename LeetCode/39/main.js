function combinationSum(candidates, target) {
    let result = [];
    findCombinations(candidates, target, [], 0, result);
    return result;
}

function findCombinations(candidates, target, currentCombination, startIndex, result) {
    if (target === 0) {
        result.push([...currentCombination]); 
        return;
    }

    for (let i = startIndex; i < candidates.length; i++) {
        if (candidates[i] <= target) {
            currentCombination.push(candidates[i]);
            findCombinations(candidates, target - candidates[i], currentCombination, i, result);
            currentCombination.pop();
        }
    }
}

console.log(combinationSum([2, 3, 6, 7], 7));
console.log(combinationSum([2, 3, 5], 8));