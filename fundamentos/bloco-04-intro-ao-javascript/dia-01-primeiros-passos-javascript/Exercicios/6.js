let pecaDeXadrez = "REI"

switch (pecaDeXadrez.toLowerCase()) {
    case 'rei':
        console.log("Apenas uma casa para todas as direções");
        break;
    case 'rainha':
        console.log("Pode se mover em qualquer direção e quantas casas quiser");
        break;
    case 'torre':
        console.log("Move-se em linha reta");
        break;
    case 'bispo':
        console.log("Pode se mover na diagonal em quantas casas quiser");
        break;
    case 'cavalo':
        console.log("Pode saltar peças do tabuleiro e anda em L");
        break;
    case 'peões':
        console.log("Apenas uma casa pra frente");
        break;

    default:
        console.log("Não existe essa peça");
        break;
}