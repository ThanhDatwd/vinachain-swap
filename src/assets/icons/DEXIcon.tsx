import classNames from "classnames";

export const DexIcon = ({ className }: { className?: string }) => {
  return (
    <div className={classNames("w-4 h-4", className)}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_51_129"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_51_129)">
          <path
            d="M1.72966 6.64645C1.5344 6.84171 1.5344 7.15829 1.72966 7.35355L4.91164 10.5355C5.10691 10.7308 5.42349 10.7308 5.61875 10.5355C5.81401 10.3403 5.81401 10.0237 5.61875 9.82843L2.79032 7L5.61875 4.17157C5.81401 3.97631 5.81401 3.65973 5.61875 3.46447C5.42349 3.2692 5.10691 3.2692 4.91164 3.46447L1.72966 6.64645ZM22 7.5C22.2761 7.5 22.5 7.27614 22.5 7C22.5 6.72386 22.2761 6.5 22 6.5V7.5ZM22.2703 18.3536C22.4656 18.1583 22.4656 17.8417 22.2703 17.6464L19.0884 14.4645C18.8931 14.2692 18.5765 14.2692 18.3812 14.4645C18.186 14.6597 18.186 14.9763 18.3812 15.1716L21.2097 18L18.3812 20.8284C18.186 21.0237 18.186 21.3403 18.3812 21.5355C18.5765 21.7308 18.8931 21.7308 19.0884 21.5355L22.2703 18.3536ZM2 17.5C1.72386 17.5 1.5 17.7239 1.5 18C1.5 18.2761 1.72386 18.5 2 18.5V17.5ZM2.08322 7.5H22V6.5H2.08322V7.5ZM21.9168 17.5H2V18.5H21.9168V17.5Z"
            fill="currentColor"
          />
        </g>
      </svg>
    </div>
  );
};
