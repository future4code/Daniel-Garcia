import * as React from "react";

import { Breakpoint } from "../../../atomic/obj.constants";

type BreakpointKeys = keyof typeof Breakpoint;

export interface MatchMediaProps {
  children: (isMobile: boolean) => JSX.Element;
  breakPoint: BreakpointKeys;
}

export interface MatchMediaState {
  isMobile: boolean;
}

export const MatchMedia: React.FC<MatchMediaProps> = (props) => {
  const [isMobile, setIsMobile] = React.useState<boolean>(false);

  const checkMatch = () => {
    const mediaQuery = window?.matchMedia(
      `(min-width: ${Breakpoint[props.breakPoint]}em)`
    );
    setIsMobile(!mediaQuery?.matches);
  };

  React.useEffect(() => {
    checkMatch();
    window.addEventListener("resize", checkMatch);
    return () => window.removeEventListener("resize", checkMatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return props.children(isMobile);
};
