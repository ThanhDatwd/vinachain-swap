import classNames from "classnames";

export const SunIcon = ({ className, color }: { className?: string; color?: string }) => {
  return (
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="a"
          style={{
            maskType: "alpha"
          }}
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={24}
          height={24}
        >
          <path fill="#D9D9D9" d="M0 0H24V24H0z" />
        </mask>
        <g mask="url(#a)">
          <path
            d="M12 16.5c-1.249 0-2.31-.438-3.187-1.313C7.938 14.31 7.5 13.248 7.5 12c0-1.249.438-2.31 1.313-3.187C9.69 7.938 10.751 7.5 12 7.5c1.249 0 2.31.438 3.187 1.313.875.876 1.313 1.938 1.313 3.187 0 1.249-.438 2.31-1.313 3.187-.876.875-1.938 1.313-3.187 1.313zm-7-3.75H1.25v-1.5H5v1.5zm17.75 0H19v-1.5h3.75v1.5zM11.25 5V1.25h1.5V5h-1.5zm0 17.75V19h1.5v3.75h-1.5zM6.573 7.577L4.231 5.315l1.06-1.11 2.255 2.318-.973 1.054zM18.71 19.794l-2.271-2.332.988-1.039 2.342 2.262-1.06 1.11zm-2.287-13.22l2.262-2.343 1.11 1.06-2.318 2.255-1.054-.973zM4.206 18.71l2.332-2.271 1.02.988-2.252 2.352-1.1-1.07z"
            fill="#B5A1DC"
          />
        </g>
      </svg>
  );
};
