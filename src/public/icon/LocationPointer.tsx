import { forwardRef, memo } from "react";

import {IconProps} from "../../shared/assets/types/types";


export const LocationPointer = memo(
  forwardRef<SVGSVGElement, IconProps>(({}, ref) => {
    return (
      <svg
        fill={"none"}
        height={24}
        ref={ref}
        width={24}
        xmlns={"http://www.w3.org/2000/svg"}
      >
        <path
          d={
            "M12 2a8 8 0 0 0-8 7.92c0 5.48 7.05 11.58 7.35 11.84a1 1 0 0 0 1.3 0C13 21.5 20 15.4 20 9.92A8 8 0 0 0 12 2Zm0 17.65c-1.67-1.59-6-6-6-9.73a6 6 0 1 1 12 0c0 3.7-4.33 8.14-6 9.73Z"
          }
          fill={"#fff"}
        />
        <path
          d={
            "M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
          }
          fill={"#fff"}
        />
      </svg>
    );
  }),
);
