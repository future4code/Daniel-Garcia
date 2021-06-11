import React from "react";
import { useHistory, useParams } from "react-router-dom";
import Button from '@material-ui/core/Button';
import useForm from "../hooks/useForm";
import {Login} from "../services/requests"
import { goToPage } from "../routes/coordinator";



function LoginPage() {
  const history = useHistory()

  const { form, onChange, cleanFields } = useForm({
    email: "",
    password: ""
  });

  const cadastrar = async (event) => {
    event.preventDefault();

    const validation = await Login(form)
    if(validation)
    {
      goToPage(history,"/admin-home")
    } else {
      alert("Tente novamente")
    }
    cleanFields();
  };
  return (
    <div>
      <h1>LoginPage</h1>
      <Button variant="contained" color="primary" onClick={history.goBack} >Voltar</Button>
      <br/><br/><br/>
      <form onSubmit={cadastrar}>
        <input
          name={"email"}
          value={form.email}
          onChange={onChange}
          placeholder="E-mail"
          required
          pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"}
          title={"O e-mail deve ser do tipo texto@texto.texto"}
        />
        <input
          name={"password"}
          value={form.password}
          onChange={onChange}
          placeholder="password"
          required
          type={"password"}
          pattern={"^.{6,}"}
          title={"Sua senha deve ter no mínimo 6 caracteres"}
        />
        <button>Fazer Login</button>
        </form>
    </div>
  );
}

export default LoginPage;
