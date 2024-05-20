function positionFinding(nums, target) {
    let firstPosition = -1;
    let lastPosition = -1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            if (firstPosition == -1) {
                firstPosition = i;
            }
            lastPosition = i;
        }
    }

    if (firstPosition == -1) {
        return [-1, -1];
    }

    return [firstPosition, lastPosition];
}

console.log(positionFinding([5, 7, 7, 8, 8, 10], 8)); 
console.log(positionFinding([5, 7, 7, 8, 8, 10], 6)); 
console.log(positionFinding([1], 1));                
