import { forwardRef, memo } from "react";


export const Busket = memo(
    forwardRef<SVGSVGElement, {}>(({}, ref) => {
        return (
            <svg
                height={18}
                ref={ref}
                viewBox={"0 -3 32 32"}
                width={18}
                xmlns={"http://www.w3.org/2000/svg"}
            >
                <path
                    d={"M27.429 12H22V8h6l-.571 4Zm-.858 6H22v-4h5.143l-.572 4ZM26 22a2 2 0 0 1-2 2h-2v-4h4.286L26 22ZM12 8h8v4h-8V8Zm0 6h8v4h-8v-4Zm0 6h8v4h-8v-4Zm-2-8H4.286L4 8h6v4Zm0 6H4.714l-.285-4H10v4Zm0 6H7a2 2 0 0 1-2-2l-.143-2H10v4ZM31 6h-6.526L26.5 2H29a1 1 0 1 0 0-2h-4l-3.084 6H10.168L7 0H3a1 1 0 1 0 0 2h2.5l2.146 4H1a1 1 0 1 0 0 2h1l1 14a4 4 0 0 0 4 4h17a4 4 0 0 0 4-4l2-14h1a1 1 0 1 0 0-2Z"}
                    fillRule={"evenodd"}
                />
            </svg>
        );
    }),
);
