import React, { ReactNode, useEffect, useState } from "react";

interface Tab {
  hash?: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  tabRightContent?: ReactNode;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, tabRightContent, className}) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (index: number, hash: string) => {
    setActiveTab(index);
    if (hash === "") {
      window.history.replaceState(null, "", window.location.pathname);
    } else {
      window.location.hash = hash;
    }
  };
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const value = hash.substring(1);
      tabs.find((item, index) => {
        if (item?.hash === value) {
          setActiveTab(index);
        }
      });
    }
  }, []);
  return (
    <div className="flex flex-col gap-4">
      <div className={`flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 ${className}`}>
        <div className="flex gap-1">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index, tab.hash || "")}
              className={`text-sm font-medium leading-1 duration-150 ease-linear  ${
                activeTab === index
                  ? "bg-[#0784c3] dark:bg-scanDark text-[#FAFAFA]" 
                  : "bg-[#e9ecef] dark:bg-[#222222] text-[#081D35] dark:text-[#CCCCCC]"
              } py-[4.8px] px-[9.6px] rounded-[8px] whitespace-nowrap`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {tabRightContent && tabRightContent}
      </div>
      <div className="">{tabs[activeTab].content}</div>
    </div>
  );
};
