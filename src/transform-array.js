const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (Array.isArray(arr)) {
    let array = [];
	let i = 0;
    for (i ; i < arr.length; i++) {
      if (arr[i + 1] === '--double-prev' && arr[i - 1] === '--discard-next' ||
	  arr[i + 1] === '--double-prev' && arr[i - 1] === '--discard-next' ||
        arr[i + 1] === '--discard-prev' ||
        arr[i] === '--discard-prev') {
        continue;
      } else if (arr[i] === '--double-next') {
		  if (i===arr.length-1) {continue} array.push(arr[i + 1]);
      } else if (arr[i] === '--discard-next') {
			if(arr[i+2]==='--double-prev'){
			i+=2;
			}else{ i++;
			}
      }else if (arr[i] === '--double-prev') {
		 if (i===0) {continue}  array.push(arr[i - 1])
	      
      } else {
        array.push(arr[i]);
      }
    }
    return array;

  } else {
    throw new Error('not Array');
  }

};