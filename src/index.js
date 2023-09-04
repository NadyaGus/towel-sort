
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
  if (matrix === undefined) {
    return [];
  } else if (matrix.length === 0) {
    return [];
  } else {
    let arr =[];
    for (i = 0; i < matrix.length; i++) {
      (i % 2 === 0 || i === 0) ? arr.push(matrix[i].sort((a, b) => (a - b))) : arr.push(matrix[i].sort((a, b) => (b - a)));
    }
    return arr.flat();
  }
  }
  
