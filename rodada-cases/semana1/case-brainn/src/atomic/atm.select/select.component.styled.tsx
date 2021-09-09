import styled from "styled-components";
import { BorderRadius, Breakpoint, Color, Transition } from "..";

interface SelectProps {
  open: boolean;
}
const SelectProperties = {
  MobileWidth: "233px",
  DesktopWidth: "215.91px",
  MobileHeight: "51px",
  DesktopHeight: "45.2px",
  HorizontalPaddingMobile: "22.96px",
  HorizontalPaddingDesktop: "33px",
  Opacity: 0.9,
};
export const SelectStyled = styled.div<SelectProps>`
  background-color: ${Color.White};
  width: ${SelectProperties.MobileWidth};
  height: ${SelectProperties.MobileHeight};
  padding: 0 ${SelectProperties.HorizontalPaddingMobile};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${(props) =>
    props.open
      ? `
      border-radius: ${BorderRadius} ${BorderRadius} 0px 0px;
      `
      : `
      border-radius: ${BorderRadius};
      `}
  :hover {
    opacity: ${SelectProperties.Opacity};
  }
  @media all and (min-width: ${Breakpoint.md}em) {
    width: ${SelectProperties.DesktopWidth};
    height: ${SelectProperties.DesktopHeight};
    padding: 0 ${SelectProperties.HorizontalPaddingDesktop};
  }
`;

export const SelectMenuItemStyled = styled.div<SelectProps>`
  background-color: ${Color.White};
  transition: ${Transition};
  border-radius: 0px 0px ${BorderRadius} ${BorderRadius};
  width: ${SelectProperties.MobileWidth};
  cursor: pointer;
  position: absolute;
  ${(props) =>
    props.open
      ? `
      visibility: visible;
      opacity: 1;
      transform: translateY(0%);     
      `
      : `
      visibility: hidden;
      opacity: 0;
      transform: translateY(-2em);
      `}

  @media all and (min-width: ${Breakpoint.md}em) {
    width: ${SelectProperties.DesktopWidth};
  }
`;
export const SelectWrapperStyled = styled.div`
  position: relative;
`;
export const SelectOptionsStyled = styled.div`
  display: flex;
  align-items: center;
  padding: 0 ${SelectProperties.HorizontalPaddingMobile};

  :hover {
    opacity: ${SelectProperties.Opacity};
  }

  @media all and (min-width: ${Breakpoint.md}em) {
    height: ${SelectProperties.DesktopHeight};
    padding: 0 ${SelectProperties.HorizontalPaddingDesktop};
  }
`;
