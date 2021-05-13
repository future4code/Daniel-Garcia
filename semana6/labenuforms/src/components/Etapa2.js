import React from "react";
import {Container} from "./styled"

class Etapa2 extends React.Component {
  
  render() {

    return (
      <Container>
        <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
        <p>5. Qual o curso?</p>
        <input type="text" />
        <p>6. Qual a unidade de ensino?</p>
        <input type="text" />
        <br/><br/>
        <button onClick={this.props.trocaDePagina}>Póxima Etapa</button>
      </Container>
    );
  }

}

export default Etapa2;