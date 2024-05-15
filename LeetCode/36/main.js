function checkingSudoku(board) {
    let horizontalCheck = checkHorizontalRow(board);
    let verticalCheck = checkVerticalColumns(board);
    let subgridCheck = makingSubGrid(board);
    
    return horizontalCheck && verticalCheck && subgridCheck
};

function checkHorizontalRow(board) {
    for (let i = 0; i < board.length; i++) {
        let oneDArr = board[i]
        let resultArrRow = []
        for (let j = 0; j < oneDArr.length; j++) {
            if (oneDArr[j] != '.') {
                if (resultArrRow.includes(oneDArr[j])) {
                    return false
                } else {
                    resultArrRow.push(oneDArr[j])
                }
            } 
        }
    }
    return true
};

function checkVerticalColumns(board) {
    for (let col = 0; col < board.length; col++) {
        let resultArrColumn = [];
        for (let row = 0; row < board.length; row++) {
            if (board[row][col] !== '.') {
                if (resultArrColumn.includes(board[row][col])) {
                    return false;
                } else {
                    resultArrColumn.push(board[row][col]);
                }
            }
        }
    }
    return true;
}

function makingSubGrid(board) {
    for (let startRow = 0; startRow < board.length; startRow += 3) {
        for (let startCol = 0; startCol < board.length; startCol += 3) {
            let subgrid = [];
            for (let row = startRow; row < startRow + 3; row++) {
                subgrid.push(board[row].slice(startCol, startCol + 3));
            }
            if (!checkSubgrid(subgrid)) {
                return false;
            }
        }
    }
    return true;
}

function checkSubgrid(subgrid) {
    let resultArr = [];
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            if (subgrid[row][col] !== '.') {
                if (resultArr.includes(subgrid[row][col])) {
                    return false;
                } else {
                    resultArr.push(subgrid[row][col]);
                }
            }
        }
    }
    return true;
}

console.log(checkingSudoku([["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]));

console.log(checkingSudoku([["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]))



/*
    Optimized Version:

    function checkSudoku(board) {
        let answer = new Array(27).fill().map(() => new Set());
        for (let i=0; i<9; i++){
            for (let j=0; j<9; j++){
                const item = board[i][j];
                if (item !== '.'){
                    if (answer[i].has(item)) return false
                    else answer[i].add(item)
                    if (answer[9+j].has(item)) return false
                    else answer[9+j].add(item)
                    const index = 3*Math.floor(i/3) + Math.floor(j/3);
                    if (answer[18+index].has(item)) return false
                    else answer[18+index].add(item)
                }
            }
        }
        return true;
    }
*/ 