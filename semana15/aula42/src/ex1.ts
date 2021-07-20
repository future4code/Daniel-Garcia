//1-a) ts me xinga se for outra coisa que não string
const minhaString: string = "trololo"


//1-b) posso deixar : number | string, mas não faz sentido dado que ele se chama meuNumber xD
const meuNumero: number = 21


//1-c)
enum CORES_ARCO_IRIS{
   VERMELHO = "Vermelho",
   LARANJA = "Laranja",
   AMARELO = "Amarelo",
   VERDE = "Verde",
   AZUL = "Azul",
   ANIL = "Anil",
   VIOLETA = "Violeta"
}

interface Pessoa {
nome: string
idade: number
corFavorita: CORES_ARCO_IRIS
}

const objeto: Pessoa = {
   nome: "Daniel",
   idade: 31,
   corFavorita: CORES_ARCO_IRIS.AZUL
}
const objeto2: Pessoa = {
   nome: "Camily",
   idade: 18,
   corFavorita: CORES_ARCO_IRIS.VIOLETA
}
const objeto3: Pessoa = {
   nome: "Tania",
   idade: 33,
   corFavorita: CORES_ARCO_IRIS.ANIL
}
const objeto4: Pessoa = {
   nome: "Tiago",
   idade: 33,
   corFavorita: CORES_ARCO_IRIS.VERMELHO
}

