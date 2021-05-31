import React from "react"
import {GlobalStyle, Body, Header,Logo, Container, Footer, Batman, Botao} from "./styled"
import batman from "./img/batman.png"
import Labefy from "./components/Labefy/Labefy";
import Login from "./components/Login/Login";

export default class App extends React.Component {
  state = {
    pagina:"",
    nome: "",
    playlists:[],
    primeiroNome:""
  }

  componentDidMount() {
    {localStorage.getItem("pagina") && this.setState({ pagina: JSON.parse(localStorage.getItem("pagina")) })}
    {localStorage.getItem("nome") && this.setState({ nome: JSON.parse(localStorage.getItem("nome"))})}
    {localStorage.getItem("playlists") && this.setState({ playlists: JSON.parse(localStorage.getItem("playlists")) })}
    {localStorage.getItem("primeiroNome") && this.setState({ primeiroNome: JSON.parse(localStorage.getItem("primeiroNome")) })}
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  mudaPagina = (nomeUser, playlistUser) => {
    if (this.state.pagina ==="logado") {
      this.setState({pagina:"fazer-login", nome:""})
      localStorage.setItem("pagina", JSON.stringify("fazer-login"));
      localStorage.setItem("nome", JSON.stringify(""));
      localStorage.setItem("primeiroNome", JSON.stringify(""));
    } else {
      const nomeSplit = nomeUser.split("-")
      this.setState({pagina:"logado", nome:nomeUser, playlists: playlistUser, primeiroNome:nomeSplit[0]})
      localStorage.setItem("pagina", JSON.stringify(this.state.pagina));
      localStorage.setItem("nome", JSON.stringify(this.state.nome));
      localStorage.setItem("primeiroNome", JSON.stringify(nomeSplit[0]));
      localStorage.setItem("playlists", JSON.stringify(this.state.playlists));
    }
  }

  render() {
    const pagina = this.state.pagina;

    const selecionaPagina = () => {
      if (pagina ==="logado") {
        return (<Labefy playlists={this.state.playlists} authorization={this.state.nome}/>)
      } else {
        return (<Login mudaPagina={this.mudaPagina}/>)
      }
    }
    return (
      <Body logado={this.state.pagina}>
        <GlobalStyle /> 
        <Header>
          <Logo>
            <Batman src={batman}/>
            <h1>LabeBatman</h1>
          </Logo>
          <Logo>
          <p>{pagina==="logado" ? `Bem vindo(a) ${this.state.primeiroNome}!` : `Bem vindo estranho! faça login🦇`}</p>
          {pagina==="logado" && <Botao onClick={this.mudaPagina}>Sair</Botao>}
          </Logo>
        </Header>
        <Container>
          {selecionaPagina()}
        </Container>
        {pagina !=="logado" && <Footer>
         <h4>Cansado de caçar vilões no silêncio?</h4>
         <h4>Design perfeito para adicionar e editar suas playlists</h4>
         <h4>Divirta-se em seu Bat-móvel!</h4>
        </Footer>}
      </Body>
    )
  }
}