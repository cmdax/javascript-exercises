// Celsius is 5/9 of (Fahrenheit - 32)
const convertToCelsius = function(tempF) {
  return Math.round((5/9 * (tempF - 32)) * 10) / 10;
};

// Fahrenheit is 9/5 of Celsius + 32
const convertToFahrenheit = function(tempC) {
  return Math.round((9/5 * tempC + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
