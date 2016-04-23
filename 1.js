function junta(acumulado,complemento){
  return acumulado.concat(complemento);
}

var arrays = [[1, 2, 3], [4, 5], [6]];
var resposta = arrays.reduce(junta);

console.log(resposta) // deverá imprimir [1, 2, 3, 4, 5, 6]
