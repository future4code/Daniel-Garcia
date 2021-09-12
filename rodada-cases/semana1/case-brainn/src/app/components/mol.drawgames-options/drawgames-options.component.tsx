import { Ic4LeafCover } from "..";
import { BackgroundDesktop } from "../../../assets/img/background-desktop";
import { BackgroundMobile } from "../../../assets/img/background-mobile";
import { Body1, Body2, H1 } from "../../../atomic";
import { MatchMedia } from "../atm.matchmedia";
import { stringTodrawGame, SelectDrawGame } from "../atm.select-drawgame";
import {
  BackgroundDesktopStyled,
  BackgroundMobileStyled,
  ElementsStyled,
  LogoStyled,
  SelectMobileStyled,
  SpacingStyled,
  TextStyled,
} from "./drawgames-options.component.styled";

interface DrawGamesOptionsProps {
  page: string;
  id: string;
  data: string;
}

export const DrawGamesOptions: React.FC<DrawGamesOptionsProps> = (props) => {
  const data = props.data?.split("T")[0].split("-").reverse().join("/");
  return (
    <>
      <MatchMedia breakPoint="md">
        {(isMobile) =>
          isMobile ? (
            <DrawGameMobile page={props.page} id={props.id} data={data} />
          ) : (
            <>
              <DrawGamesDesktop page={props.page} id={props.id} data={data} />
            </>
          )
        }
      </MatchMedia>
    </>
  );
};

const DrawGamesDesktop: React.FC<DrawGamesOptionsProps> = (props) => {
  return (
    <>
      <BackgroundDesktopStyled>
        <BackgroundDesktop />
      </BackgroundDesktopStyled>
      <ElementsStyled>
        <SelectDrawGame page={props.page} />
        <LogoStyled>
          <Ic4LeafCover />
          <SpacingStyled />
          <H1>{stringTodrawGame(props.page)}</H1>
        </LogoStyled>
        <TextStyled>
          <Body1 noMargin>CONCURSO</Body1>
          <Body2>
            {props.id} - {props.data}
          </Body2>
        </TextStyled>
      </ElementsStyled>
    </>
  );
};

export const DrawGameMobile: React.FC<DrawGamesOptionsProps> = (props) => {
  return (
    <>
      <BackgroundMobileStyled>
        <BackgroundMobile />
      </BackgroundMobileStyled>
      <ElementsStyled>
        <SelectMobileStyled>
          <SelectDrawGame page={props.page} />
        </SelectMobileStyled>
        <LogoStyled>
          <Ic4LeafCover />
          <SpacingStyled />
          <H1>{stringTodrawGame(props.page)}</H1>
        </LogoStyled>
        <TextStyled>
          <Body1 noMargin>CONCURSO N°</Body1>
          <Body2>{props.id}</Body2>
        </TextStyled>
      </ElementsStyled>
    </>
  );
};
