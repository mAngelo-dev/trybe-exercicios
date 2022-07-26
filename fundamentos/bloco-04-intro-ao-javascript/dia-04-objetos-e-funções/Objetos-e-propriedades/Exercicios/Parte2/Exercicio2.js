let numbers = [2, 3, 6, 7, 10, 1];
let maiorNumero = 0;

function verifyBiggestNumber(n) {
    for (let index = 0; index < numbers.length; index++) {
        if (numbers[index] > maiorNumero) {
            maiorNumero = index
        }
    }
    return maiorNumero  
}

console.log(verifyBiggestNumber(numbers))