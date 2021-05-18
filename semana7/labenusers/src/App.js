import './App.css';
import React from "react"
import axios from "axios"

export default class App extends React.Component {
  state = {
    trocarDePagina: false,
    listaDeUsuarios: [],
    inputName: "",
    inputEmail: ""
  }
handleNome = (e)=> {
  this.setState({ inputName: e.target.value });
}
handleEmail = (e)=> {
  this.setState({ inputEmail: e.target.value });
}
  componentDidMount() {
    this.getUsers();
  }

 mudaPagina = () => {
   this.setState({ trocarDePagina: !this.state.trocarDePagina });
   console.log(this.state.trocarDePagina)
  }

  getUsers = () => {
    const BASE_URL ="https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const header = {
      headers: {
        Authorization: "daniel-ueno-paiva"
      }
    };

    axios
      .get(BASE_URL, header)
      .then((res) => {
        this.setState({ listaDeUsuarios: res.data });
      })
      .catch((err) => {
        alert(err.response);
      });
  };

  createUser = () => {
    const header = {
      headers: {
        Authorization: "daniel-ueno-paiva"
      }
    };
 const BASE_URL ="https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail
    };

    axios
      .post(BASE_URL, body, header)
      .then(() => {
        alert("usuário adicionada com sucesso!");
        this.setState({ inputName: "", inputEmail:"" });
        this.getUsers();
      })
      .catch((err) => {
          alert("deu ruim =(");

      });
  };
  deleteUser = (tchau) => {
    const header = {
      headers: {
        Authorization: "daniel-ueno-paiva"
      }
    };
 const BASE_URL ="https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/"
 if (window.confirm("Tem certeza? Isso é um adeus")) {
    axios
      .delete(`${BASE_URL}${tchau}`, header)
      .then(() => {
        alert("Sayonara");
        this.getUsers();
      })
      .catch((err) => {
          alert("Usuário não quer sair da lista! Algo deu ruim xD");

      });
    }
  };
  render() {
    const lista = this.state.listaDeUsuarios.map((user)=>{
      return (
      <div>
        <ul key={user.id}>{user.name}</ul>
        <button onClick={() => this.deleteUser(user.id)}>Deletar</button>
      </div>
        )})
        const troca = this.state.trocarDePagina
    return (
      <div className="App">
        <h1>Labenusers</h1>
        <button onClick={() =>this.mudaPagina()}>Trocar de página</button>
      {!troca &&
        <div>
        <h2>Criar usuário</h2>
        <input type="text" placeholder="Nome" value={this.state.inputName} onChange={this.handleNome}></input>
        <input type="email" placeholder="E-mail"value={this.state.inputEmail} onChange={this.handleEmail}></input>
        <button onClick={() => this.createUser()}>criar</button>
        </div>}

        {troca &&
        <div>
          <h2>Lista de Usuários</h2>
          {lista}
        </div>}
      </div>
    )
  }
}