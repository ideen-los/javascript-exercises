const convertToCelsius = function (fahrenheit) {
  let calcFahrenheit = (fahrenheit - 32) * (5 / 9);
  if (Number.isInteger(calcFahrenheit) === true) {
    return calcFahrenheit;
  } else {
    return +calcFahrenheit.toFixed(1);
  }
};

const convertToFahrenheit = function (celsius) {
  let calcCelsius = celsius * (9 / 5) + 32;
  if (Number.isInteger(calcCelsius) === true) {
    return calcCelsius;
  } else {
    return +calcCelsius.toFixed(1);
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
