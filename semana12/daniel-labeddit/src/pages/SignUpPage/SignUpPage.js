import React from "react";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import SignUpForm from "./SignUpForm";
import { ScreenContainer, LogoImage } from "./styledSignUpPage";
import logo from "../../assets/logo.png";

function SignUpPage() {
  useUnprotectedPage();
  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <SignUpForm />
    </ScreenContainer>
  );
}

export default SignUpPage;
