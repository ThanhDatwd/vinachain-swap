import classNames from "classnames";

export const ArrowTop = ({ className }: { className?: string }) => {
  return (
    <div className={classNames("w-4 h-4", className)}>
      <svg
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_189_2145"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="25"
          height="25"
        >
          <path
            d="M24.876 0.193359H0.875977V24.1934H24.876V0.193359Z"
            fill="#D9D9D9"
          />
        </mask>
        <g mask="url(#mask0_189_2145)">
          <path
            d="M12.876 22.1932C12.3237 22.1932 11.876 21.7454 11.876 21.1932V11.0182L6.98848 15.9056C6.59599 16.2981 5.95877 16.2953 5.56976 15.8994C5.18559 15.5083 5.18837 14.8808 5.57598 14.4932L12.1689 7.90032C12.5594 7.50979 13.1926 7.50979 13.5831 7.90032L20.176 14.4932C20.5636 14.8808 20.5663 15.5083 20.1822 15.8994C19.7932 16.2953 19.1559 16.2981 18.7634 15.9056L13.876 11.0182V21.1932C13.876 21.7454 13.4283 22.1932 12.876 22.1932Z"
            fill="currentColor"
          />
          <path
            d="M21.9286 2H4.07143C3.47969 2 3 2.44772 3 3C3 3.55228 3.47969 4 4.07143 4H21.9286C22.5203 4 23 3.55228 23 3C23 2.44772 22.5203 2 21.9286 2Z"
            fill="currentColor"
          />
        </g>
      </svg>
    </div>
  );
};
