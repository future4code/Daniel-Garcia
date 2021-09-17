import styled from "styled-components";
import { Breakpoint } from "..";

export const PageStyled= styled.div`
display: flex;
flex-direction: column;
  @media all and (min-width: ${Breakpoint.md}em) {
flex-direction: row;
  }
`;