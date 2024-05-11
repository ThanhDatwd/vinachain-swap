import React, { ReactNode, useEffect, useState } from "react";

interface Tab {
  hash?: string;
  label: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  tabTopContent?: ReactNode;
  className?: string;
}

export const TabProfile: React.FC<TabsProps> = ({
  tabs,
  tabTopContent,
  className,
}) => {
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
    <div className="flex flex-col lg:flex-row gap-6 w-full lg:w-auto">
      <div
        className={`flex flex-col items-start exchange-card px-6 h-fit w-full lg:w-fit ${className}`}
      >
        {tabTopContent}
        <div className="flex flex-col gap-2 w-full lg:min-w-[266px]">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index, tab.hash || "")}
              className={`flex gap-2 items-center py-2 px-3 ${
                activeTab === index
                  && "active-tab-bg"
              } whitespace-nowrap`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="flex-1">{tabs[activeTab].content}</div>
    </div>
  );
};
