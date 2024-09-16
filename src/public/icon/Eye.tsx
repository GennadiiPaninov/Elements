import { forwardRef, memo } from "react";

import {IconProps} from "../../shared/assets/types/types";


export const Eye = memo(
  forwardRef<SVGSVGElement, IconProps>(({}, ref) => (
      <svg
          fill={"none"}
          height={18}
          ref={ref}
          viewBox={"0 0 16 16"}
          width={18}
          xmlns={"http://www.w3.org/2000/svg"}
      >
          <path
              clipRule={"evenodd"}
              d={"m0 8 3.08-3.695a6.405 6.405 0 0 1 9.84 0L16 8l-3.08 3.695a6.405 6.405 0 0 1-9.84 0L0 8Zm8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"}
              fill={"#000"}
              fillRule={"evenodd"}
          />
      </svg>
  )),
);
