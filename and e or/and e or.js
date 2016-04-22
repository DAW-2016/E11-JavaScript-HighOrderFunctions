/**
 * Created by lucas on 22/04/16.
 */


var e = function (vet,func) {

    var tamanho = vet.length;
    
    for(var i = 0; i < tamanho; ++i){
        if(!(func(vet[i])))
            return false;
    }

    return true;
}

var ou = function (vet,func) {

    var tamanho = vet.length;
    var cont = 0;

    for(var i = 0; i < tamanho; ++i){
        if(func(vet[i]))
            ++cont;
    }

    if(cont != 1)
        return false;

    return true;

}

console.log(e([NaN, NaN, NaN,"teste"], isNaN)); // imprime true
console.log(e([NaN, NaN, NaN], isNaN)); // imprime true
console.log(e([NaN, NaN, 4 ,NaN], isNaN)); // imprime false
console.log(e([NaN, NaN, 4], isNaN)); // imprime false
console.log(ou([NaN, 3, 4], isNaN)); // imprime true
console.log(ou([NaN,2,NaN, 3, 4], isNaN)); // imprime false
console.log(ou([2, 3, 4], isNaN)); // imprime false