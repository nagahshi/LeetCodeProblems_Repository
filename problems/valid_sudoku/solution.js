/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    var row = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    var col = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    var mat = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

    for (var i = 0; i < 9; i++) {  //all rows set;
        for (var j = 0; j < 9; j++) {
            if (board[i][j] === '.') continue;

            var mask = 1 << (board[i][j]);
            if (((row[i] & mask) !== 0) || ((col[j] & mask) !== 0) || ((mat[Math.floor(i / 3)][Math.floor(j / 3)] & mask) !== 0)) return false;
            else {
                row[i] |= mask;
                col[j] |= mask;
                mat[Math.floor(i / 3)][Math.floor(j / 3)] |= mask;
            }
        }
    }

    return true;
};