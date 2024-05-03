"use client";
import { TableType } from "@/utils/constants";
import { TableCustom } from "../table-custom/TableCustom";
import { useEffect, useState } from "react";

export default function HistorySection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-6 ">
      {/* BLOCK */}
      <div className="w-full bg-[#ffff] dark:bg-[#111] shadow-md rounded-xl border border-[#DCDCDC] box-shadow">
        <TableCustom defaultType={TableType.LATEST_BLOCKS} tableKey="TABLE_SCAN_LEFT" />
      </div>
      {/* TRANSACTION */}
      <div className="w-full bg-[#ffff] dark:bg-[#111] shadow-md rounded-xl border border-[#DCDCDC] box-shadow">
        <TableCustom defaultType={TableType.LATEST_TRANSACTIONS} tableKey="TABLE_SCAN_RIGHT" />
      </div>
    </div>
  );
}
