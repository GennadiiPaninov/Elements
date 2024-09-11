import { forwardRef, memo } from "react";

import {IconProps} from "../../shared/assets/types/types";


export const RightArrowFromSlider = memo(
  forwardRef<SVGSVGElement, IconProps>(({}, ref) => (
      <svg
          height={100}
          ref={ref}
          transform={"rotate(180)"}
          viewBox={"0 0 24 24"}
          width={100}
          xmlns={"http://www.w3.org/2000/svg"}
      >
          <path d={"m4.431 12.822 13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-1.569-.823l-13 9a1.003 1.003 0 0 0 0 1.645z"} />
      </svg>
  )),
);
