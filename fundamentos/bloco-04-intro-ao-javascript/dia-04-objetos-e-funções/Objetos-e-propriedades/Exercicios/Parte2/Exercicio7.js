//! Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
//? Valor de teste: 'trybe' e 'be'
//? Valor esperado no retorno da função: true
//? verificaFimPalavra('trybe', 'be');
//? Retorno esperado: true
//? verificaFimPalavra('joaofernando', 'fernan');
//? Retorno esperado: false

function verifyEnding(input,ending) {
    input[input.length - 2]
    let entrada = input[input.length - 2]     
    let entrada2 = input[input.length -1]
    let final = entrada + entrada2
    

    if (final === ending ){
        return true
    }
    return false
}

console.log(verifyEnding('trybe','be'))


//? Shortcut 

// function verificaFimPalavra(palavra, final){
//     return palavra[palavra.length -2] + palavra[palavra.length - 1] === final
// }

// console.log(verificaFimPalavra('trybe','be'))
