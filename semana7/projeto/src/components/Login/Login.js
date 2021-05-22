import axios from "axios";
import React from "react";
import {ContainerLogado, BlocoLogin, Submit, FormContainer, Span, Input} from "./styled"

export default class Login extends React.Component {
    state ={
        input:"",
        Authorization:"",
        playlists:[]
    }
handleLogin = (e) => {
    this.setState({input:e.target.value})
}
fazerLogin = async () => {
    await this.setState({Authorization:this.state.input, input:""})
    this.getUsers()   
}
getUsers = () =>{
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    const header = {
        headers: {
           Authorization: this.state.Authorization
        }
    }
    axios.get(url, header)
    .then((res) => {
        this.setState({ playlists: res.data.result.list});
        this.props.mudaPagina(this.state.Authorization, this.state.playlists);
      })
    .catch((err) => {
        alert("Erro de Autenticação, tente novamente");
    })
}

    render() {
        return (
            <ContainerLogado>
                <BlocoLogin>
                    <FormContainer>
                        <Span>BAT-LOGIN:</Span>
                        <br/><br/>
                        <Input type="password" 
                        placeholder="Insira sua Bat-autenticação" 
                        value={this.state.input}
                        onChange={this.handleLogin}
                        />
                        <br/>
                        <Submit onClick={this.fazerLogin}>Entrar</Submit>
                    </FormContainer>
                </BlocoLogin>

            </ContainerLogado>
        )
    }
}