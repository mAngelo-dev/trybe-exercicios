let numbers = [2, 4, 6, 7, 10, 0, -3];
let menorNumero = 0;

function minorNumberIndex(n){
    for (let index = 0; index < numbers.length; index++) {
        if (numbers[index] < menorNumero){
            menorNumero = index
        }
        
    }
    return menorNumero
}

console.log(minorNumberIndex(numbers))