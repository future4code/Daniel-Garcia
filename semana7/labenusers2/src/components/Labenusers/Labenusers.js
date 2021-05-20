import axios from "axios";
import React from "react";

export default class Labenusers extends React.Component {
    state = {
        logado: false,
        login: "",
        Authorization:"",
        listaDeUsuarios:[]
    }
    handleLogin = (e) => {
        this.setState({login:e.target.value})
    }
    fazerLogin = async () => {
        await this.setState({Authorization:this.state.login, login:"",logado:!this.state.logado})
        console.log(this.state.Authorization)
        this.getUsers()   
    }
    getUsers = () =>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const header = {
            headers: {
               Authorization: this.state.Authorization
            }
        }
        axios.get(url, header)
        .then((res) => {
            this.setState({ listaDeUsuarios: res.data });
            alert("Autenticação realizada com sucesso")
          })
        .catch((err) => {
            alert("Erro de Autenticação");
        })
    }
    createUser = () => {
        console.log("criando usuario")
    }
    deleteUser = (tchau) => {
        const header = {
          headers: {
            Authorization: this.state.Authorization
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
    render(){
        const lista = this.state.listaDeUsuarios.map((user)=>{
            return (
            <div>
              <ul key={user.id}>{user.name}</ul>
              <button onClick={() => this.deleteUser(user.id)}>Deletar</button>
            </div>
              )})
        return(
            <div>

                <div>
                    <p>Digite sua autenticação</p>
                    <input type="text"
                    placeholder="Seu login"
                    value={this.state.login}
                    onChange={this.handleLogin}
                    />
                    <button onClick={this.fazerLogin}>Fazer Login</button>
                </div>
                <div>
                    {lista}
                </div>
            </div>
        )
    }
}