import styled from "styled-components";
import { Typography } from "@material-ui/core";

export const Typographya = styled(Typography)({
  marginTop: 20,
});
export const Card = styled.div`
  margin: 20px auto;
  border: 1px solid black;
  width: 50vw;
  max-width: 500px;
  align-items: center;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;
export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  max-width: 500px;
  align-items: center;
`;

export const SignUpFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  max-width: 500px;
  align-items: center;
  margin: auto;
`;
export const Barrinha = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid black;
  width: 50vw;
  max-width: 500px;
  margin: -20px auto 20px auto;
`;
export const ClickSpan = styled.span`
  cursor: pointer;
  font-weight: ${(props) => (props.votou ? "bold" : "400")};
`;
