const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (nums) {
  let result = 0;
  for (const num of nums) {
    result += num;
  }
  return result;
};

const multiply = function (nums) {
  let result = nums[0];
  for (let i = 1; i < nums.length; i++) {
    result *= nums[i];
  }
  return result;
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num) {
  if (num < 1) {
    return 1;
  }
  return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
