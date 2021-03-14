const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730

     function radioactiveDecay() {
         return Math.ceil(Math.log(2) / HALF_LIFE_PERIOD * 1e8) / 1e4;
    }

    module.exports = function dateSample(sampleActivity) {
        if (typeof(sampleActivity) !== 'string' || !sampleActivity || !isFinite(sampleActivity)) {
            return false;
        } else {
            let number = Number(sampleActivity);
            if (isNaN(number)|| number <= 0) {

                return false
            } else {

                return Math.ceil(((Math.log(MODERN_ACTIVITY / number)) / 0.00012094))
            }
        }

    };

