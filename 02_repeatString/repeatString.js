const repeatString = function (string, num) {
  let returnValue = "";
  if (num < 0) {
    return "ERROR";
  }
  for (let i = num; i > 0; i--) {
    returnValue += string;
  }
  return returnValue;
};

// Do not edit below this line
module.exports = repeatString;
