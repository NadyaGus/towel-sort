
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
  if (matrix === undefined) {
    return [];
  } else if (matrix.length === 0) {
    return [];
  } else {
    matrix[0].sort((a, b) => (a - b));
    matrix[1].sort((a, b) => (b - a));
    matrix[2].sort((a, b) => (a - b));
    return matrix.flat();
  }
  }


  /*
  попробовать сделать новый массив

  */
  
