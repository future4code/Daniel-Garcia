import styled from "styled-components";
import { Breakpoint, Spacing } from "../../../atomic";

const marginMobile = "-15vh";

export const ResultWrapperStyled = styled.div`
  flex: 1;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  @media all and (max-width: ${Breakpoint.md}em) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0;
    margin-top: ${marginMobile};
  }
`;

export const CirclesStyled = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  grid-row: 2;
  @media all and (max-width: ${Breakpoint.md}em) {
    margin: 0;
  }
`;

export const TextStyled = styled.div`
  grid-row: 3;
  align-self: end;
  justify-self: center;
  margin: ${Spacing.Page};
  @media all and (max-width: ${Breakpoint.md}em) {
    margin: 0;
    padding: 0 ${Spacing.Large};
    justify-content: center;
    align-items: center;
    p {
      margin-bottom: 0;
    }
  }
`;
