// exercício 1:
// console.log (b) vai imprimir 10
// console.log (a,b) vai imprimir 5 5

// exercício 2:
// console.log(a, b, c) vai imprimir 10 10 10
/*
// Exercício de escrita 1
let nome
let idade
console.log (typeof nome)
console.log (typeof idade)
//resultou em undefined para ambos, pois como nada foi atribuído ele poderia tanto ser número quanto string, então o console não consegue definir.

nome = prompt("Qual o seu nome?")
idade = prompt("Qual a sua idade?")
console.log("Olá "+ nome+ "," +" você tem " + idade + " anos")
console.log (typeof nome)
console.log (typeof idade)
//os valores são atribuídos como strings pois o console sempre atribui como  string algo digitado pelo usuário através do comando console.log.
*/
/*
// Exercício de escrita 2
let pergunta = new Array()
pergunta[0] = prompt("1. Qual o seu nome?")
console.log("Olá "+ pergunta[0])

pergunta[1] = prompt("2.Quantos anos você tem?")
console.log("Então "+ pergunta[0], "você tem " + pergunta[1] + " anos? Nem parece!")
pergunta[2] = prompt("3. Você gosta de café? Responda 'sim' ou 'não' =)")
if (pergunta[2]==="sim")
    console.log("Sua resposta foi "+ pergunta[2] + ", que bom que você gosta!")
else
    console.log("Sua resposta foi "+ pergunta[2] + ", que pena =(")

pergunta[3] = prompt("4. E de docinhos, você gosta? Responda 'sim' ou 'não' =)")
if (pergunta[3]==="sim")
    console.log("Sua resposta foi "+ pergunta[2] + ", docinhos são muito bons, fala sério né")
else
    console.log("Sua resposta foi "+ pergunta[2] + ", nao creiooo")

if (pergunta[2]==="sim" & pergunta[3]==="sim") {
    pergunta[4] = prompt("5. Que tal tomar um café com docinhos com o Daniel?")
    console.log("E a sua resposta fooi.... "+ pergunta[4] + "!!!")
}

else if (pergunta[2]==="não" & pergunta[3]==="sim") {
    pergunta[4] = prompt("5. Que tal comer uns docinhos com o Daniel?")
    console.log("E a sua resposta fooi.... "+ pergunta[4] + "!!!")
}
else if (pergunta[2]==="sim" & pergunta[3]==="não") {
    pergunta[4] = prompt("5. Que tal só tomar um café com o Daniel?")
    console.log("E a sua resposta fooi.... "+ pergunta[4] + "!!!")
}
else {
    pergunta[4] = prompt("5. Se café com docinhos não vai rolar, que tal codar juntos?")
    console.log("E a sua resposta fooi.... "+ pergunta[4] + "!!!")
}
*/
/*
// Exercício de escrita 3

let comidasPreferidas = new Array();
comidasPreferidas[0] = "paçoca";
comidasPreferidas[1] = "café";
comidasPreferidas[2] = "chocolate";
comidasPreferidas[3] = "chá";
comidasPreferidas[4] = "não sei";
console.log(comidasPreferidas)
console.log("Então as minhas comidas preferidas:")
console.log(comidasPreferidas[0] + "\n")
console.log(comidasPreferidas[1] + "\n")
console.log(comidasPreferidas[2] + "\n")
console.log(comidasPreferidas[3] + "\n")
console.log(comidasPreferidas[4] + "\n")
//ooo vontade de jogar um loop
//desafio
comidasPreferidas[1] = prompt("Me fala uma comida preferida que eu troco na minha lista!")
console.log("Então a nova lista ficou:")
console.log(comidasPreferidas[0] + "\n")
console.log(comidasPreferidas[1] + "\n")
console.log(comidasPreferidas[2] + "\n")
console.log(comidasPreferidas[3] + "\n")
console.log(comidasPreferidas[4] + "\n")
*/

//Exercício 4
let perguntasSimOuNao = new Array(3);
perguntasSimOuNao[0] = "Você está usando uma roupa azul hoje?"
perguntasSimOuNao[1] = "Você está usando uma roupa amarela hoje?"
perguntasSimOuNao[2] = "Você está usando uma roupa preta hoje?"
let respostasBooleanas = new Array(3);
respostasBooleanas[0] = true
respostasBooleanas[1] = false
respostasBooleanas[2] = false
console.log (perguntasSimOuNao[0],respostasBooleanas[0])
console.log (perguntasSimOuNao[1],respostasBooleanas[1])
console.log (perguntasSimOuNao[2],respostasBooleanas[2])