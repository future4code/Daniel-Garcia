// ----------------------> Exemplos <---------------------------

console.log('Olá, Paiva!')

// ----------------------> Exercicio 1 <---------------------------

//O programa pede ao usuário digitar um número para testar. Assim que a resposta do usuário for salva na string ele salva em uma nova variável como número por atribuição da função.
//Depois da configuração ele realiza o teste para verificar se a divisão do número por 2 possui resto (verificando se o número é par); se o resto for zero ele imprime na tela que passou no teste, caso contrário ele imprime que não passou no teste.

// ----------------------> Execicio 2 <---------------------------

//a. o código serve para mostrar o preço de uma lista de frutas pré determinadas, caso não esteja na lista retorna 5 reais como preço padrão.
//b. O preço da fruta Maçã é R$ 2.25
//c.  O preço da fruta Pêra é R$ 5

// ----------------------> Exercicio 3 <---------------------------

//a. a primeira linha está armazenando na variável numero a string digitada pelo usuário no comando prompt como número
//b. Esse número passou no teste e uma mensagem de erro pois mensagem nao está definido no primeiro caso e no segundo apenas a mensagem de erro
//c. sim pois mensagem é uma variável local dentro do teste do if e não portanto ao tentar imprimí-la fora de seu bloco este se torna um parâmetro não definido.

// ----------------------> Exercicio 4 <---------------------------

// let idade = Number(prompt("Digite sua idade:"))
// if (idade >= 18) {
//     console.log("Você pode dirigir")
// } else {
//     console.log("Você não pode dirigir")
// }

// ----------------------> Exercicio 5 <---------------------------

// let turno = prompt("digite seu turno: M (matutino), V (Vespertino) ou N (Noturno)").toLowerCase()

// if (turno === "m") {
//     console.log("Bom dia!")
// } else if(turno === "v") {
//     console.log("Boa tarde!")
// } else if(turno === "n") {
//     console.log("Boa Noite")
// } else {
//     console.log ("O sua anta, vc não sabe digitar uma das 3 letras?")
// }

// ----------------------> Exercicio 6 <---------------------------

// let turno = prompt("digite seu turno: M (matutino), V (Vespertino) ou N (Noturno)").toLowerCase()

// switch (turno) {
//   case "m":
//     console.log("Bom dia!");
//     break;
//   case "v":
//     console.log("Boa tarde!");
//     break;
//   case "n":
//     console.log("Boa Noite");
//     break;
//   default:
//     console.log("O sua anta, vc não sabe digitar uma das 3 letras?");
// }

// ----------------------> Exercicio 7 <---------------------------

// let genero = prompt("Digite o gênero do filme").toLowerCase()
// let preco = Number(prompt("Digite o preço do filme"))

// if (genero === "fantasia" && preco <15) {
//     console.log("Bom filme!")
// } else {
//     console.log("Escolha outro filme")
// }

// ----------------------> Desafio 1<---------------------------

// let genero = prompt("Digite o gênero do filme").toLowerCase()
// let preco = Number(prompt("Digite o preço do filme"))

// if (genero === "fantasia" && preco <15) {
//     let snack = prompt("Qual snack irá comprar?")
//     console.log("Bom filme! Junto com ", snack)
// } else {
//     console.log("Escolha outro filme")
// }

// ----------------------> Desafio 2<---------------------------

//determinação das variáveis
let nomeCompleto = prompt("Digite seu nome completo")
let tipoDeJogo = prompt("Digite o Tipo de jogo:\nIN para internacional e DO para doméstico").toLowerCase()
let tipoDeJogoTexto
let etapaDoJogo = prompt("Digite a Etapa de jogo:\nSF para semi-final, DT para terceiro lugar e FI para final").toLowerCase()
let etapaDoJogoTexto
let categoria = Number(prompt("Digite a categoria: 1, 2, 3 ou 4"))
let qtdIngressos = Number(prompt("Digite a quantidade de ingressos desejada:"))
let valorDoIngresso
let valorTotal
//árvore de eventos
//comentário aleatório: que dólar barato! hahahahaha

