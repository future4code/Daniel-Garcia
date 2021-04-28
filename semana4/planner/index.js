function adicionaToDo() {
    const meuInput = document.getElementById('tarefa')
    const diasDaSemana = document.getElementById('dias-semana')
    if (meuInput.value === "") {
    }
    else {
        switch (diasDaSemana.value) {
            case "domingo":
                domingo.innerHTML += `<li onclick="risca(this)">${tarefa.value}</li>`
            break
            case "segunda":
                segunda.innerHTML += `<li onclick="risca(this)">${tarefa.value}</li>`
            break
            case "terca":
                terca.innerHTML += `<li onclick="risca(this)">${tarefa.value}</li>`
            break
            case "quarta":
                quarta.innerHTML += `<li onclick="risca(this)">${tarefa.value}</li>`
            break
            case "quinta":
                quinta.innerHTML += `<li onclick="risca(this)">${tarefa.value}</li>`
            break
            case "sexta":
                sexta.innerHTML += `<li onclick="risca(this)">"${tarefa.value}</li>`
            break
            case "sabado":
                sabado.innerHTML += `<li onclick="risca(this)">${tarefa.value}</li>`
            break
            default:
            break;
        }
        meuInput.value = ""
    }
}
function risca(elemento){
        elemento.style = "text-decoration: line-through";
}

function limpaTela()
{
let limpar = document.getElementsByTagName("ul")
for (let inner of limpar){
    inner.innerHTML = ""
}
}