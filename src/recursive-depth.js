const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {


  calculateDepth(arr) {
    let depth = 1;
    let counter = 1;
    for (let item of arr) {
      if (Array.isArray(item)) {
        counter = 1 + this.calculateDepth(item);
      }
    

    if (counter > depth) {
      depth = counter;
    }
  }
    counter = 1;
    return depth;
  }

}
