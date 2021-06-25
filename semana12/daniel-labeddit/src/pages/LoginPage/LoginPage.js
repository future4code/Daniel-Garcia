import React from "react";
import LoginForm from "./LoginForm"
import { useHistory } from 'react-router-dom'
import {goToSignUp} from "../../routes/coordinator"
import useUnprotectedPage from "../../hooks/useUnprotectedPage"
import Button from '@material-ui/core/Button'
import { ScreenContainer, LogoImage, SignUpButtonContainer } from "./styledLoginPage"
import logo from "../../assets/logo.png"

function LoginPage() {
  useUnprotectedPage()
  const history = useHistory()
  return (
      <ScreenContainer>
          <LogoImage src={logo} />
          <LoginForm />
          <SignUpButtonContainer>
              <Button
                  onClick={() => goToSignUp(history)}
                  type={"submit"}
                  fullWidth
                  variant={"text"}
                  color={"primary"}
              >
                  Não possui conta? Cadastre-se
                  </Button>
          </SignUpButtonContainer>
      </ScreenContainer>
  )
}


export default LoginPage;

