const sumAll = function (numX, numY) {
  if (!Number.isInteger(numX) || !Number.isInteger(numY) || numX < 0 || numY < 0) {
    return "ERROR";
  } else {
    let smallNumber = numX > numY ? numY : numX;
    let bigNumber = numY > numX ? numY : numX;

    let sum = 0;
    for (let i = smallNumber; i <= bigNumber; i++) {
      sum += i;
    }
    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;
