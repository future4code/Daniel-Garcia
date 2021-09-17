import * as React from "react";
import { Body } from "../../../atomic";
import { ResultCircles } from "../atm.result-circles/result-circles.component";
import {
  CirclesStyled,
  ResultWrapperStyled,
  TextStyled,
} from "./drawgames-result.component.styled";

interface DrawGamesResultProps {
  numbers: string[];
}
export const DrawGamesResult: React.FC<DrawGamesResultProps> = (props) => {
  return (
    <ResultWrapperStyled>
      <CirclesStyled>
        <ResultCircles results={props.numbers} />
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
