function movesToSeat (seats, students) {
    seats.sort((a,b) => a-b);
    students.sort((a,b) => a-b );
    let moves = 0;
    
    for (let i = 0; i < seats.length; i++) {
        if (seats[i] === students[i]) {
            continue
        } else {
            moves += Math.abs(seats[i] - students[i])
        }
    }
    return moves
}

console.log(movesToSeat([3,1,5], [2,7,4]));
console.log(movesToSeat([4,1,5,9], [1,3,2,6]));
console.log(movesToSeat([2,2,6,6], [1,3,2,6]));
console.log(movesToSeat([3,20,17,2,12,15,17,4,15,20], [10,13,14,15,5,2,3,14,3,18]))