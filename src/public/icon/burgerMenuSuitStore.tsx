import { forwardRef, memo } from "react";


export const BurgerMenuSuitStore = memo(
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
                <g clipPath={"url(#a)"}>
                    <path
                        d={"M3 6h18M3 12h18M3 18h18"}
                        stroke={"#000000"}
                        strokeLinecap={"round"}
                        strokeLinejoin={"round"}
                        strokeWidth={2.5}
                    />
                </g>
                <defs>
                    <clipPath id={"a"}>
                        <path d={"M0 0h24v24H0z"} fill={"#fff"} />
                    </clipPath>
                </defs>
            </svg>
        );
    }),
);
