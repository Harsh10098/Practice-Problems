function mergeTriplets(triplets, target) {
    let current = [0,0,0];

    for (let triplet of triplets) {
        if (triplet[0] <= target[0] && triplet[1] <= target[1] && triplet[2] <= target[2]) {
            current = [
                Math.max(current[0], triplet[0]),
                Math.max(current[1], triplet[1]),
                Math.max(current[2], triplet[2])
            ];
        }
    }

    return current[0] === target[0] && current[1] === target[1] && current[2] === target[2];
};

console.log(mergeTriplets([[2,5,3],[2,3,4],[1,2,5],[5,2,3]], [5,5,5]))