// Acesse o elemento elementoOndeVoceEsta.
console.log(document.getElementById('elementoOndeVoceEsta'))

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
function addColor() {
    let addColorPai = document.getElementById('elementoOndeVoceEsta').parentNode;
    addColorPai.style.color = 'green';
}

addColor();

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
function addText() {
    let addTexto = document.getElementById('primeiroFilhoDoFilho')
    addTexto.innerText = 'Esse é o texto interno do primeiro filho do filho'
}

addText();

// Acesse o primeiroFilho a partir de pai.
console.log(document.getElementById('pai').firstElementChild)

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling)

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
console.log(document.getElementById('elementoOndeVoceEsta').nextSibling)

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling)

// Agora acesse o terceiroFilho a partir de pai.
console.log(document.getElementById('pai').lastElementChild.previousElementSibling)

// Crie um irmão para elementoOndeVoceEsta.
let irmaoOndeVoceEsta = "Um dos irmãos do Onde Voce Está"
document.getElementById('pai').append(irmaoOndeVoceEsta)

// Crie um filho para elementoOndeVoceEsta.
let filhoOndeVoceEsta = 'Filho do Onde Você Está'
let criaFilhoOndeEsta = document.createElement('p');
document.getElementById('elementoOndeVoceEsta').appendChild(criaFilhoOndeEsta).append(filhoOndeVoceEsta)

// Crie um filho para primeiroFilhoDoFilho.
let filhoDoPrimeiroFilho = 'Filho do Primeiro Filho'
let criaFilho = document.createElement('p')
document.getElementById('primeiroFilhoDoFilho').appendChild(criaFilho).append(filhoDoPrimeiroFilho)

// A partir desse filho criado, acesse terceiroFilho
console.log(document.getElementById('primeiroFilhoDoFilho').firstChild.parentNode.parentNode.parentNode.lastElementChild.previousElementSibling)
