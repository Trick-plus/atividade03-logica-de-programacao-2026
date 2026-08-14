import leia, { keyInSelect } from 'readline-sync';
var qtdVenderodes = leia.questionInt(`Qual a quantidade de venderoes:`)

var mais5k = 0
var ate5k = 0
var total = 0

if (qtdVenderodes > 0) {
    for (var i = 1; i <= qtdVenderodes; i++) {
        var vendas = leia.questionFloat(`Digite o total vendido pelo vendedor ${i}:`)
        total += vendas

        if (vendas > 5000) {
            mais5k++
        } else {
            ate5k++
        }
    }
    var media = total/qtdVenderodes
    console.log(`${mais5k} Venderam mais de 5k.`)
    console.log(`${ate5k} Venderam menos que 5k.`)
    console.log(`O total de vendas foi de R$${total}.`)    
    console.log(`A media foi de R$${media} `)    

}else{
    console.log("O numero digitado tem que ser maior de 0.")
}   
