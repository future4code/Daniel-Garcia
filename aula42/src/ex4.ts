type pokemon = {
	name: string,
        types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

//a) ou rodaria o comando tsc ou faria um script
//b) não, só entrar na pasta, a não ser que queira que crie arquivo em outro lugar
//c) a dica já respondeu, deixa tsc puro
//d) Existem mais opções e como padrão algumas já selecionadas, além de especificações de versionamento