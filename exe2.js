function e(vet,f) {
  for (var i = 0; i < vet.length; i++) {
    if (!f(vet[i])) {
      return false;
    }
  }
  return true;
}

function ou(vet,f) {
  for (var i = 0; i < vet.length; i++) {
    if (f(vet[i])) {
      return true;
    }
  }
  return false;
}

console.log(e([NaN, NaN, NaN], isNaN)); // imprime true
console.log(e([NaN, NaN, 4], isNaN)); // imprime false
console.log(ou([NaN, 3, 4], isNaN)); // imprime true
console.log(ou([2, 3, 4], isNaN)); // imprime false
