"use client";

import { useEffect, useRef, useState } from "react";

import Header from "./Header";
import "../../../i18n";
import { Footer } from "./Footer";
import HeaderScan from "./HeaderScan";
import { VinaScanFooter } from "@/utils/constants";
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

  useEffect(() => {
    if (menuBarRef.current) {
      const height = menuBarRef.current.offsetHeight;
      setHeightMenuBar(height);
    }
  }, []);

  return (
    <main
      className={`ease-soft-in-out relative h-full transition-all duration-200 font-sans-serif ${containerStyle}`}
    >
      <div
        className="w-full"
        onKeyDown={handleKeyPress}
        tabIndex={50}
        style={{ marginBottom: `${heightMenuBar}px` }}
      >
        <HeaderStaking menuBarRef={menuBarRef} />
        <div className="relative pb-4 bg-gradient-theme " id="box">
          {children}
        </div>
        <FooterScan />
      </div>
    </main>
  );
};
