## JavaScript: Exercícios - Funções de Alta Ordem

**Desenvolvimento de Aplicações Web - COLTEC/MG**

**João Eduardo Montandon**

*Nota: Exercícios retirados/inspirados do livro Eloquent JavaScript, de Marijn Haverbeke.*

### Achatamento

O processo de achatamento consiste em, dado um vetor que contém vetores, o resultado seja um único vetor de uma dimensão que contenha os elementos dos vetores pertencentes ao vetor achatado. Utilize as funções `reduce` e `concat` para achatar um elemento de um vetor.

```
var arrays = [[1, 2, 3], [4, 5], [6]];
var resposta = ....;

console.log(resposta) // deverá imprimir [1, 2, 3, 4, 5, 6]
```

### `e()` e `ou()`

Implemente as funções `e()` e `ou()`, onde elas receberão um vetor e uma função como parâmetro, e verificarão se: 

* `e()` Todos os elementos do vetor obedecem a restrição daquela função
* `ou()` Apenas um dos elementos do vetor obedecem a restrição daquela função


```
console.log(e([NaN, NaN, NaN], isNaN)); // imprime true
console.log(e([NaN, NaN, 4], isNaN)); // imprime false
console.log(ou([NaN, 3, 4], isNaN)); // imprime true
console.log(ou([2, 3, 4], isNaN)); // imprime false
```
