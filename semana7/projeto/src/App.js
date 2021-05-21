import React from "react"
import {GlobalStyle, Body, Header,Logo, Container, Footer, Batman, Botao} from "./styled"
import batman from "./img/batman.png"
import Labefy from "./components/Labefy/Labefy";
import Login from "./components/Login/Login";

export default class App extends React.Component {
  state = {
    pagina:"",
    nome: "",
    playlists:[]
  }

  componentDidMount() {
    {localStorage.getItem("pagina") && this.setState({ tarefas: JSON.parse(localStorage.getItem("pagina")) })}
    {localStorage.getItem("nome") && this.setState({ tarefas: JSON.parse(localStorage.getItem("nome")) })}
  }
  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(this.state.value)
  }
  mudaPagina = (nomeUser, playlistUser) => {
    if (this.state.pagina ==="logado") {
      this.setState({pagina:"fazer-login", nome:""})
      localStorage.setItem("pagina", JSON.stringify(this.state.pagina));
      localStorage.setItem("nome", JSON.stringify(this.state.nome));
    } else {
      this.setState({pagina:"logado", nome:nomeUser, playlists: playlistUser})
      localStorage.setItem("pagina", JSON.stringify(this.state.pagina));
      localStorage.setItem("nome", JSON.stringify(this.state.nome));
    }
  }
  render() {
    const pagina = this.state.pagina;
    const nomeSplit = this.state.nome.split("-")
    const selecionaPagina = () => {
      if (pagina ==="logado") {
        return (<Labefy />)
      } else {
        return (<Login mudaPagina={this.mudaPagina}/>)
      }
    }
    return (
      <Body>
        <GlobalStyle /> 
        <Header>
          <Logo>
            <Batman src={batman}/>
            <h1>LabeBatman</h1>
          </Logo>
          <Logo>
          <p>{pagina==="logado" ? `Bem vindo(a) ${nomeSplit[0]}!` : `Bem vindo estranho! faça login🦇`}</p>
          {pagina==="logado" && <Botao onClick={this.mudaPagina}>Sair</Botao>}
          </Logo>
        </Header>
        <Container>
          {selecionaPagina()}
        </Container>
        {pagina !=="logado" &&
        <Footer>
         <h4>Cansado de caçar vilões no silêncio?</h4>
         <h4>Design perfeito para adicionar e editar suas playlists</h4>
         <h4>Divirta-se em seu Bat-móvel!</h4>
        </Footer>}
      </Body>
    )
  }
}