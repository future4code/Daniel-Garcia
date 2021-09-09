import { Ic4LeafCover } from "..";
import { BackgroundDesktop } from "../../../assets/img/background-desktop";
import { BackgroundMobile } from "../../../assets/img/background-mobile";
import { Body1, Body2, H1 } from "../../../atomic";
import { MatchMedia } from "../atm.matchmedia";
import { SelectDrawGame } from "../atm.select-drawgame";
import {
  BackgroundDesktopStyled,
  BackgroundMobileStyled,
  ElementsStyled,
  LogoStyled,
  SelectMobileStyled,
  SpacingStyled,
  TextStyled,
} from "./drawgames-options.component.styled";

export const DrawGamesOptions = () => {
  return (
    <>
      <MatchMedia breakPoint="md">
        {(isMobile) =>
          isMobile ? (
            <DrawGameMobile />
          ) : (
            <>
              <DrawGamesDesktop />
            </>
          )
        }
      </MatchMedia>
    </>
  );
};

const DrawGamesDesktop = () => {
  return (
    <>
      <BackgroundDesktopStyled>
        <BackgroundDesktop />
      </BackgroundDesktopStyled>
      <ElementsStyled>
        <SelectDrawGame page="megasena" />
        <LogoStyled>
          <Ic4LeafCover />
          <SpacingStyled />
          <H1>Mega-Sena</H1>
        </LogoStyled>
        <TextStyled>
          <Body1 noMargin>CONCURSO</Body1>
          <Body2>4351-trololo</Body2>
        </TextStyled>
      </ElementsStyled>
    </>
  );
};

export const DrawGameMobile = () => {
  return (
    <>
      <BackgroundMobileStyled>
        <BackgroundMobile />
      </BackgroundMobileStyled>
      <ElementsStyled>
        <SelectMobileStyled>
          <SelectDrawGame page="megasena" />
        </SelectMobileStyled>
        <LogoStyled>
          <Ic4LeafCover />
          <SpacingStyled />
          <H1>Mega-Sena</H1>
        </LogoStyled>
        <TextStyled>
          <Body1 noMargin>CONCURSO</Body1>
          <Body2>4351-trololo</Body2>
        </TextStyled>
      </ElementsStyled>
    </>
  );
};
