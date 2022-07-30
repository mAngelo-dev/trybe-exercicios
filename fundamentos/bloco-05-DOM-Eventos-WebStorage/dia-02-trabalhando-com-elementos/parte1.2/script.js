// Acesse o elemento elementoOndeVoceEsta.
console.log(document.getElementById('elementoOndeVoceEsta'))

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
function addColor() {
    let addColorPai = document.getElementById('elementoOndeVoceEsta').parentNode;
    addColorPai.style.color = 'red';
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