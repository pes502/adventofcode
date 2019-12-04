const expect = require('chai').expect;
const { part1 } = require('./solution');

describe('Day 2', function() {
  describe('Part 1', function() {
    it('[1,0,0,0,99] becomes 2', function() { expect(part1('1,0,0,0,99', 0, 0)).to.equal(2); });
    it('[2,3,0,3,99] becomes 2', function() { expect(part1('2,3,0,3,99', 3, 0)).to.equal(2); });
    it('[2,4,4,5,99,0] becomes 2', function() { expect(part1('2,4,4,5,99,0', 4, 4)).to.equal(2); });
    it('[1,1,1,4,99,5,6,0,99] becomes 30', function() { expect(part1('1,1,1,4,99,5,6,0,99', 1, 1)).to.equal(30); });
    it('[1,9,10,3,2,3,11,0,99,30,40,50] becomes 3500', function() { expect(part1('1,9,10,3,2,3,11,0,99,30,40,50', 9, 10)).to.equal(3500); });
  });
  describe('Part 2', function() {
    it('Impossibru to write test :D', function() { expect(0).to.equal(0); });
  });
});