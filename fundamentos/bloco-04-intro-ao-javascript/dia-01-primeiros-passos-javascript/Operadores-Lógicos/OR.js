const weekDay = "Quinta-feira";
let mensagem;
if (weekDay === "Segunda-feira" || weekDay === "Terça-feira" || weekDay === "Quarta-feira" || weekDay === "Quinta-feira" || weekDay === "Sexta-feira") {
    mensagem = "Oba, mais um dia de aprendizado na Trybe >:D"
}
else if (weekDay === "Sábado" || weekDay === "Domingo") {
    mensagem = "FINALMENTE, descanso merecido UwU"
}

console.log(mensagem)