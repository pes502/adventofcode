function getRange(range) {
  return range.split("-");
}

function getPair(number) {
  var pattern = /(\d)\1/;  

  if(number.toString().match(pattern)) {      
    var highest = 0;
    var gotIt = true;
    number.toString().split('').map(Number).forEach(number => {
      if(number >= highest) {
        highest = number;
      }
      else {
        gotIt = false;
      }
    });
    if(gotIt) {
      return true;
    }
  }
}

exports.part1 = (input) => {
  var range = getRange(input);
  var result = 0;

  while(range[0] <= range[1]) {    
    if(getPair(range[0])) {
      result++;
    }
    range[0]++;
  }
  return result;
};

exports.part2 = (input) => {
  var range = getRange(input);
  var result = 0;

  while(range[0] <= range[1]) {    
    if(getPair(range[0])) {

      var sorted = range[0].toString().split('').map(Number).reduce(function (acc, curr) {
        acc[curr] ? acc[curr]++ : acc[curr] = 1;        
        return acc;
      }, {});
      
      if(Object.keys(sorted).filter(el => sorted[el] == 2).length > 0)
      result++;

    }
    range[0]++;
  }
  return result;
};