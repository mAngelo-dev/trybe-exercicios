const custo = 500;
const venda =  750;
const imposto = custo * 0.2 

if (custo < 0 || venda < 0){
    console.log("Error")
}
const custoTotal = custo + imposto
const lucro =  venda - custoTotal

console.log(lucro*1000)
// [X]console.log(custoTotal)