Number.prototype.setIns = function() {
  return new Array(5 + 1 - (this + '').length).join('0') + this;
}

class Computer {
  constructor(pointer, memory, phase) {
    this.pointer = pointer;
    this.memory = this._createMemory(memory);
    this.phase = phase;
    this.phaseUsed = false;
  }
  
  _createMemory(memory) {
    return memory.split(',').map(elem => parseInt(elem));
  }

  compute(input) {
    while(this.pointer < this.memory.length) {
      var opcode = parseInt(this.memory[this.pointer].setIns().slice(-2));
      var param1 = parseInt(this.memory[this.pointer].setIns().slice(2,3)) == 1 ? this.pointer+1 : this.memory[this.pointer+1];
      var param2 = parseInt(this.memory[this.pointer].setIns().slice(1,2)) == 1 ? this.pointer+2 : this.memory[this.pointer+2];
      var param3 = parseInt(this.memory[this.pointer].setIns().slice(0,1)) == 1 ? this.pointer+3 : this.memory[this.pointer+3];
  
      switch(opcode) {
        case 1: this.memory[param3] = this.memory[param1] + this.memory[param2]; this.pointer += 4; break;
        case 2: this.memory[param3] = this.memory[param1] * this.memory[param2]; this.pointer += 4; break;
        case 3: this.memory[param1] = !this.phaseUsed ? this.phase : input; this.phaseUsed = true; this.pointer += 2; break;
        case 4: this.pointer += 2; return this.memory[param1];
        case 5: this.memory[param1] != 0 ? this.pointer = this.memory[param2] : this.pointer += 3; break;
        case 6: this.memory[param1] == 0 ? this.pointer = this.memory[param2] : this.pointer += 3; break;
        case 7: this.memory[param1] < this.memory[param2] ? this.memory[param3] = 1 : this.memory[param3] = 0;  this.pointer += 4; break;
        case 8: this.memory[param1] == this.memory[param2] ? this.memory[param3] = 1 : this.memory[param3] = 0; this.pointer += 4; break;
        case 99: return null;
      }
    } 
  }
}

function startCluster(phaseSet, input) {
  var signals = [];
  var perm = a => a.length ? a.reduce((r, v, i) => [ ...r, ...perm([ ...a.slice(0, i), ...a.slice(i + 1) ]).map(x => [ v, ...x ])], []) : [[]];

  perm(phaseSet).forEach(function(phases) {
    var computers = phases.map(phase => new Computer(0, input, phase));
    var inputVal = 0;
    var breakThis = false;
    
    while(!breakThis) {
      computers.forEach(function(computer) {
        var ret = computer.compute(inputVal);
        if(ret != null) { inputVal = ret; }
        else { breakThis = true; signals.push(inputVal); }
      })
    }
  });
  
  return Math.max.apply(Math, signals); 
}

exports.part1 = (input) => {
  return startCluster([0,1,2,3,4], input);
};

exports.part2 = (input) => {
  return startCluster([5,6,7,8,9], input);
};