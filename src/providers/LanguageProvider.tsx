"use client";
import { changeLanguage } from "i18next";
import { FC, PropsWithChildren, createContext, useEffect } from "react";

export const LanguageContext = createContext(undefined);
export const LanguageProvider: FC<PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const locale = localStorage.getItem("locale");
      if (locale) {
        try {
          changeLanguage(locale);
        } catch (error) {
          console.log(error);
        }
      }
    }
  }, []);

  return (
    <LanguageContext.Provider value={undefined}>
      {children}
    </LanguageContext.Provider>
  );
};
