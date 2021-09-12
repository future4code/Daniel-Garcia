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
  grid-template-rows: repeat(3, 1fr);
  height: 100vh;
  @media all and (max-width: ${Breakpoint.md}em) {
    height: 60vh;
    width: 100%;
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
    flex-direction: row;
    justify-self: center;
    align-items: center;
    span {
      margin: 4px;
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
`;

export const SelectMobileStyled = styled.div`
  display: flex;
  justify-content: center;
`;
