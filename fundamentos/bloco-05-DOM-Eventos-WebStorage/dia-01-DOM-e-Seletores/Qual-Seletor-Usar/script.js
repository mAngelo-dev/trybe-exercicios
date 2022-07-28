let container = document.querySelector('#container');
container.style.backgroundColor = 'green';

let cabecalhos = document.querySelectorAll('h3');
for ( c = 0; c < cabecalhos.length; c++) {
    cabecalhos[c] = cabecalhos[c].style.backgroundColor = 'black'
}
let footerbackground = document.getElementById('footer-container');
footerbackground.style.backgroundColor = '#1e5e07';

let cabecalhoContainer = document.getElementById('header-container');
cabecalhoContainer.style.backgroundColor = '#1e5e07';

let emergency = document.getElementsByClassName('emergency-tasks');
for (e = 0; e < emergency.length; e += 1){
    emergency[e] = emergency[e].style.backgroundColor = '#5c252a'
};

let noEmergency = document.getElementsByClassName('no-emergency-tasks');
for (j = 0; j < noEmergency.length; j += 1){
    noEmergency[j] = noEmergency[j].style.backgroundColor = '#255c58'
}

let urgente = document.querySelectorAll('.emergency-tasks div h3');
for (i = 0; i < urgente.length; i += 1){
    urgente[i] = urgente[i].style.color = '#ed829b'
}