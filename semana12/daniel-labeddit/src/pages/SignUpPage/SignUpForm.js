import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { InputsContainer, SignUpFormContainer } from "./styledSignUpPage";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";
import CircularProgress from "@material-ui/core/CircularProgress";
import { signUp } from "../../services/userRequests";
import { useGlobalSetters } from "../../global/GlobalState";

const SignUpForm = () => {
  const history = useHistory();
  const [form, onChange, clear] = useForm({
    username: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { setRightButtonText } = useGlobalSetters();

  const onSubmitForm = (event) => {
    event.preventDefault();
    signUp(form, setIsLoading, clear, history, setRightButtonText);
  };

  return (
    <form onSubmit={onSubmitForm}>
      <SignUpFormContainer>
        <InputsContainer>
          <TextField
            value={form.username}
            name={"username"}
            onChange={onChange}
            label={"Nome"}
            variant={"outlined"}
            fullWidth
            required
            autoFocus
            margin={"normal"}
          />
          <TextField
            value={form.email}
            name={"email"}
            onChange={onChange}
            label={"E-mail"}
            variant={"outlined"}
            type={"email"}
            fullWidth
            required
            margin={"normal"}
          />
          <TextField
            value={form.password}
            name={"password"}
            onChange={onChange}
            label={"Senha"}
            variant={"outlined"}
            type={"password"}
            fullWidth
            required
            margin={"normal"}
          />
        </InputsContainer>
        <Button
          color={"primary"}
          variant={"contained"}
          type={"submit"}
          fullWidth
        >
          {isLoading ? (
            <CircularProgress color={"inherit"} size={24} />
          ) : (
            <>Fazer Cadastro</>
          )}
        </Button>
      </SignUpFormContainer>
    </form>
  );
};

export default SignUpForm;
