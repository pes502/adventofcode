function countFuel(mass) {
  return Math.floor(mass / 3) - 2;
}

exports.part1 = (input) => {
  var result = 0;

  for(item of input.toString().split('\r\n')) {
    result += countFuel(item);
  }

  return result;
};

exports.part2 = (input) => {
  var result = 0;

  for(item of input.toString().split('\r\n')) {
    var tempCounter = countFuel(item);
    while(tempCounter > 0) {
      result += tempCounter;
      tempCounter = countFuel(tempCounter);
    }
  }

  return result;
}
