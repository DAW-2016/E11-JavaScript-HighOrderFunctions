/**
 * Created by lucas on 22/04/16.
 */



var achatamento = function (vet) {

    var tem = [];
    
    var tamanho = vet.length;

    for(i = 0; i < tamanho; ++i){
        tem = tem.concat(vet[i]);
    }

    return tem;
}

var arrays = [[1, 2, 3], [4, 5], [6],7,[8, 9, 10, 11, 12, 13]];
var resposta = achatamento(arrays);

console.log(resposta) // deverá imprimir [1, 2, 3, 4, 5, 6]
