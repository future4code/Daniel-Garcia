import styled from "styled-components";
import { Typography } from '@material-ui/core';

export const Typographya = styled(Typography)({
    marginTop:20,
})
export const Card = styled.div`
margin: 20px;
border: 1px solid black;
width: 50vw;
max-width: 500px;
align-items: center;
display: flex;
flex-direction: column;
cursor: pointer;
`
export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  max-width: 500px;
  align-items: center;
`

export const SignUpFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  max-width: 500px;
  align-items: center;
  margin: auto;
`