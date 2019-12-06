const expect = require('chai').expect;
const { part1, part2 } = require('./solution');

describe('Day 4', function() {
  describe('Part 1', function() {
    it('111111 is VALID', function() { expect(part1('111111-111111')).to.equal(1); });
    it('223450 is INVALID', function() { expect(part1('223450-223450')).to.equal(0); });
    it('123789 is INVALID', function() { expect(part1('123789-123789')).to.equal(0); });
  });
  describe('Part 2', function() {
    it('112233 is VALID', function() { expect(part2('112233-112233')).to.equal(1); });
    it('123444 is INVALID', function() { expect(part2('123444-123444')).to.equal(0); });
    it('111122 is VALID', function() { expect(part2('111122-111122')).to.equal(1); });
  });
});