//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

let arrayNomes = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"];
let maiorNome = "";

function acharMaiorNome(n) {
  for (let nome of arrayNomes) {
    if (nome.length > maiorNome.length) {
      maiorNome = nome;
    }
  }
  return maiorNome
}

console.log(acharMaiorNome(arrayNomes));
