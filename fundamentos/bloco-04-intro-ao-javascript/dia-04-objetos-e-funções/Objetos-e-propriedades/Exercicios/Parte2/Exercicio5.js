//! Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
let array = [4, 3, 4, 5, 8, 4, 3, 20, 3, 4, 9, 3, 2, 4, 5, 3, 3, 3 ,3 ,3 ,3 ,3];
//? Criar condição caso o numero investigado seja igual a ele mesmo, acrescente um contador que irá retornar o maior dos resultados após verificar os numeros.

//Criar função a qual registre quantas vezes aparece um numero

function verifyNumber(arrays) {
  let contador = 0;
  let maisRepete = 0;
  let contadorMaior = 0;

  for (let index = 0; index < arrays.length; index++) {
    let numero = arrays[index];
    for (let j = 0; j < arrays.length; j++) {
      if (numero === arrays[j]) {
        contador += 1;
      }
    }
    if (contadorMaior < contador) {
      contadorMaior = contador;
      maisRepete = arrays[index];
    }
    contador = 0;
  }
  return maisRepete;
}

console.log(verifyNumber(array));
