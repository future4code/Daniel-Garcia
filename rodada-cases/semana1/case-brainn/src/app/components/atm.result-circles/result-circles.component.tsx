import * as React from "react";
import { IcCircle, MatchMedia } from "..";
import { H2 } from "../../../atomic";

import {
  NumberWrapper,
  ResultCircleWrapper,
} from "./result.circles.component.styled";

export interface ResultCirclesProps {
  results: string[];
}
export const ResultCircles: React.FC<ResultCirclesProps> = (props) => {
  const mappedResults = props.results?.map((number) => {
    return (
      <ResultCircleWrapper key={number}>
        <MatchMedia breakPoint="md">
          {(isMobile) =>
            isMobile ? <IcCircle radius={mobileRadius} /> : <IcCircle />
          }
        </MatchMedia>
        <NumberWrapper>
          <H2>{number}</H2>
        </NumberWrapper>
      </ResultCircleWrapper>
    );
  });

  return <>{mappedResults}</>;
};

const mobileRadius = 38;
