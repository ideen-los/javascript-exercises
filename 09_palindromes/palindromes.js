const palindromes = function (string) {
  const regex = /[a-z-0-9]/gi;
  let array1 = string.toLowerCase().match(regex);
  let array2 = [...array1].reverse();
  let found = true;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      found = false;
      break;
    }
  }
  return found;
};

// Do not edit below this line
module.exports = palindromes;
