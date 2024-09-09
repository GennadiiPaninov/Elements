import { forwardRef, memo } from "react";

import {IconProps} from "../../shared/assets/types/types";


export const Help = memo(
  forwardRef<SVGSVGElement, IconProps>(({}, ref) => (
      <svg
          fill={"none"}
          height={18}
          ref={ref}
          viewBox={"0 0 24 24"}
          width={18}
          xmlns={"http://www.w3.org/2000/svg"}
      >
          <g stroke={"#dcdae0"} strokeWidth={2}>
              <path d={"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"} />
              <path
                  d={"M10.5 8.677a2 2 0 1 1 1.995 3.261c-.268.068-.495.286-.495.562v.5m0 3h.01"}
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
              />
          </g>
      </svg>
  )),
);
