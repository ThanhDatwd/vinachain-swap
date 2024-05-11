"use client";

import { useRef, useState } from "react";

import { usePathname } from "next/navigation";
import "../../../i18n";
import { FooterScan } from "./FooterScan";
import { HeaderStaking } from "./HeaderStaking";

export const ScanLayout = ({
  children,
  pageTitle,
  containerStyle,
}: {
  children: React.ReactNode;
  pageTitle?: string;
  containerStyle?: string;
}) => {
  const menuBarRef = useRef<any>(null);
  const [heightMenuBar, setHeightMenuBar] = useState(0);
  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "/") {
      event.preventDefault();
      document.getElementById("blockchain-search")?.focus();
    }
  };

  const pathname = usePathname();

  const isRegisterPage = pathname === "/login" || pathname === "/register";

  return (
    <main
      className={`ease-soft-in-out relative h-full transition-all duration-200 font-sans-serif ${containerStyle}`}
    >
      <div
        className={`w-full ${isRegisterPage ? "pb-0" : "pb-[68px]"} lg:pb-0`}
        onKeyDown={handleKeyPress}
        tabIndex={50}
      >
        <HeaderStaking menuBarRef={menuBarRef} />
        <div className="relative pb-4 bg-gradient-theme min-h-[80vh] " id="box">
          {children}
        </div>
        <FooterScan />
      </div>
    </main>
  );
};
