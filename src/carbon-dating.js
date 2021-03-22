const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730



    module.exports = function dateSample(sampleActivity) {
        if (!sampleActivity || typeof(sampleActivity) !== 'string' || !isFinite(sampleActivity)) {
            return false;
        } else {
            let number = Number(sampleActivity);

            if (isNaN(number)|| number <= 0 || number>= 15) {

                return false;
            } else {
                let izotop = Math.log(MODERN_ACTIVITY/sampleActivity);

                return Math.ceil(izotop/(0.693/HALF_LIFE_PERIOD));
            }
        }

    };

