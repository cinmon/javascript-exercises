const convertToCelsius = function(far_degrees) {

  let cel_degrees = (far_degrees - 32) * (5/9);
  return Math.round(cel_degrees * 10) / 10;

};

const convertToFahrenheit = function(cel_degrees) {

  let far_degrees = cel_degrees * (9/5) + 32;
  return Math.round(far_degrees * 10) / 10;     // Rounds to 1 decimal

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
