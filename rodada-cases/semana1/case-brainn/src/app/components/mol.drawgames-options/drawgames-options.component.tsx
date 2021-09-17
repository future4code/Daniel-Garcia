import { Ic4LeafCover } from "..";
import { BackgroundDesktop } from "../../../assets/img/background-desktop";
import { BackgroundMobile } from "../../../assets/img/background-mobile";
import { Body1, Body2, Color, H1 } from "../../../atomic";
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
        <BackgroundDesktop fill={stringToColor(props.page)} />
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
        <BackgroundMobile fill={stringToColor(props.page)} />
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
const stringToColor = (page: string): string => {
  let color = Color.MegaSena;
  switch (page) {
    case "megasena":
      color = Color.MegaSena;
      break;
    case "quina":
      color = Color.Quina;
      break;
    case "lotofacil":
      color = Color.Lotofacil;
      break;
    case "lotomania":
      color = Color.Lotomania;
      break;
    case "timemania":
      color = Color.Timemania;
      break;
    case "diadesorte":
      color = Color.DiaDeSorte;
      break;
    default:
      color = Color.DiaDeSorte;
      break;
  }
  return color;
};
