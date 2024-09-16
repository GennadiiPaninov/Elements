import { forwardRef, memo } from "react";

import {IconProps} from "../../shared/assets/types/types";


export const EyeOff = memo(
  forwardRef<SVGSVGElement, IconProps>(({}, ref) => (
      <svg
          fill={"none"}
          height={18}
          ref={ref}
          viewBox={"0 0 16 16"}
          width={18}
          xmlns={"http://www.w3.org/2000/svg"}
      >
          <g fill={"#000"}>
              <path
                  clipRule={"evenodd"}
                  d={"M16 16h-3l-2.163-2.662a6.405 6.405 0 0 1-7.758-1.643L0 8l3.08-3.695a5.66 5.66 0 0 1 .217-.248L0 0h3l13 16ZM5.353 6.588A3 3 0 0 0 8.84 10.88L5.353 6.588Z"}
                  fillRule={"evenodd"}
              />
              <path d={"m16 8-1.772 2.127L7.634 2.01a6.408 6.408 0 0 1 5.287 2.295L16 8Z"} />
          </g>
      </svg>
  )),
);
