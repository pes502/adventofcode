const expect = require('chai').expect;
const { part1, part2 } = require('./solution');

describe('Day 9', function() {
  describe('Part 1', function() {
    it('[1102,34915192,34915192,7,4,7,99,0] becomes 1219070632396864', function() { expect(part1('1102,34915192,34915192,7,4,7,99,0')).to.equal(1219070632396864); });
    it('[104,1125899906842624,99] becomes 1125899906842624', function() { expect(part1('104,1125899906842624,99')).to.equal(1125899906842624); });
  });

  describe('Part 2', function() {
    it('[1102,34915192,34915192,7,4,7,99,0] becomes 1219070632396864', function() { expect(part2('1102,34915192,34915192,7,4,7,99,0')).to.equal(1219070632396864); });
    it('[104,1125899906842624,99] becomes 1125899906842624', function() { expect(part2('104,1125899906842624,99')).to.equal(1125899906842624); });
  });
});