const expect = require('chai').expect;
const { part1, part2 } = require('./solution');

describe('Day 1', function() {
  describe('Part 1', function() {
    it('For a mass of 12, the fuel required is 2', function() { expect(part1('12')).to.equal(2); });
    it('For a mass of 14, the fuel required is 2', function() { expect(part1('14')).to.equal(2); });
    it('For a mass of 1969, the fuel required is 654', function() { expect(part1('1969')).to.equal(654); });
    it('For a mass of 100756, the fuel required is 33583', function() { expect(part1('100756')).to.equal(33583); });
  });

  describe('Part 2', function() {
    it('For a mass of 12, the fuel required is 2', function() { expect(part2('12')).to.equal(2); });
    it('For a mass of 14, the fuel required is 2', function() { expect(part2('14')).to.equal(2); });
    it('For a mass of 1969, the fuel required is 966', function() { expect(part2('1969')).to.equal(966); });
    it('For a mass of 100756, the fuel required is 50346', function() { expect(part2('100756')).to.equal(50346); });
  });
});