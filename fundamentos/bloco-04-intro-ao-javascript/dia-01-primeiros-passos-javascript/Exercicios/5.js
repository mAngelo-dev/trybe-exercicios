const angleA = 45
const angleB = 45
const angleC = 90

const somaDosAngulos = angleA + angleB + angleC;
let angulosPositivos = angleA > 0 && angleB > 0 && angleC > 0;

if (angulosPositivos) {
    if (somaDosAngulos === 180) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
else {
    console.log("Error")
}
