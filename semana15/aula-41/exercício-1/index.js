//1-a) através do process.argv[posição]

//1-b)
const nome = process.argv[2]
const idade = Number(process.argv[3])

console.log(`Olá, ${nome}! Você tem ${idade} anos.`)
//1-c)
console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade+7}`)