const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (typeof str === 'boolean') str = str.toString();
  if (str == null) str = null;
  const original = str;

  let repeatTimes = options.repeatTimes;
  if (!repeatTimes) repeatTimes = 1;

  let separator = options.separator;
  if (!separator) separator = '+';

  let addition = options.addition === null ? 'null' :  (typeof options.addition === 'boolean') ?  options.addition.toString() : options.addition;
  if (!addition) addition = '';

  let additionRepeatTimes = options.additionRepeatTimes;
  if (!additionRepeatTimes) additionRepeatTimes = 1;

  let additionSeparator = options.additionSeparator;
  if (!additionSeparator) additionSeparator = '|'

  for (let i = 0; i < repeatTimes; i++) {
    for (let j = 0; j < additionRepeatTimes; j++) {
      str += addition;
      if (j < additionRepeatTimes - 1) str += additionSeparator;

    }
    if (i < repeatTimes - 1) str += separator + original;
  }
  return str;
};
