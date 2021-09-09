import * as React from "react";

export const BackgroundMobile: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => {
  return (
    <svg width="524" height="570" viewBox="0 0 524 570" fill="none" {...props}>
      <path
        d="M871.477 569.828C871.477 569.828 306.227 281.609 -347 569.828V-132L871.477 -132V569.828Z"
        fill={props.fill}
      />
    </svg>
  );
};
BackgroundMobile.defaultProps = {
  fill: "#6BEFA3",
};
