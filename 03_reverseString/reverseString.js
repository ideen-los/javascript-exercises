const reverseString = function (string) {
  const splittedString = string.split("");
  let joinedString = "";
  for (i = splittedString.length - 1; i >= 0; i--) {
    joinedString += splittedString[i];
  }
  return joinedString;
};

// Do not edit below this line
module.exports = reverseString;
