const expect = require('chai').expect;
const { part1, part2 } = require('./solution');

describe('Day 3', function() {
  describe('Part 1', function() {
    it('[R8,U5,L5,D3][U7,R6,D4,L4] distance is 6', function() { expect(part1('R8,U5,L5,D3\nU7,R6,D4,L4')).to.equal(6); });
    it('[R75,D30,R83,U83,L12,D49,R71,U7,L72][U62,R66,U55,R34,D71,R55,D58,R83] distance is 159', function() { expect(part1('R75,D30,R83,U83,L12,D49,R71,U7,L72\nU62,R66,U55,R34,D71,R55,D58,R83')).to.equal(159); });
    it('[R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51][U98,R91,D20,R16,D67,R40,U7,R15,U6,R7] distance is 135', function() { expect(part1('R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R513\nU98,R91,D20,R16,D67,R40,U7,R15,U6,R7')).to.equal(135); });
  });

  describe('Part 2', function() {
    it('[R8,U5,L5,D3][U7,R6,D4,L4] distance is 30', function() { expect(part2('R8,U5,L5,D3\nU7,R6,D4,L4')).to.equal(30); });
    it('[R75,D30,R83,U83,L12,D49,R71,U7,L72][U62,R66,U55,R34,D71,R55,D58,R83] distance is 610', function() { expect(part2('R75,D30,R83,U83,L12,D49,R71,U7,L72\nU62,R66,U55,R34,D71,R55,D58,R83')).to.equal(610); });
    it('[R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51][U98,R91,D20,R16,D67,R40,U7,R15,U6,R7] distance is 410', function() { expect(part2('R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R513\nU98,R91,D20,R16,D67,R40,U7,R15,U6,R7')).to.equal(410); });
  });
});