import React from "react";
import useUnprotectedPage from "../../hooks/useUnprotectedPage"
import SignUpForm from './SignUpForm'
import { ScreenContainer, LogoImage } from './styledSignUpPage'

function SignUpPage() {
  useUnprotectedPage()
  return (
    <ScreenContainer>
      <LogoImage src={null}/>
      <SignUpForm />
    </ScreenContainer>
  );
}

export default SignUpPage;

