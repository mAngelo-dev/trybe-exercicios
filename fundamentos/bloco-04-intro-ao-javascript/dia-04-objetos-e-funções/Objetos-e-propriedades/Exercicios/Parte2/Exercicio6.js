//Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
let number = 5;
let result = 0;

function soma(n) {
    for (let index = 0; index <= n; index++) {
        result += index
        //? console.log(result)    caso queira passo a passo
    }
    return result
}

console.log(soma(number))