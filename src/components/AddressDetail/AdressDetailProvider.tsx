"use client"
import React, { createContext, useState, ReactNode } from "react";

interface AddressContextType {
  toggleAdvanceMode: boolean;
  setToggleAdvanceMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultCtxVal: AddressContextType = {
  toggleAdvanceMode: false,
  setToggleAdvanceMode: () => {},
};

export const AddressCtx = createContext<AddressContextType>(defaultCtxVal);

interface AddressProviderProps {
  children: ReactNode;
}

export const AddressDetailProvider: React.FC<AddressProviderProps> = ({
  children,
}: AddressProviderProps) => {
  const [toggleAdvanceMode, setToggleAdvanceMode] = useState<boolean>(false);
  return (
    <AddressCtx.Provider
      value={{
        toggleAdvanceMode,
        setToggleAdvanceMode,
      }}
    >
      {children}
    </AddressCtx.Provider>
  );
};
