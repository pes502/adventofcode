const expect = require('chai').expect;
const { part1, part2 } = require('./solution');

describe('Day 6', function() {
  describe('Part 1', function() {
    it('COM)B B)C C)D D)E E)F B)G G)H D)I E)J J)K K)L length is 42', function() { expect(part1('COM)B\nB)C\nC)D\nD)E\nE)F\nB)G\nG)H\nD)I\nE)J\nJ)K\nK)L')).to.equal(42); });
  });
  describe('Part 2', function() {
    it('COM)B B)C C)D D)E E)F B)G G)H D)I E)J J)K K)L K)YOU I)SAN length is 4', function() { expect(part2('COM)B\nB)C\nC)D\nD)E\nE)F\nB)G\nG)H\nD)I\nE)J\nJ)K\nK)L\nK)YOU\nI)SAN\n')).to.equal(4); });
  });
});