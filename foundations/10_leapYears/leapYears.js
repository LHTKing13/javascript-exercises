// divisable by 4 but not devisable by 100 except if also devisable by 400
const leapYears = function (year) {
  if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
    return true;
  } else if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
