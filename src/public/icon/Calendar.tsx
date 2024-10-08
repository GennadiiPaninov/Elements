import { forwardRef, memo } from "react";

import {IconProps} from "../../shared/assets/types/types";


export const Calendar = memo(
  forwardRef<SVGSVGElement, IconProps>(({}, ref) => (
      <svg
          fill={"none"}
          height={18}
          ref={ref}
          stroke={"#dcdae0"}
          viewBox={"0 0 24 24"}
          width={18}
          xmlns={"http://www.w3.org/2000/svg"}
      >
          <path
              clipRule={"evenodd"}
              d={"M6 2a1 1 0 0 1 2 0v1h8V2a1 1 0 1 1 2 0v1h1a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h1V2Zm10 3v1a1 1 0 1 0 2 0V5h1a1 1 0 0 1 1 1v3H4V6a1 1 0 0 1 1-1h1v1a1 1 0 0 0 2 0V5h8ZM4 11v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9H4Z"}
              fill={"#dcdae0"}
              fillRule={"evenodd"}
          />
      </svg>
  )),
);
