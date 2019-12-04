function compute(input, noun, verb) {
  var ints = [];
  
  input.split(",").forEach(element => {
    ints.push(parseInt(element));
  });

  ints[1] = noun;
  ints[2] = verb;

  var i = 0;
  while(i < ints.length) {
    switch(ints[i]) {
      case 1: 
        ints[ints[i+3]] = ints[ints[i+1]] + ints[ints[i+2]];
      break;
      case 2: 
        ints[ints[i+3]] = ints[ints[i+1]] * ints[ints[i+2]];
      break;
      case 99:
        return ints[0];
      default:
        return 0;
    }
    i += 4;
  } 
}

exports.part1 = (input, noun, verb) => {
  // test hack
  if(noun === undefined) noun = 12
  if(verb === undefined) verb = 2

  return compute(input, noun, verb);
};

exports.part2 = (input) => { 
  for (i = 0; i < 100; i++) {
    for (j = 0; j < 100; j++) {
      if(compute(input, i, j) == 19690720) {
        return i.toString() + j.toString();
      }
    }
  }
};