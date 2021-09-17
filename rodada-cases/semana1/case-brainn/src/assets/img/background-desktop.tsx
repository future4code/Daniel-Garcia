import * as React from "react";

export const BackgroundDesktop: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => {
  return (
    <svg
      width="613"
      height="100vh"
      viewBox="0 0 613 1080"
      fill="none"
      preserveAspectRatio="none"
      {...props}
    >
      <path
        d="M613 0C613 0 361.26 501.011 613 1080H0V0H613Z"
        fill={props.fill}
      />
    </svg>
  );
};
BackgroundDesktop.defaultProps = {
  fill: "#6BEFA3",
};
