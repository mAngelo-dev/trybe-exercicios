//! Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//? let numeros = [2, 4, 6, 8];
let impares = [];

for (let index = 0; index < numeros.length; index++) {
  const numero = numeros[index];
  if (numero % 2 !== 0) {
    impares.push(numero);
  }
}
if (impares.length > 1) {
  // console.log(impares);
  console.log(impares.length);
} else if (impares.length < 1) {
  console.log("nenhum valor ímpar encontrado");
}
