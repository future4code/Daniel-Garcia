import * as React from "react";
export interface IcCircleProps {
  radius?: number;
}
export const IcCircle: React.FC<IcCircleProps> = (props) => {
  return (
    <svg
      width={String(props.radius! * 2)}
      height={String(props.radius! * 2)}
      viewBox={`0 0 ${props.radius! * 2} ${props.radius! * 2}`}
      fill="white"
      {...props}
    >
      <circle
        cx={props.radius}
        cy={props.radius}
        r={props.radius}
        fill="white"
      />
    </svg>
  );
};

const GENERIC_CIRCLE_BASE_RADIUS = 56;

IcCircle.defaultProps = {
  radius: GENERIC_CIRCLE_BASE_RADIUS,
};
