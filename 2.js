function forEach(vetor,action){
  for(var i=0;i<vetor.length;i++)
    action(vetor[i]);
}

function e(vetor,teste){
var sum = true;
  forEach(vetor,function(i){
    sum &= teste(i);
  });
  return sum;
}

function ou(vetor,teste){
var sum = false;
  forEach(vetor,function(i){
    sum |= teste(i);
  });
  return sum;
}

function isNan(teste){return teste === NaN ? true:false;}

console.log(e([NaN, NaN, NaN], isNaN)); // imprime true
console.log(e([NaN, NaN, 4], isNaN)); // imprime false
console.log(ou([NaN, 3, 4], isNaN)); // imprime true
console.log(ou([2, 3, 4], isNaN)); // imprime false
