const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
let move = Math.pow(2,disksNumber)-1;

let second = Math.floor(move/(turnsSpeed/3600));

return {'turns': move, 'seconds': second };

};
