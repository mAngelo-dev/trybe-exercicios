// !Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
// ?Exemplo de palíndromo: arara.
// ?verificaPalindrome('arara');
// ?Retorno esperado: true
// ?verificaPalindrome('desenvolvimento');
// ?Retorno esperado: false

function verifyPalindrome(str) {
    for (let index = 0; index < str.length; index++) {
      if (str[index]   !== str[str.length - 1 - index]){
        return false
      }
        
    }
    return true
}

console.log(verifyPalindrome('arara'))

// function verifyPalindrome(str) {
//   let reverseWord = str.split('').reverse().join('')
//   return str === reverseWord

// }
// console.log(verifyPalindrome('carro'))