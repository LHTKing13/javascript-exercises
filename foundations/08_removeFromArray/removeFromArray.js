const removeFromArray = function (arr, ...args) {
  // args is an array
  return arr.filter((x) => !args.includes(x));
};

console.log(removeFromArray([1, 2, 3, 3, 4, 5], 3, 4, "tacos"));

// Do not edit below this line
module.exports = removeFromArray;
