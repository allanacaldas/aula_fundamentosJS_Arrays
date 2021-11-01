const notas = [10, 6, 8];

//Aprendendo a adicionar elementos
notas.push(7);
console.log(notas);
let total = 0;
let media;

notas.forEach(nota => {
    total += nota;
});

media = total / notas.length;
console.log(total);
console.log(media);