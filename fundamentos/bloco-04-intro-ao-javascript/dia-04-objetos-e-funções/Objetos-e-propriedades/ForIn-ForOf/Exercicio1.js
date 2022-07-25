//! 1 - Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };
// names[nome] - Names com valor person1, person2, person3... irão mostrar suas propriedades/valor o que é diferente de apenas nome que irá mostrar qual a posição (isso na estrutura For..In)
  for (const nome in names) {
    console.log('Olá ' + names[nome])
  }

