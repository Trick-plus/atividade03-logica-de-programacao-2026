import leia, { keyInSelect } from 'readline-sync';

var senhaPadrao = "4321";
var senhaUsuario = ""
var contador = 0
do {
    senhaUsuario = leia.question("DIGITE A SUA SENHA: ");
    if (senhaUsuario === senhaPadrao) {
        console.log("Acesso permitido.")
        break
    } else { console.log("Senha incorreta! Tente novamente.") }
    contador++
} while (contador !== 3)

if (contador === 3) {
    console.log("Acesso bloqueado.")
}