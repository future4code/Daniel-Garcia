//Exercício 1

function inverteArray(array) {
  // implemente sua lógica aqui
  let arrInvertido =[]
  for (let i = array.length -1; i>=0;i--){
   arrInvertido.push(array[i])
  }

return arrInvertido
}

//Exercício 2

function retornaNumerosParesElevadosADois (array) {
   // implemente sua lógica aqui
   let paresAoQuadrado = array.filter((number)=>{
      if (number%2 ===0){
         return true
      }
   })
   for (let i = 0; i < paresAoQuadrado.length; i++){
      paresAoQuadrado[i] = paresAoQuadrado[i]**2 
   }
   return paresAoQuadrado
}

//Exercício 3

function retornaNumerosPares (array) {
   // implemente sua lógica aqui
   let pares = array.filter((number)=>{
      if (number%2 ===0){
         return true
      }
   })
   return pares
}

//Exercício 4

function retornaMaiorNumero(array) {
  // implemente sua lógica aqui
  let maior = array[0];
  for (let number of array) {
    if (maior < number) {
      maior = number;
    }
  }
  return maior;
}

//Exercício 5

function retornaQuantidadeElementos (array) {
   // implemente sua lógica aqui
   return array.length
}

//Exercício 6

function retornaExpressoesBooleanas() {
   // implemente sua lógica aqui
   
   const booleano1 = true
   const booleano2 = false
   const booleano3 = !booleano2 
   const booleano4 = !booleano3 
   const respA = booleano1 && booleano2 && !booleano4 
   const respB = (booleano1 && booleano2) || !booleano3
   const respC = (booleano2 || booleano3) && (booleano4 || booleano1)
   const respD = !(booleano2 && booleano3) || !(booleano1 && booleano3) 
   const respE = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
   let respostas =[respA, respB, respC, respD,respE]
//robei sim e dai?
return respostas
}

//Exercício 7

function retornaNNumerosPares(n) {
   // implemente sua lógica aqui
   let pares =[]
      for (let i=0; i<n;i++){
         pares.push(i*2)
      }
   return pares
}

// Exercício 8

function checaTriangulo(a, b, c) {
  // implemente sua lógica aqui
  if (a===b && b===c){
     return "Equilátero"
  } else if ((a===b&&a!==c) || (a===c&&a!==b) || (b===c&&a!==b) ) {
        return "Isósceles"
     } else {
        return "Escaleno"
     }
  }


// Exercício 9

function comparaDoisNumeros(num1, num2) {
  // implemente sua lógica aqui
  let maiorNumero;
  let subtracao;
  let ehDivisivel = false;
  if (num1 > num2) {
    maiorNumero = num1;
    subtracao = num1 - num2;
    if (num1 % num2 === 0) {
      ehDivisivel = true;
    }
  } else {
    maiorNumero = num2;
    subtracao = num2 - num1;
    if (num2 % num1 === 0) {
      ehDivisivel = true;
    }
  }
  let objeto = {
    maiorNumero: maiorNumero,
    maiorDivisivelporMenor: ehDivisivel,
    diferenca: subtracao,
  };
  return objeto;
}

// Exercício 10

function segundoMaiorEMenor(array) {
  // implemente sua lógica aqui
  let arrayTemp = array;
  let segundoMaior;
  let segundoMenor;
  for (let i = 0; i < 2; i++) {
    segundoMaior = arrayTemp[0];
    segundoMenor = arrayTemp[0];
    for (number of arrayTemp) {
      if (number > segundoMaior) {
        segundoMaior = number;
      }
      if (number < segundoMenor) {
        segundoMenor = number;
      }
    }
    arrayTemp = arrayTemp.filter((number) => {
      if (number !== segundoMenor && number !== segundoMaior) {
        return true;
      }
    });
  }
  let resposta = [segundoMaior, segundoMenor];
  return resposta;
}

//Exercício 11

