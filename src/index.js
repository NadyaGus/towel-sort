
// You should implement your task here.

module.exports = function towelSort (matrix) {

  // сначала .flat потом .sort
  matrix[0].sort();
  matrix[1].sort().reverse();
  matrix[2].sort();

  

  return matrix.flat();
}
