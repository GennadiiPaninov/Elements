import { forwardRef, memo } from "react";


export const BurgerMenu = memo(
    forwardRef<SVGSVGElement, {}>(({}, ref) => {
        return (
            <svg
                fill={"none"}
                height={85}
                ref={ref}
                viewBox={"0 0 24 24"}
                width={85}
                xmlns={"http://www.w3.org/2000/svg"}
            >
                <path
                    d={"M4 7h16M4 12h16M4 17h16"}
                    stroke={"#001A72"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                    strokeWidth={1.5}
                />
            </svg>
        );
    }),
);
