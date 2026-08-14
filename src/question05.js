import leia, { keyInSelect } from 'readline-sync';
var qtdJogos = leia.questionInt(`Qual a quantidade de jogos:`)
var pontos = 0
var mais2 = 0
var total = 0

if (qtdJogos > 0) {
    for (var i = 1; i <=   qtdJogos; i++) {
        var gols = leia.questionFloat(`Digite o total gols feitos na partida ${i}:`)
        total += gols

        if (gols > 2) {
            mais2++
        }
    }
    pontos = gols * 50
    var media = total/qtdJogos
    console.log(`${mais2} partidas com mais de 2 gols.`)
    console.log(`${pontos} pontuacao.`)
    console.log(`O total de golsR$${total}.`)    
    console.log(`A media foi de R$${media} `)    

}else{
    console.log("O numero digitado tem que ser maior de 0.")
}   
