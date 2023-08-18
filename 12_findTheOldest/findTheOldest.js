const findTheOldest = function (array) {
  const age = array.map((elem) => {
    if (elem.hasOwnProperty("yearOfDeath")) {
      return elem.yearOfDeath - elem.yearOfBirth;
    }
    return new Date().getFullYear() - elem.yearOfBirth;
  });
  let oldest = 0;
  for (let i = 0; i < age.length; i++) {
    if (age[i] === Math.max(...age)) {
      oldest = i;
    }
  }
  return array[oldest];
};

// Do not edit below this line
module.exports = findTheOldest;
