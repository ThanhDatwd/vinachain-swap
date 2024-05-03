import { TableType } from "@/utils/constants";
import React, { FC, PropsWithChildren, createContext } from "react";
interface TableCtxProps {
  tableScanLeft: TableType;
  tableScanRight: TableType;
}
const defaultCtxVal = {
  tableScanLeft: TableType.LATEST_BLOCKS,
  tableScanRight: TableType.LATEST_TRANSACTIONS,
};
export const TableCtx = createContext<TableCtxProps>(defaultCtxVal);

export const TableProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <TableCtx.Provider value={defaultCtxVal}>{children}</TableCtx.Provider>
  );
};
