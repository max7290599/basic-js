const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  const CAT = "^^";
  let count = 0;


  if (!matrix || matrix == []) return 0;

  matrix.filter(array => array.filter(item => item === CAT ? count++ : count))
  return count;
}
