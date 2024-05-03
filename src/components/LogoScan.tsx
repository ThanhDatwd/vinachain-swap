"use client";

import { useTheme } from "@/hooks/useTheme";
import { getStaticURL } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";

export const LogoScan = () => {
  const { theme } = useTheme();
  return (
    <Link className="w-40 h-10 z-10" href={"/"}>
      <Image
        src={`${getStaticURL()}/assets/images/logo_scan_${theme}.svg`}
        alt="metamask"
        width={200}
        height={200}
      />
    </Link>
  );
};
