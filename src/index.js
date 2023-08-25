
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
  

  matrix[0].sort((a, b) => (a - b));
  matrix[1].sort((a, b) => (b - a));
  matrix[2].sort((a, b) => (a - b));
  
    return matrix.flat();
  }
