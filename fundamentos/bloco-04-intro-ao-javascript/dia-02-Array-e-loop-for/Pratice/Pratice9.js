//! Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.
let array = [];
for (let index = 1; index <= 25; index++) {
  array.push(index)
}

for (const numero of array) {
    console.log("Divisão por dois de " + numero + ' é igual a: ' + numero / 2);
}