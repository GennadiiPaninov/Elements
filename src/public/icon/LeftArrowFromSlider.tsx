import { forwardRef, memo } from "react";

import {IconProps} from "../../shared/assets/types/types";


export const LeftArrowFromSlider = memo(
  forwardRef<SVGSVGElement, IconProps>(({color}, ref) => (
      <svg
          fill={"none"}
          height={64}
          ref={ref}
          transform={"rotate(180)"}
          viewBox={"0 0 24 24"}
          width={64}
          xmlns={"http://www.w3.org/2000/svg"}
      >
          <path
              d={"M6 12h12m0 0-5-5m5 5-5 5"}
              stroke={color? color:"#000"}
              strokeLinecap={"round"}
              strokeLinejoin={"round"}
              strokeWidth={2}
          />
      </svg>
  )),
);
