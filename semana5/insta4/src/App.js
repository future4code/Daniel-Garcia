import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const Inputs = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;`

class App extends React.Component {
  state = {
    publicacoes: [
      {
        nome: "Paulinha",
        fotoUser: "https://picsum.photos/50/50",
        foto: "https://picsum.photos/200/150"
      },
      {
        nome: "Bruna",
        fotoUser: "https://picsum.photos/60/50",
        foto: "https://picsum.photos/210/150"
      },
      {
        nome: "Júlia",
        fotoUser: "https://picsum.photos/70/50",
        foto: "https://picsum.photos/220/150"
      }
    ],
    valorInputUsuario: "",
    valorInputFotoUser: "",
    valorInputFotoPost: ""
  }

//COLOCAR OS HANDLES
handleNomeUsuario = (event) => {
  this.setState({ valorInputUsuario: event.target.value });
};
handleFotoUser = (event) => {
  this.setState({ valorInputFotoUser: event.target.value });
};
handleFotoPost = (event) => {
  this.setState({ valorInputFotoPost: event.target.value });
};
onClickPublicar = () => {
  const novoPost = {
    nome: this.state.valorInputUsuario,
    fotoUser: this.state.valorInputFotoUser,
    foto: this.state.valorInputFotoPost
  };

this.setState({
  publicacoes: [...this.state.publicacoes, novoPost],
  valorInputUsuario: "",
  valorInputFotoUser: "",
  valorInputFotoPost: ""
})
  };

  render() {

    const listaDePosts = this.state.publicacoes.map((postagens) =>{
      return (
        <Post
          nomeUsuario = {postagens.nome}
          fotoUsuario = {postagens.fotoUser}
          fotoPost = {postagens.foto}
        /> 
    );
});
return (
  <MainContainer>
      {listaDePosts}
        <Inputs>
          <input
            value={this.state.valorInputUsuario}
            onChange={this.handleNomeUsuario}
            placeholder={"Usuario"}
          />
          <input
            value={this.state.valorInputFotoUser}
            onChange={this.handleFotoUser}
            placeholder={"link Foto"}
          />
          <input
            value={this.state.valorInputFotoPost}
            onChange={this.handleFotoPost}
            placeholder={"Link foto do post"}
          />
          <button onClick={this.onClickPublicar}>Publicar</button>
        </Inputs>
  </MainContainer>
);
}
}
export default App;
