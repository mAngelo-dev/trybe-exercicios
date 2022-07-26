//! desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = "tryber";
let invertido = '';
let size = word.length-1;

// Puxa o ultimo caracter para uma variável sem nada: palavraInvertida = 'r'
// Puxa o penúltimo caracter para a mesma variavel = 're'
// E por assim vai...

// for (condição inicial; condição de parada; o que faz) {
//     
    
// }

for (let index = size; index >= 0; index--) {
    invertido = invertido + word[index];
    
}

console.log(invertido)