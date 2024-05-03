import classNames from "classnames";

export const BlockChainChat = ({ className }: { className?: string }) => {
  return (
    <div className={classNames("w-4 h-4", className)}>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_55_323"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_55_323)">
          <path
            d="M8.74363 15.3946V16.6681C8.74363 17.2627 9.24416 17.7449 9.86131 17.7449L16.2741 17.7888C16.4344 17.7888 16.5879 17.851 16.6996 17.9613L18.4907 19.979C18.5275 20.0205 18.5976 19.9964 18.599 19.9422L18.6281 18.9277L18.6469 18.3452C18.6566 18.0356 18.9197 17.7895 19.2418 17.7895L20.8823 17.7455C21.4995 17.7455 22 17.2633 22 16.6688V9.32504C22 8.7305 21.4995 8.24831 20.8823 8.24831H16.1618M15.2564 6.07672V13.4198C15.2564 14.0144 14.7558 14.4966 14.1387 14.4966L7.72591 14.5405C7.56555 14.5405 7.41213 14.6027 7.30037 14.713L5.50931 16.7307C5.47252 16.7722 5.4024 16.7481 5.40102 16.6939L5.37186 15.6794L5.35312 15.0969C5.3434 14.7873 5.08029 14.5412 4.75818 14.5412L3.11767 14.4972C2.50052 14.4972 2 14.015 2 13.4205V6.07672C2 5.48218 2.50052 5 3.11767 5H14.1387C14.7558 5 15.2564 5.48218 15.2564 6.07672Z"
            stroke="currentColor"
            stroke-miterlimit="10"
          />
        </g>
      </svg>
    </div>
  );
};
