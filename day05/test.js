const expect = require('chai').expect;
const { part1, part2 } = require('./solution');

describe('Day 5', function() {
  describe('Part 1', function() {
    it('[1002,4,3,4,33] becomes 0', function() { expect(part1('1002,4,3,4,33')).to.equal(0); });
  });

  describe('Part 2', function() {
    it('[3,9,8,9,10,9,4,9,99,-1,8] with input [0] becomes 0', function() { expect(part2('3,9,8,9,10,9,4,9,99,-1,8', 0)).to.equal(0); });
    it('[3,9,8,9,10,9,4,9,99,-1,8] with input [8] becomes 1', function() { expect(part2('3,9,8,9,10,9,4,9,99,-1,8', 8)).to.equal(1); });
    it('[3,9,7,9,10,9,4,9,99,-1,8] with input [7] becomes 1', function() { expect(part2('3,9,7,9,10,9,4,9,99,-1,8', 7)).to.equal(1); });
    it('[3,9,7,9,10,9,4,9,99,-1,8] with input [8] becomes 0', function() { expect(part2('3,9,7,9,10,9,4,9,99,-1,8', 8)).to.equal(0); });
    it('[3,3,1105,-1,9,1101,0,0,12,4,12,99,1] with input [0] becomes 0', function() { expect(part2('3,3,1105,-1,9,1101,0,0,12,4,12,99,1', 0)).to.equal(0); });
    it('[3,3,1105,-1,9,1101,0,0,12,4,12,99,1] with input [5] becomes 1', function() { expect(part2('3,3,1105,-1,9,1101,0,0,12,4,12,99,1', 5)).to.equal(1); });
    it('[3,12,6,12,15,1,13,14,13,4,13,99,-1,0,1,9] with input [0] becomes 0', function() { expect(part2('3,12,6,12,15,1,13,14,13,4,13,99,-1,0,1,9', 0)).to.equal(0); });
    it('[3,12,6,12,15,1,13,14,13,4,13,99,-1,0,1,9] with input [5] becomes 1', function() { expect(part2('3,12,6,12,15,1,13,14,13,4,13,99,-1,0,1,9', 5)).to.equal(1); });
  });
});