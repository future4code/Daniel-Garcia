import styled from "styled-components";

import { Spacing, ZIndex } from "../../../atomic";

export const ResultCircleWrapper = styled.div`
  padding: ${Spacing.XSmall};
  position: relative;
`;

export const NumberWrapper = styled.div`
position:absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
z-index: ${ZIndex.Items};
`
