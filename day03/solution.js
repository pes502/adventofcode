function pathGenerator(input) {
  var path = [];
  var position = [0,0];

  input.split(',').forEach(function(command) {
    for(var i = 0; i != command.slice(1); i++) {
      switch(command.slice(0,1)) {
        case 'U': position[1]++; break;
        case 'D': position[1]--; break;
        case 'R': position[0]++; break;
        case 'L': position[0]--; break;
      };
      path.push(JSON.stringify([position[0], position[1]]));
    };
  });
  
  return path;
}

function getIntersections(paths) {
  var objTmp = {};
  return [...new Set(paths[0])].concat([...new Set(paths[1])]).filter( v => v in objTmp ? true : (objTmp[v] = true) && false, objTmp);
}

exports.part1 = (input) => {
  var paths = [];
  var intersections = [];
  input.split('\n').forEach(input => paths.push(pathGenerator(input)));

  getIntersections(paths).map(function(v) { intersections.push(Math.abs(JSON.parse(v)[0]) + Math.abs(JSON.parse(v)[1])); });
  
  return Math.min.apply(Math, intersections);
};

exports.part2 = (input) => {
  var paths = [];
  var intersections = [];
  input.split('\n').forEach(input => paths.push(pathGenerator(input)));

  getIntersections(paths).map(function(v) { intersections.push(paths[0].indexOf(v) + paths[1].indexOf(v) + 2); });

  return Math.min.apply(Math, intersections);
};