const fibonacci = function (num) {
  num = +num;
  if (num < 0) {
    return "OOPS";
  }
  const part1 = Math.pow(1 + Math.sqrt(5), num);
  const part2 = Math.pow(1 - Math.sqrt(5), num);
  const part3 = Math.pow(2, num) * Math.sqrt(5);
  let result = (part1 - part2) / part3;
  return Math.round(result);
};

// Do not edit below this line
module.exports = fibonacci;
