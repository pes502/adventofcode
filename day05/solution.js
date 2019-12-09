Number.prototype.setIns = function() {
  return new Array(5 + 1 - (this + '').length).join('0') + this;
}

function compute(input, dataInput) {
  var ints = [];
  var i = 0;
  var dataOutput = 0;
  
  input.split(",").forEach(element => {
    ints.push(parseInt(element));
  });

  while(i < ints.length) {
    var opcode = parseInt(ints[i].setIns().slice(-2));
    var param1 = parseInt(ints[i].setIns().slice(2,3)) == 1 ? i+1 : ints[i+1];
    var param2 = parseInt(ints[i].setIns().slice(1,2)) == 1 ? i+2 : ints[i+2];
    var param3 = parseInt(ints[i].setIns().slice(0,1)) == 1 ? i+3 : ints[i+3];

    switch(opcode) {
      case 1: ints[param3] = ints[param1] + ints[param2]; i += 4; break;
      case 2: ints[param3] = ints[param1] * ints[param2]; i += 4; break;
      case 3: ints[param1] = dataInput;  i += 2; break;
      case 4: dataOutput = ints[param1]; i += 2; break;
      case 5: ints[param1] != 0 ? i = ints[param2] : i += 3; break;
      case 6: ints[param1] == 0 ? i = ints[param2] : i += 3; break;
      case 7: ints[param1] < ints[param2] ? ints[param3] = 1 : ints[param3] = 0;  i += 4; break;
      case 8: ints[param1] == ints[param2] ? ints[param3] = 1 : ints[param3] = 0; i += 4; break;
      case 99: return dataOutput;
    }
  } 
}

exports.part1 = (input) => {
  return compute(input, 1);
};

exports.part2 = (input, dataInput) => { 
  if(dataInput === undefined) dataInput = 5;
  return compute(input, dataInput);
};