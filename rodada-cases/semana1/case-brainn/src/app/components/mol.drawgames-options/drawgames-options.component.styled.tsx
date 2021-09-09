import styled from "styled-components";
import { Breakpoint, Spacing, ZIndex } from "../../../atomic";

export const BackgroundDesktopStyled = styled.div`
  position: relative;
  z-index: ${ZIndex.Background};
  max-height: 100vh;
`;
export const ElementsStyled = styled.div`
  position: absolute;
  z-index: ${ZIndex.Items};
  top: 0;
  left: 0;
  padding: ${Spacing.Page};
  display: grid;
  height: 100vh;
  width: 100%;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: 1fr;
  @media all and (max-width: ${Breakpoint.md}em) {
    height: 60vh;
    justify-content: center;
  }
`;

export const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  grid-row: 2;
  @media all and (max-width: ${Breakpoint.md}em) {
    justify-content: center;
  }
`;
export const TextStyled = styled.div`
  display: flex;
  flex-direction: column;
  grid-row: 3;
  align-self: end;
  @media all and (max-width: ${Breakpoint.md}em) {
    justify-content: center;
    margin: ${Spacing.Default};
    flex-direction: row;
    span {
      margin: 0 ${Spacing.XXSmall};
    }
  }
`;
export const SpacingStyled = styled.div`
  width: ${Spacing.Default};
`;

export const BackgroundMobileStyled = styled.div`
  position: relative;
  z-index: ${ZIndex.Background};
  overflow: hidden;
  display: flex;
  align-items: center;
`;

export const SelectMobileStyled = styled.div`
display: flex;
justify-content: center;
`