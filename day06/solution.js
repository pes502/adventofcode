function createSpace(input) {
  var galaxy = [];

  input.split('\n').forEach(function(element) {
    element.split(')').reduce(function(o, key) {
      galaxy.map((item) => item.main).includes(o) ? galaxy.find( ({ main }) => main === o ).sub.push(key) : galaxy.push({'main':o, 'sub':[key]});    
    });    
  });

  return galaxy;
}

function pathFinder(galaxy, orbit, target) {
  var actualPos = orbit == target ? galaxy.find( (el) => el.main == orbit) : galaxy.find( (el) => el.sub.includes(orbit));
  var path = orbit == target ? [] : [actualPos];

  while(actualPos.main != target) {
    actualPos = galaxy.find( (el) => el.sub.includes(actualPos.main));
    path.push(actualPos)
  }

  return path;
}

exports.part1 = (input) => {
  var galaxy = createSpace(input);
  var pathLength = 0;
  var uniques = [];

  galaxy.forEach(function(item) {
    uniques.includes(item.main) ? '' : uniques.push(item.main);
    item.sub.forEach(function(item) {
      uniques.includes(item) ? '' : uniques.push(item);
    })
  });

  uniques.forEach(element => {
    pathLength += pathFinder(galaxy, element, 'COM').length;
  });

  return pathLength;
};

exports.part2 = (input) => {
  var galaxy = createSpace(input);
  var pathYou = pathFinder(galaxy, 'YOU', 'COM');
  var pathSanta = pathFinder(galaxy, 'SAN', 'COM');

  return (
    pathFinder(galaxy, 'YOU', pathYou.filter(element => pathSanta.includes(element))[0].main).length-1 + 
    pathFinder(galaxy, 'SAN', pathYou.filter(element => pathSanta.includes(element))[0].main).length-1
  );
};