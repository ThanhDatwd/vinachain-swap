"use client";

import { useTheme } from "@/hooks/useTheme";
import { THEME, getStaticURL } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  const { theme } = useTheme();

  return (
    <Link className="w-10 h-10 z-20" href={"/"}>
      <Image
        src={`${getStaticURL()}/assets/images/logo_scan_${theme}.svg`}
        alt="metamask"
        width={68}
        height={68}
      />
    </Link>
  );
};
