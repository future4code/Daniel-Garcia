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
  margin: 10px;
  display: flex; 
  justify-content: center;
  flex-direction: column;
  align-items: center;`

 const Input = styled.input`
 margin: 4px;
 width: 300px;` 

class App extends React.Component {
  state = {
    publicacoes: [
      {
        key: Math.random(),
        nome: "Paulinha",
        fotoUser: "https://picsum.photos/50/50",
        foto: "https://picsum.photos/200/150"
      },
      {
        key: Math.random(),
        nome: "Bruna",
        fotoUser: "https://picsum.photos/60/50",
        foto: "https://picsum.photos/210/150"
      },
      {
        key: Math.random(),
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
    key: Math.random(),
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
          key = {postagens.key}
          nomeUsuario = {postagens.nome}
          fotoUsuario = {postagens.fotoUser}
          fotoPost = {postagens.foto}
        /> 
    );
});
return (
  <MainContainer>
        <Inputs>
          <Input
            value={this.state.valorInputUsuario}
            onChange={this.handleNomeUsuario}
            placeholder={"Usuario"}
          />
          <Input
            value={this.state.valorInputFotoUser}
            onChange={this.handleFotoUser}
            placeholder={"link Foto"}
          />
          <Input
            value={this.state.valorInputFotoPost}
            onChange={this.handleFotoPost}
            placeholder={"Link foto do post"}
          />
          <button onClick={this.onClickPublicar}>Publicar</button>
        </Inputs>
        {listaDePosts}
  </MainContainer>
);
}
}
export default App;
