import classNames from "classnames";

export const LabelIcon = ({ className }: { className?: string }) => {
  return (
    <div className={classNames("w-4 h-4", className)}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_109_1893"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#0D92A5" />
        </mask>
        <g mask="url(#mask0_109_1893)">
          <path
            d="M12.3002 4H11.7002C11.1479 4 10.7002 4.44771 10.7002 5V6.21624H13.3002V5C13.3002 4.44772 12.8525 4 12.3002 4Z"
            fill="currentColor"
          />
          <path
            d="M13.3002 9.69995H10.7002V12.2161H13.3002V9.69995Z"
            fill="currentColor"
          />
          <path
            d="M13.3002 15.7H10.7002V18.9162C10.7002 19.6342 11.2822 20.2162 12.0002 20.2162V20.2162C12.7182 20.2162 13.3002 19.6342 13.3002 18.9162V15.7Z"
            fill="currentColor"
          />
          <path
            d="M5 6.5C5 6.22386 5.22386 6 5.5 6H18.7754C18.8948 6 19.0103 6.04276 19.1009 6.12054L20.5578 7.37054C20.7903 7.57007 20.7903 7.92993 20.5578 8.12946L19.1009 9.37946C19.0103 9.45724 18.8948 9.5 18.7754 9.5H5.5C5.22386 9.5 5 9.27614 5 9V6.5Z"
            stroke="currentColor"
          />
          <path
            d="M20 12.5C20 12.2239 19.7761 12 19.5 12H6.2247C6.10526 12 5.98977 12.0428 5.89912 12.1205L4.44226 13.3705C4.20971 13.5701 4.20971 13.9299 4.44226 14.1295L5.89912 15.3795C5.98976 15.4572 6.10526 15.5 6.2247 15.5H19.5C19.7761 15.5 20 15.2761 20 15V12.5Z"
            stroke="currentColor"
          />
        </g>
      </svg>
    </div>
  );
};
