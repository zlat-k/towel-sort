
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix===undefined){
        return [];
    }
    let res = [];
    let tmp = 0;
    for (let i = 0; i < matrix.length; i++) {
        if (i !== 0 && i % 2 !== 0) {
            for (let j = matrix[i].length-1; j > -1; j--) {
                res[tmp] = matrix[i][j];
                tmp++
            }
            continue;
        }
        for (let j = 0; j < matrix[i].length; j++) {
            res[tmp] = matrix[i][j];
            tmp++

        }

    }

    return res;
}
