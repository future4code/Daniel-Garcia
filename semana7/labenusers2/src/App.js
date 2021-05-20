import React from "react"
import {GlobalStyle, Body, Header, Container, Footer, Batman, EscolherApi, SelectBatman} from "./styled"
import batman from "./img/batman.png"
import Labefy from "./components/Labefy/Labefy";
import Labenusers from "./components/Labenusers/Labenusers";

export default class App extends React.Component {
  state = {
    pagina:"Labenuser"

  }
  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(this.state.value)
  }

  render() {
    const mudaPagina = () => {
      if (this.state.pagina ==="Labefy") {
        return (<Labefy />)
      } else if (this.state.pagina === "Labenuser") {
        return (<Labenusers/>)
      }
    }
    return (
      <Body>
        <GlobalStyle /> 
        <Header>
          <Batman src={batman}/>
          <h1>LabeBatman</h1>
        </Header>
        <Container>
          <EscolherApi>
          <h2>Sejam Bem vindos a esse bat-canal! Escolha qual API você deseja testar</h2>
          <div>
            <SelectBatman
                  value={this.state.pagina}
                  onChange={e =>
                    this.setState({ pagina: e.target.value })
                  }
            >  
            <option value="Labenuser">Labenusers</option>
            <option value="Labefy">Labefy</option>
          </SelectBatman>
          </div>
          </EscolherApi>
          {mudaPagina()}
        </Container>
        <Footer>
         <div> oi, eu sou o footer</div>
        </Footer>
      </Body>
    )
  }
}