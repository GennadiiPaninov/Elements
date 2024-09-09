import { forwardRef, memo } from "react";

import {IconProps} from "../../shared/assets/types/types";


export const BackArrow = memo(
  forwardRef<SVGSVGElement, IconProps>(({}, ref) => (
      <svg
          aria-labelledby={"returnIconTitle"}
          color={"#000"}
          fill={"none"}
          height={18}
          ref={ref}
          stroke={"#dcdae0"}
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
          strokeWidth={2}
          viewBox={"0 0 24 24"}
          width={18}
          xmlns={"http://www.w3.org/2000/svg"}
      >
          <path d={"M19 8v3a2 2 0 0 1-2 2H6"} />
          <path d={"m8 16-3-3 3-3"} />
      </svg>
  )),
);
