let arrDespesas = []
imprimirDespesas(arrDespesas)
imprimirExtrato()


// PRIMEIRO
function imprimirDespesas(despesas) {
  let divDespesas = document.getElementById("despesas");
  divDespesas.innerHTML = "<p><u>Despesas Detalhadas</u></p>";

  // AQUI VEM A IMPLEMENTAÇÃO

  for (let i = 0; i < despesas.length; i++) {
    divDespesas.innerHTML += `<p>valor: R$${despesas[i].valor} | tipo: ${despesas[i].tipo} | descrição: ${despesas[i].descricao}</p>`
  }
}


// SEGUNDO 
function imprimirExtrato(){
    let divExtrato = document.getElementById('extrato')
    let gastoTotal = 0
    let gastoAlimentacao = 0
    let gastoUtilidades = 0
    let gastoViagem = 0


    // AQUI VEM A IMPLEMENTAÇÃO
let arrAlimentacao = arrDespesas.filter( (valor, index, array) =>{
    if (valor.tipo ==="alimentação") {
        return true
    }
})
for (let i=0; i<arrAlimentacao.length; i++) {
    gastoAlimentacao += arrAlimentacao[i].valor
}

let arrUtilidade = arrDespesas.filter( (valor, index, array) =>{
    if (valor.tipo ==="utilidades") {
        return true
    }
})
for (let i=0; i<arrUtilidade.length; i++) {
    gastoUtilidades += arrUtilidade[i].valor

}let arrViagem = arrDespesas.filter( (valor, index, array) =>{
    if (valor.tipo ==="viagem") {
        return true
    }
})
for (let i=0; i<arrViagem.length; i++) {
    gastoViagem += arrViagem[i].valor
}
gastoTotal = gastoAlimentacao + gastoUtilidades + gastoViagem

    divExtrato.innerHTML = `<p>Extrato: Gasto Total: R$${gastoTotal} | Alimentação: R$${gastoAlimentacao} | 
                                        Utilidades: R$${gastoUtilidades} | Viagem: R$${gastoViagem}</p>`
}


function limparFiltros() {
    document.getElementById('tipoFiltro').value = ""
    document.getElementById('valorFiltroMin').value = ""
    document.getElementById('valorFiltroMax').value = ""
}



function adicionarDespesa(){
    let valorCdt = document.getElementById('valorCadastro')
    let tipoCtd = document.getElementById('tipoCadastro')
    let descricaoCtd = document.getElementById('descricaoCadastro')

    if(validarValor(valorCdt) && validarTipo(tipoCtd) && validarDescricao(descricaoCtd)){
        let novaDespesa = {
            valor: Number(valorCdt.value),
            tipo: tipoCtd.value,
            descricao: descricaoCtd.value,
        }

        arrDespesas.push(novaDespesa)
        
        valorCdt.value = ""
        tipoCtd.value = ""
        descricaoCtd.value = ""

        
        limparFiltros()
        imprimirDespesas(arrDespesas)
        imprimirExtrato()
    } else {
        alert("`Faltou algum valor ou algum valor é um número negativo`")
    }
}



// TERCEIRO
function filtrarDespesas(){
    let tipoFiltro = document.getElementById('tipoFiltro').value
    let valorMin = Number(document.getElementById('valorFiltroMin').value)
    let valorMax = Number(document.getElementById('valorFiltroMax').value)

// AQUI NESSA VARIÁVEL VEM A IMPLEMENTAÇÃO
    let despesasFiltradas = arrDespesas.filter((valor, index, array)=>{
        switch (tipoFiltro) {
            case "todos":
                if (valorMin<=valor.valor && valorMax>=valor.valor) {
                    return true
                }

            break
            case "alimentação":
                if (valor.tipo === "alimentação") {
                    if (valorMin<=valor.valor && valorMax>=valor.valor) {
                        return true
                    }
                }
            break
            case "utilidades":
                if (valor.tipo === "utilidades") {
                    if (valorMin<=valor.valor && valorMax>=valor.valor) {
                        return true
                    }
                }
            break
            case "viagem":
                if (valor.tipo === "viagem") {
                    if (valorMin<=valor.valor && valorMax>=valor.valor) {
                        return true
                    }
                }
            break
        }
    })

    imprimirDespesas(despesasFiltradas)
}







// FunÇoes que fazem validaÇoes dos inputs de criaÇao de despesas 

// NÃO SE PREOCUPEM EM ENTENDER ESSAS FUNÇÕES

function validarValor(valor){
    if(valor.value.length > 0 && parseInt(valor.value) > 0){
        return true
    }
    return false
}

function validarTipo(tipo){
    if(tipo.value !== ""){
        return true
    }
    return false
}

function validarDescricao(texto){
    if(texto.value.replace(/ /g,"").length !== 0){
        return true
    }
    return false
}