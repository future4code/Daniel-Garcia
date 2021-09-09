import * as React from "react";
import { Body } from "../../../atomic";
import { ResultCircles } from "../atm.result-circles/result-circles.component";
import {
  CirclesStyled,
  ResultWrapperStyled,
  TextStyled,
} from "./drawgames-result.component.styled";

export const DrawGamesResult: React.FC = () => {
  return (
    <ResultWrapperStyled>
      <CirclesStyled>
        <ResultCircles results={[1,2,3,4,5,6]}/>
      </CirclesStyled>
      <TextStyled>
        <Body center>
          Este sorteio é meramente ilustrativo e não possui nenhuma ligação com
          a CAIXA.
        </Body>
      </TextStyled>
    </ResultWrapperStyled>
  );
};
