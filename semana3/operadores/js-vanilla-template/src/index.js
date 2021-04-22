//Exercício 1
//a. false
//b. false
//c. false
//e. boolean 

//Exercício 2
//a. Undefined
//b. Null
//c. 11
//d. 3
//e. 4
//f. 10

//Exercícios de Escrita

//Exercício 1
let idadeDoUsuario = null
let idadeAmigo = null
let diferenca = null
idadeDoUsuario = Number(prompt("Qual a sua idade?"))
idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo(a)"))
diferenca = idadeDoUsuario - idadeAmigo
console.log ('A diferença de idades é: ', diferenca)

//Exercício 2

let numeroPar = null
numeroPar = Number(prompt('Digite um número par:'))
console.log("O resto da divisão do número digitado por 2 é: " + numeroPar%2)
//quer que eu diga que o resto é zero? u.u
//resto da divisão 1 u.u

//Exercício 3

let listaDeTarefas = []
let removaDaLista = null
listaDeTarefas[0] = prompt("Digite uma tarefa que você faz no dia")
listaDeTarefas[1] = prompt("Digite outra tarefa que você faz no dia")
listaDeTarefas[2] = prompt("Digite a terceira tarefa que você faz no dia")
console.log(listaDeTarefas)
removaDaLista = prompt("Digite um índice para ser removido")
listaDeTarefas.splice(removaDaLista,1)
console.log(listaDeTarefas)


//Exercício 4
let userEmail = null
userEmail = prompt("Digite seu usuário de e-mail")
console.log (`O e-mail ${userEmail} foi cadastrado com sucesso. Seja bem-vinda(o), ${userEmail}`)


//Desafios

//Desafio 1

let kelvin = null
let fahrenheit = null
let celsius = null

//a. 77°F em k

fahrenheit = 77
kelvin = (fahrenheit - 32)*5/9 + 273.15
console.log(`a. ${fahrenheit} °F são ${kelvin} K`)

//b. 80°C em °F
celsius = 80
fahrenheit = (celsius)*9/5 + 32
console.log(`b. ${celsius} °C são ${fahrenheit} °F`)

//c. 30°C em °F e K
celsius = 30
fahrenheit = (celsius)*9/5 + 32
kelvin = (fahrenheit - 32)*5/9 + 273.15
console.log(`c. ${celsius} °C são ${fahrenheit} °F ou ${kelvin} K`)

//d. Valor em Celsius livre para conversão
celsius = Number(prompt("Digite um valor em Celsius para conversão"))
fahrenheit = (celsius)*9/5 + 32
kelvin = (fahrenheit - 32)*5/9 + 273.15
console.log(`c. ${celsius} °C são ${fahrenheit} °F ou ${kelvin} K`)

//Desafio 2
let consumoDeEnergia = 280
let custoDaEnergia = 0.05
console.log("O Custo para 280 quilowattt-hora é: ", consumoDeEnergia*custoDaEnergia, "reais")
consumoDeEnergia = prompt("Agora, digite o valor de consumo")
console.log("O Custo para ", consumoDeEnergia, " quilowattt-hora é: ", consumoDeEnergia*custoDaEnergia, "reais")


//Desafio3
let pesoEmLibra = 20
let pesoEmKg = null
let pesoEmonca = 10.5
let milha = 100
let metro = null
let pes = 50
let galao = 103.56
let litro = null
let xicara = 450

// //a. lb para kg
pesoEmKg = pesoEmLibra/2.205
console.log(`${pesoEmLibra}lb equivalem a ${pesoEmKg} kg`)
pesoEmLibra = prompt("Digite um peso em libra:")
pesoEmKg = pesoEmLibra/2.205
console.log(`${pesoEmLibra}lb equivalem a ${pesoEmKg} kg`)

//b. onça para kg
pesoEmKg = pesoEmLibra*0.03
console.log(`${pesoEmonca}lb equivalem a ${pesoEmKg} kg`)
pesoEmonca = prompt("Digite um peso em onça:")
pesoEmKg = pesoEmLibra*0.03
console.log(`${pesoEmonca}lb equivalem a ${pesoEmKg} kg`)

//c. milha para metro
metro = milha*1609.34
console.log(`${milha}mi equivalem a ${metro} m`)
milha = prompt("Digite uma distância em milha:")
metro = milha*1609.34
console.log(`${milha}mi equivalem a ${metro} m`)

//d. Pés para metro
metro = pes/3.281
console.log(`${pes}ft equivalem a ${metro} m`)
pes = prompt("Digite uma distância em pés:")
metro = pes/3.281
console.log(`${pes}ft equivalem a ${metro} m`)

//e. galão para litro
litro = galao*3.785
console.log(`${galao}gal equivalem a ${litro} l`)
galao = prompt("Digite um volume em gal:")
litro = galao*3.785
console.log(`${galao}gal equivalem a ${litro} l`)

//f. xícara para litro
litro = xicara*6/25
console.log(`${galao} xic equivalem a ${litro} l`)
xicara = prompt("Digite um volume em xícaras:")
litro = xicara*6/25
console.log(`${galao} xic equivalem a ${litro} l`)

//g. fiz em todos