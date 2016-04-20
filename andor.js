var print = console.log;

var and = function(array, func){
  var ok = 0;
  for (var i = 0; i < array.length; i++) {
    if(func(array[i]))
      ok++;
  }

  if(ok == array.length)
    return true;
  else
    return false;

}

var or = function(array, func){
  for (var i = 0; i < array.length; i++) {
    if(func(array[i]))
      return true;
  }
  return false;
}

print(and([NaN, NaN, NaN], isNaN)); // imprime true
print(and([NaN, NaN, 4], isNaN)); // imprime false
print(or([NaN, 3, 4], isNaN)); // imprime true
print(or([2, 3, 4], isNaN)); // imprime false
