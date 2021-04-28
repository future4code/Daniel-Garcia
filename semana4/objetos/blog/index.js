let postagem = null

function recolheDados() {
    const tituloPost = document.getElementById('titulo')
    const autorPost = document.getElementById('autor')
    const conteudoPost = document.getElementById('conteudo')

postagem = {
    titulo: tituloPost.value,
    autor: autorPost.value,
    conteudo: conteudoPost.value
}

console.log(postagem)
titulo.value = ""
autor.value = ""
conteudo.value = ""
}

function exibeDados() {
    containerDePosts.innerHTML += `<p>Título: ${postagem.titulo}</p>
    <p>Autor: ${postagem.autor}</p>
    <p>Conteúdo: ${postagem.conteudo}</p><br>`
}
