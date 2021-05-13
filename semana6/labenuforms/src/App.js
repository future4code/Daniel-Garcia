import React from "react";
import Etapa1 from "./components/Etapa1"
import Etapa2 from "./components/Etapa2"
import Etapa3 from "./components/Etapa3"
import Final from "./components/Final"

class App extends React.Component {
  state = {
    pagina1:"Etapa1",
    pagina2:"",
    pagina3:"",
    paginaFinal:""
  };
  trocaDePagina = () => {
    if (this.state.pagina1 === "Etapa1") {
      this.setState({ pagina1: "", pagina2: "Etapa2" });
    } else if (this.state.pagina2 === "Etapa2") {
      this.setState({pagina2: "",  pagina3: "Etapa3" });
    } else if (this.state.pagina3 === "Etapa3") {
      this.setState({ pagina3: "", paginaFinal: "Final" });
    }
  };

  render() {
    const renderizaPagina = () => {
        return (
        <div>
          <div> {this.state.pagina1 && < Etapa1 trocaDePagina={this.trocaDePagina} />}</div>
          <div> {this.state.pagina2 && <Etapa2 trocaDePagina={this.trocaDePagina} />}   </div>
          <div> {this.state.pagina3 && <Etapa3 trocaDePagina={this.trocaDePagina} />}   </div>
          <div> {this.state.paginaFinal && <Final trocaDePagina={this.trocaDePagina}  />}</div>
        </div>
          )
    };

    return <div>{renderizaPagina()}</div>;
  }
}
export default App;