function ordenaArray(array) {
  // implemente sua lógica aqui
  let temp;
  let novoArray = array;
  for (let i = 0; i < array.length; i++) {
    for (let i = 0; i < array.length; i++) {
      if (novoArray[i] > novoArray[i + 1]) {
        temp = novoArray[i];
        novoArray[i] = novoArray[i + 1];
        novoArray[i + 1] = temp;
      }
    }
  }
  return novoArray;
}

// Exercício 12

function filmeFavorito() {
   // implemente sua lógica aqui
   let filme = {
      nome:"O Diabo Veste Prada",
      ano: 2006,
      diretor: "David Frankel",
      atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
   }
   return filme
}

// Exercício 13

function imprimeChamada() {
   // implemente sua lógica aqui
   let objeto = filmeFavorito()
return `Venha assistir ao filme ${objeto.nome}, de ${objeto.ano}, dirigido por ${objeto.diretor} e estrelado por ${objeto.atores[0]}, ${objeto.atores[1]}, ${objeto.atores[2]}, ${objeto.atores[3]}.`
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   // implemente sua lógica aqui
   let retangulo = {
      largura: lado1,
      altura: lado2,
      perimetro: 2*lado1 + 2*lado2,
      area: lado1*lado2
   }
   return retangulo
}

// Exercício 15

function anonimizaPessoa(pessoa) {
  // implemente sua lógica aqui
pessoa.nome = "ANÔNIMO"
  return pessoa;
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
   let adultos = arrayDePessoas.filter((number)=>{
      if (number.idade >=20){
         return true
      }
   })
   return adultos
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
   let criancas = arrayDePessoas.filter((number)=>{
      if (number.idade < 20){
         return true
      }
   })
   return criancas
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   // implemente sua lógica aqui
   for (i=0;i<array.length;i++){
      array[i]= array[i]*2
   }
   return array
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
   // implemente sua lógica aqui
   let string = []
   for (i=0;i<array.length;i++){
    array[i]= array[i]*2
   
    string.push(String(array[i]))
 }
 return string
 }

// Exercício 17, letra C

function verificaParidade(array) {
   // implemente sua lógica aqui
   for (i = 0; i<array.length; i++){
      if (array[i] %2 ===0){
         array[i] = `${array[i]} é par`
      } else {
         array[i] = `${array[i]} é ímpar`
      }
   }
   return array
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   // implemente sua lógica aqui

const podeBricar = pessoas.filter((number)=>{
   if (number.idade > 13 && number.idade <60  && number.altura >= 1.5) {
      return true
   }
})
return podeBricar
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   // implemente sua lógica aqui
   const naoPodeBricar = pessoas.filter((number)=>{
      if (number.idade < 13 || number.idade >=60  || number.altura < 1.5) {
         return true
      }
   })
   return naoPodeBricar
}

//Exercício 19

const consultasNome = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 //Exercício 19, letra A
 
 function ordenaPorNome() {
let ordenados
 let nomes = consultasNome.map((number)=>{
   return number.nome
 })
  ordenaArray(nomes)
for (let i=0; i< nomes.length; i++) {
    for (let j = 0; j < nomes.length;j++) {
      if (nomes[i] === consultasNome[j].nome){
          nomes[i] = consultasNome[j]
      }
    }
}
return nomes
 }
 
 // Exercício 19, letra B
 
 const consultasData = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 function ordenaPorData() {
   let datas = consultasNome.map((number)=>{
      return number.dataDaConsulta
    })

    
    return datas
 }

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
  // implemente sua lógica aqui
  let compraPorCliente = [];
  for (i = 0; i < contas.length; i++) {
    let soma = 0;
    for (let j = 0; j < contas[i].compras.length; j++) {
      soma += contas[i].compras[j];
    }
    compraPorCliente[i] = soma;
  }

  for (i =0; i< contas.length;i++) {
     contas[i].saldoTotal -= compraPorCliente[i]
  }
  return contas;
}