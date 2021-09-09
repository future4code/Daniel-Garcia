import styled, { css } from "styled-components";
import { Breakpoint, Color, FontFamily, FontSize, FontWeight, LineHeight, Spacing } from "../obj.constants";

export interface TypographyProps {
  color?: keyof typeof Color;
  center?: boolean;
  noMargin?: boolean;
}

const BaseTextCss = css<TypographyProps>`
  ${({ color, center, noMargin }) => css`
    ${center && "text-align: center;"}
    ${noMargin && "margin: 0;"}
    ${color && `color: ${Color[color]};`}
  `}
`;
//nome do concurso
export const H1 = styled.h1<TypographyProps>`
  color: ${Color.White};
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.MobileXLarge};
  line-height: ${LineHeight.H1};
  font-weight: ${FontWeight.Bold};
  padding: 0;
  margin-top: ${Spacing.Medium};
  margin-bottom: ${Spacing.Medium};

  @media all and (min-width: ${Breakpoint.md}em) {
    font-size: ${FontSize.DesktopXLarge};
    margin-top: ${Spacing.Large};
    margin-bottom: ${Spacing.Large};
    ${BaseTextCss}
  }

  ${BaseTextCss}
`;

//bolas
export const H2 = styled.h2<TypographyProps>`
  color: ${Color.Black};
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.MobileLarge};
  line-height: ${LineHeight.H1};
  font-weight: ${FontWeight.Bold};
  padding: 0;
  margin-top: ${Spacing.Medium};
  margin-bottom: ${Spacing.Medium};

  @media all and (min-width: ${Breakpoint.md}em) {
    font-size: ${FontSize.DesktopLarge};
    line-height: ${LineHeight.H1};
    margin-top: ${Spacing.Large};
    margin-bottom: ${Spacing.Large};
    ${BaseTextCss}
  }

  ${BaseTextCss}
`;

//selector
export const Selector = styled.p<TypographyProps>`
  color: ${Color.Black};
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.Select};
  line-height: ${LineHeight.Select};
  font-weight: ${FontWeight.Medium};
  padding: 0;
  margin-top: ${Spacing.Medium};
  margin-bottom: ${Spacing.Medium};

  ${BaseTextCss}
`;

//sorteio meramente ilustrativo
export const Body = styled.p<TypographyProps>`
  color: ${Color.Black};
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.MobileMedium};
  line-height: ${LineHeight.MobileMedium};
  font-weight: ${FontWeight.Normal};
  padding: 0;
  margin-top: ${Spacing.Medium};
  margin-bottom: ${Spacing.Medium};

  @media all and (min-width: ${Breakpoint.md}em) {
    font-size: ${FontSize.DesktopMedium};
    line-height: ${LineHeight.DesktopMedium};
    margin-top: ${Spacing.Small};
    margin-bottom: ${Spacing.Small};
    ${BaseTextCss}
  }

  ${BaseTextCss}
`;
//body: mensagem do concurso
export const Body1 = styled.span<TypographyProps>`
  color: ${Color.White};
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.MobileSmall};
  line-height: ${LineHeight.MobileSmall};
  font-weight: ${FontWeight.Medium};
  padding: 0;
  margin-top: ${Spacing.Small};
  margin-bottom: ${Spacing.Small};

  ${BaseTextCss}
`;
export const Body2 = styled.span<TypographyProps>`
  color: ${Color.White};
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.MobileSmall};
  line-height: ${LineHeight.MobileSmall};
  font-weight: ${FontWeight.Medium};
  padding: 0;
  margin-top: ${Spacing.Small};
  margin-bottom: ${Spacing.Small};

  @media all and (min-width: ${Breakpoint.md}em) {
    font-size: ${FontSize.DesktopSmall};
    line-height: ${LineHeight.DesktopSmall};
    ${BaseTextCss}
  }

  ${BaseTextCss}
`;