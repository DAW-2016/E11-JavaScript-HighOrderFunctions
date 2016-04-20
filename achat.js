var print = console.log;

var achat = function(array){
  var end = [];
  for (var i = 0; i < array.length; i++) {
    end = end.concat(array[i]);
  }
  return end;
}

var teste = [[1, 2, 3], [4, 5], [6]];

print(teste);

print(achat(teste));
