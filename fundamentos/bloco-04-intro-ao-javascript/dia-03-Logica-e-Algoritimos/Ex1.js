//! Crie um algoritmo que retorne o fatorial de 10.
//? O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero.

let queroFatorial = 10;
let resultado = 1;
let armazenaNumero = [];
let final = 1;

for (let numeroAnterior = 1; numeroAnterior <= queroFatorial; numeroAnterior++) {
    armazenaNumero.push(numeroAnterior)
    // console.log(armazenaNumero)
}

    
for (let index = 0; index < armazenaNumero.length; index++) {
   final = final * resultado * armazenaNumero[index]
}
console.log(final)
