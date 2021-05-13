import React from "react";
import {Container} from "./styled"

class Etapa3 extends React.Component {
  
  render() {

    return (
      <Container>
        <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
        <p>5. Por que você não terminou um curso de graduação?</p>
        <input type="text" />
        <p>6. Você fez algum curso complementar?</p>
        <select id="cursoComplementar">
          <option value="none">Nenhum</option>
          <option value="tecnico">Ensino médio completo</option>
          <option value="ingles">Curso de Inglês</option>
        </select>
          <br/><br/>
        <button onClick={this.props.trocaDePagina}>Próxima Etapa</button>
      </Container>
    );
  }

}

export default Etapa3;