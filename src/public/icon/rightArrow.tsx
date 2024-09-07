import { forwardRef, memo } from "react";


export const RightArrow = memo(
    forwardRef<SVGSVGElement, {}>(({}, ref) => {
        return (
            <svg
                fill={"none"}
                height={18}
                ref={ref}
                viewBox={"0 0 24 24"}
                width={18}
                xmlns={"http://www.w3.org/2000/svg"}
            >
                <path
                    d={"m10 7 5 5-5 5"}
                    stroke={"#dfdddd"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                    strokeWidth={1.5}
                />
            </svg>
        );
    }),
);
