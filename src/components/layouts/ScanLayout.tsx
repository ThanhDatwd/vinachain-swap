"use client";

import { useState } from "react";

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

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "/") {
      event.preventDefault();
      document.getElementById("blockchain-search")?.focus();
    }
  };

  return (
    <main
      className={`ease-soft-in-out relative h-full transition-all duration-200 font-sans-serif ${containerStyle}`}
    >
      <div className="w-full" onKeyDown={handleKeyPress} tabIndex={50}>
        <HeaderStaking />
        <div className="relative pb-4 bg-gradient-theme " id="box">
          {children}
        </div>
        <FooterScan />
      </div>
    </main>
  );
};
