//Calculando a média de um conjunto de números

// let nota1 = 10;
// let nota2 = 6.5;
// let nota3 = 8;
// let nota4 = 7.5;/
// let media = (nota1 + nota2 + nota3 + nota4) / 4;
// console.log(media);

let total = 0;
const notas = [10, 8, 6.5, 7.5]
notas.forEach(nota => {
    total += nota;
});
let media = total / notas.length;
console.log(media);

//Lista: coleção ordenada de valores