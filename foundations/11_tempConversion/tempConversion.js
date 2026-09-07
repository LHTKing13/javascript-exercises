const convertToCelsius = function (f) {
  // c = (f - 32) / 1.8
  return parseFloat(((f - 32) / 1.8).toFixed(1));
};

const convertToFahrenheit = function (c) {
  // f = (c * 1.8) + 32
  return parseFloat((c * 1.8 + 32).toFixed(1));
};

console.log(convertToCelsius(-100));
console.log(convertToFahrenheit(37.77778));
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
