function generateImage(input, width, height) {
  var layers = [];

  for (var j = 0; j < input.length; j += width*height) {
    var data = input.substring(j, j + width*height);
    layers.push({
      'char0': (data.match(/0/g) || []).length, 
      'char1': (data.match(/1/g) || []).length, 
      'char2': (data.match(/2/g) || []).length, 
      'data': data
    });
  };

  return layers;
};

exports.part1 = (input) => {
  var image = generateImage(input, 25, 6);
  var lovest = image.slice(0).sort(function(a,b) { return a.char0 - b.char0; })[0];

  return lovest.char1 * lovest.char2;
};

exports.part2 = (input) => {
  var image = generateImage(input, 25, 6);
  var finalImage = image[0].data.split('');
  var output = '';

  image.forEach(function(layer) { 
    for(var i = 0; i < finalImage.length; i++) {
      if(finalImage[i] === '2') {
        finalImage[i] = layer.data.charAt(i);
      };
    };
  });

  for(var i = 0; i < finalImage.join('').length;  i += 25) {
    output += '\n' + finalImage.join('').substring(i, i + 25).replace(new RegExp('0', 'g'), ' ');
  };

  return output;
};