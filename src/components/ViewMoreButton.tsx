import { ArrowRightIcon } from "@/assets/icons/ArrowRightIcon";
import { useTheme } from "@/hooks/useTheme";
import Link from "next/link";
import { useState } from "react";

export const ViewMoreButton = ({
  label,
  link,
}: {
  label: string;
  link: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();

  return (
    <Link
      href={link}
      className="group flex items-center justify-center bg-[#f8f9fa] dark:bg-[#111] rounded-b-2xl border-t border-[#e9ecef] font-medium gap-2 text-gray550 dark:text-[#bbb] hover:text-[#066a9c] dark:hover:text-[#9ccee7] uppercase text-xs p-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {label}
      <ArrowRightIcon color={isHovered ? "#066a9c" : "#6c757d"} />
    </Link>
  );
};
