import classNames from "classnames";

export const ArrowTurnDownLeftIcon = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <div className={classNames("w-4 h-4", className)}>
      <svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_4309_984"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="25"
          height="25"
        >
          <rect
            x="0.656738"
            y="0.96106"
            width="24"
            height="24"
            fill="#D9D9D9"
          />
        </mask>
        <g mask="url(#mask0_4309_984)">
          <path
            d="M10.3566 18.6434C10.1597 18.8404 9.84035 18.8404 9.64341 18.6434L5.70711 14.7071C5.31658 14.3166 5.31658 13.6834 5.70711 13.2929L9.64904 9.35096C9.84582 9.15418 10.1651 9.15483 10.3611 9.35241V9.35241C10.5559 9.54886 10.5553 9.86589 10.3596 10.0616L6.92115 13.5H18C19.1046 13.5 20 12.6046 20 11.5V7.5C20 7.22386 20.2239 7 20.5 7V7C20.7761 7 21 7.22386 21 7.5V11.5C21 13.1569 19.6569 14.5 18 14.5H6.92115L10.3563 17.9299C10.5535 18.1269 10.5536 18.4464 10.3566 18.6434V18.6434Z"
            fill="currentColor"
          />
        </g>
      </svg>
    </div>
  );
};
