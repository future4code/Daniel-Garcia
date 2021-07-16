const tarefas = [
    "wake up", "give a try at learning typescript", "get angry", "smash your head on the wall","cry", "try again, but harder", "ask for help", "omg why did I choose this?", "accept the fate", "go to sleep"
]
for(let i=2; i< process.argv.length; i++){
tarefas.push(process.argv[i])
}
console.table(tarefas)