if (tipoDeJogo === "do") { //jogo nacional
    tipoDeJogoTexto = "Nacional"
    switch (etapaDoJogo) {
        case "sf":
            etapaDoJogoTexto = "Semifinais"
            switch (categoria){
                case 1:
                    valorDoIngresso = 1320
                    valorTotal = valorDoIngresso*qtdIngressos
                    break
                case 2:
                    valorDoIngresso = 880
                    valorTotal = valorDoIngresso*qtdIngressos
                    break
                case 3:
                    valorDoIngresso = 550
                    valorTotal = valorDoIngresso*qtdIngressos
                    break
                case 4:
                    valorDoIngresso = 220
                    valorTotal = valorDoIngresso*qtdIngressos
                    break
                default:
                    console.log("Categoria digitada errada.")  
            }
            break
        case "dt":
            etapaDoJogoTexto = "Decisão do 3° lugar"
            switch (categoria){
                case 1:
                    valorDoIngresso = 660
                    valorTotal = valorDoIngresso*qtdIngressos
                    break
                case 2:
                    valorDoIngresso = 440
                    valorTotal = valorDoIngresso*qtdIngressos
                    break
                case 3:
                    valorDoIngresso = 330
                    valorTotal = valorDoIngresso*qtdIngressos
                    break
                case 4:
                    valorDoIngresso = 170
                    valorTotal = valorDoIngresso*qtdIngressos
                    break
                default:
                    console.log("Categoria digitada errada.")  
            }
            break
        case "fi":
            etapaDoJogoTexto = "Final"
            switch (categoria){
                case 1:
                    valorDoIngresso = 1980
                    valorTotal = valorDoIngresso*qtdIngressos
                    break
                case 2:
                    valorDoIngresso = 1320
                    valorTotal = valorDoIngresso*qtdIngressos
                    break
                case 3:
                    valorDoIngresso = 880
                    valorTotal = valorDoIngresso*qtdIngressos
                    break
                case 4:
                    valorDoIngresso = 330
                    valorTotal = valorDoIngresso*qtdIngressos
                    break
                default:
                    console.log("Categoria digitada errada.")  
            }
        break

        default:
            console.log("Etapa do jogo digitada errada.")       
    }
} else if (tipoDeJogo === "in") { //jogo internacional
    tipoDeJogoTexto = "Internacional"
    switch (etapaDoJogo) {
        case "sf":
            etapaDoJogoTexto = "Semifinais"
            switch (categoria){
                case 1:
                    valorDoIngresso = 1320/4.10
                    valorTotal = valorDoIngresso*qtdIngressos
                    break
                case 2:
                    valorDoIngresso = 880/4.10
                    valorTotal = valorDoIngresso*qtdIngressos
                    break
                case 3:
                    valorDoIngresso = 550/4.10
                    valorTotal = valorDoIngresso*qtdIngressos
                    break
                case 4:
                    valorDoIngresso = 220/4.10
                    valorTotal = valorDoIngresso*qtdIngressos
                    break
                default:
                    console.log("Categoria digitada errada.")  
            }
            break
        case "dt":
            etapaDoJogoTexto = "Decisão do 3° lugar"
            switch (categoria){
                case 1:
                    valorDoIngresso = 660/4.10
                    valorTotal = valorDoIngresso*qtdIngressos
                    break
                case 2:
                    valorDoIngresso = 440/4.10
                    valorTotal = valorDoIngresso*qtdIngressos
                    break
                case 3:
                    valorDoIngresso = 330/4.10
                    valorTotal = valorDoIngresso*qtdIngressos
                    break
                case 4:
                    valorDoIngresso = 170/4.10
                    valorTotal = valorDoIngresso*qtdIngressos
                    break
                default:
                    console.log("Categoria digitada errada.")  
            }
            break
        case "fi":
            etapaDoJogoTexto = "Final"
            switch (categoria){
                case 1:
                    valorDoIngresso = 1980/4.10
                    valorTotal = valorDoIngresso*qtdIngressos
                    break
                case 2:
                    valorDoIngresso = 1320/4.10
                    valorTotal = valorDoIngresso*qtdIngressos
                    break
                case 3:
                    valorDoIngresso = 880/4.10
                    valorTotal = valorDoIngresso*qtdIngressos
                    break
                case 4:
                    valorDoIngresso = 330/4.10
                    valorTotal = valorDoIngresso*qtdIngressos
                    break
                default:
                    console.log("Categoria digitada errada.")  
            }
        break

        default:
            console.log("Etapa do jogo digitada errada.")       
    }
} else {
    console.log("Tipo de jogo digitado errado.")
}
//texto em dólar ou R$
valorTotal = valorTotal.toFixed(2)
valorDoIngresso = valorDoIngresso.toFixed(2)
if (tipoDeJogoTexto ==="Nacional") {
    console.log("---Dados da compra---\nNome do cliente: ", nomeCompleto,"\nTipo do jogo:",tipoDeJogoTexto,"\nEtapa do Jogo:",etapaDoJogoTexto,"\nCategoria:", categoria,"\nQuantidade de ingresso:", qtdIngressos," ingressos\n---Valores---\nValor do Ingresso: R$",valorDoIngresso,"\nValor Total: R$", valorTotal )
} else {
    console.log("---Dados da compra---\nNome do cliente: ", nomeCompleto,"\nTipo do jogo:",tipoDeJogoTexto,"\nEtapa do Jogo:",etapaDoJogoTexto,"\nCategoria:", categoria,"\nQuantidade de ingresso:", qtdIngressos," ingressos\n---Valores---\nValor do Ingresso: U$",valorDoIngresso,"\nValor Total: U$", valorTotal )
}
