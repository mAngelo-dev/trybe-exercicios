let candidate = 'whitelisted';
let message;

switch (candidate) {
    case "approved":
        message = "Aprovada com sucesso";
        break;

    case "whitelisted":
        message = "Aguardando chamada!";
        break;

    case "denied":
        message = "Reprovada";
        break;
    
    default:
        message = "Error: Value not found";
        break;
}

console.log(message)