import React from "react";
import {Container} from "./styled"

class Etapa1 extends React.Component {
  
  render() {

    return (
      <Container>
        <h1>Etapa 1 - Dados Gerais</h1>
        <p>1. Qual o seu nome?</p>
        <input type="text" />
        <p>2. Qual a sua idade?</p>
        <input type="text" />
        <p>3. Qual seu email?</p>
        <input type="text" />
        <p>4. Qual a sua escolaridade?</p>
        <select id="escolaridade">
          <option value="emi">Ensino médio incompleto</option>
          <option value="emc">Ensino médio completo</option>
          <option value="esi">Ensino superior incompleto</option>
          <option value="esc">Ensino superior completo</option>
        </select>
          <br/><br/>
        <button onClick={this.props.trocaDePagina}>Póxima Etapa</button>
      </Container>
    );
  }

}

export default Etapa1;