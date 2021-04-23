/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Bem-vindo(a) ao jogo de blackjack")
//definir variáveis
let jogo = confirm("Quer iniciar uma nova rodada?")
let cartasDoComputador= []
let cartasDoUsuario = []
let somaComputador
let somaUsuario
let carta


if (jogo) {
   console.log("Bora jogar")
   for(let i=0; i<2; i++) {
      cartasDoUsuario[i] = comprarCarta()
      cartasDoComputador [i] = comprarCarta()
   }
//calcula valores de soma
   somaUsuario = cartasDoUsuario[0].valor + cartasDoUsuario[1].valor
   if (somaUsuario === 22) {somaUsuario = 2}
   somaComputador = cartasDoComputador[0].valor + cartasDoComputador[1].valor
   if (somaComputador === 22) {somaComputador = 2}
//imprime na tela as cartas
   console.log("Computador: ",cartasDoComputador[0].texto, cartasDoComputador[1].texto, "pontuação = ",somaComputador)
   console.log("Usuário: ",cartasDoUsuario[0].texto, cartasDoUsuario[1].texto, "pontuação = ",somaUsuario)
//comparação de valores e resultado
   if (somaComputador === somaUsuario) {
      console.log("Empate!")
   } else if (somaComputador < somaUsuario ) {
      console.log("Usuário Venceu!")
   } else {
      console.log("Computador Venceu!")
   }
}
else {
   console.log("Chatão nem quis jogar")
}