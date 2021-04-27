// ----------------------> Exemplos <---------------------------

console.log('Olá, Paiva!')

// ----------------------> Exercicio 1 <---------------------------

//o programa cria um laço para somar o valor de i a cada incremento na variável valor e ao final imprime na tela. (valor = 0+1+2+3+4=10)
//valor impresso na tela: 10

// ----------------------> Execicio 2 <---------------------------

//a. o que será impresso no console são todos os valores que forem maiores que 18
//b. sim, uma vez que ele inicia no índice zero, basta adicionar uma variável com valor zero e a cada incremento somar 1 a ela, desta forma o índice será acompanhado por esta nova variável

// ----------------------> Desafio 1<---------------------------
//o resultado seria:
// 0
// 00
// 000
// 0000

// ----------------------> Exercicio 3 <---------------------------
//considerando que para todos os itens exista um array chamado array já definido anteriormente:

//a. 
//      console.log(array)

// b. 
//      for (let numero of array) {
//          console.log(numero/10)
//         }

// c.   
//      let arrayPar = []
//      for (let numero of array) {
//          if (numero%2===0) {
//            arrayPar.push(numero)
//          }
//      }
//      console.log(arrayPar)

//d.
    //   let index = 0
    //   for(let numero of array) {
    //     console.log (` 'O elemento do índex ${index} é ${numero}`)
    //     index++
    //   }

//d.
    //definindo as variáveis inicialmente com um valor que já existe no array para fins de comparação.
    //   let maior = array[0]
    //   let menor  = array[0]
    //   for(let numero of array) {
    //      if (numero > maior) {
    //          maior = numero
    //      }
    //      if(numero < menor) {
    //          menor = numero
    //      }
    //   }
    //   console.log(`O maior número é ${maior} e o menor é ${menor}`)


// ----------------------> Desafio 1<---------------------------

// console.log("Vamos Jogar!")

// let resposta = Number(prompt("Pense em um número e digite aqui:"))
// let chute = null //numero a ser chutado
// let tentativas
// for (tentativas = 0; chute !== resposta; tentativas++) {
//     chute = Number(prompt("Chute um número!"))
//     if (chute < resposta) {
//         console.log(`O número chutado foi ${chute}.\nO número é menor que o chutado!`) 
//     } else if (chute > resposta) {
//         console.log(`O número chutado foi ${chute}.\nO número é maior que o chutado!`) 
//     }
// }
// console.log(`O número chutado foi ${chute}.\nParabéns, você acertou!\nNúmero de tentativas: ${tentativas}`)


// ----------------------> Desafio 2<---------------------------

// console.log("Vamos Jogar!")

// let resposta = Math.floor((Math.random() * 100) + 1)
// let chute = null //numero a ser chutado
// let tentativas
// for (tentativas = 0; chute !== resposta; tentativas++) {
//     chute = Number(prompt("Chute um número!"))
//     if (chute < resposta) {
//         console.log(`O número chutado foi ${chute}.\nO número é menor que o chutado!`) 
//     } else if (chute > resposta) {
//         console.log(`O número chutado foi ${chute}.\nO número é maior que o chutado!`) 
//     }
// }
// console.log(`O número chutado foi ${chute}.\nParabéns, você acertou!\nNúmero de tentativas: ${tentativas}`)

//comentário: extremamente fácil a alteração, apenas inserir um comando para gerar um número randômico através de um método.