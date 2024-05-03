"use client";

import { Dropdown } from "@/components/Dropdown";
import { SettingContent } from "@/components/Settings/SettingContent";
import { SwitchButton } from "@/components/SwitchButton";
import { ScanLayout } from "@/components/layouts/ScanLayout";
import { SETTING_CONTENT_DATA } from "@/utils/constants";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function TermOfServicePage() {
  const { t } = useTranslation();
  const [isToggle, setIsToggle] = useState(SETTING_CONTENT_DATA);
  const [dropdownValue, setDropdownValue] = useState<string>();

  const handleChange = (value: string) => {
    setDropdownValue(
      SETTING_CONTENT_DATA.find((item) => item.value === value)?.title
    );
  };

  const handleSwitch = (value: string) => {
    setIsToggle((prev) =>
      prev.map((item) => {
        if (item.value === value) {
          return { ...item, toggle: !item.toggle };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <ScanLayout containerStyle="bg-[#FAFAFA] dark:bg-primaryDark">
      <div className="flex flex-col gap-2 w-full items-center bg-[#fafbfd] dark:bg-[#181818] border !border-[#dee2e6] dark:!border-gray600 text-theme text-[14.5px] px-3 py-12 lg:px-0 lg:pt-12 lg:pb-16">
        <h2 className="text-theme text-[22.5px] font-bold">Site Settings</h2>
        <span className="mb-2 text-center px-2">
          This page allows you to customize your browsing experience on
          Etherscan.
        </span>
        <div className="lg:w-1/2 rounded-xl boxShadow border border-[#e9ecef] pt-4">
          {SETTING_CONTENT_DATA.map((item, index) => (
            <div key={index} className={`px-4 ${index === SETTING_CONTENT_DATA.length -1 && "pb-4"}`}>
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-10 lg:pb-4">
                <SettingContent
                  title={item.title}
                  content={item.content}
                  note={item.note}
                />
                {item.switch ? (
                  <SwitchButton
                    onClickSwitch={() => handleSwitch(item.value)}
                    toggle={
                      isToggle.filter(
                        (toggle) => toggle.value === item.value
                      )[0].toggle
                    }
                  />
                ) : (
                  <Dropdown
                    containerStyle={{ zIndex: "initial"}}
                    classNameMore="w-[250px]"
                    title={dropdownValue}
                    defaultValue={item.options[0]}
                    options={item.options}
                    onChange={handleChange}
                  />
                )}
              </div>
              {index < SETTING_CONTENT_DATA.length - 1 && (
                <hr className="line my-4" />
              )}
            </div>
          ))}
          <hr className="line my-0" />
          <div className="flex justify-end p-4">
            <button className="button-primary tetx-[14.5px] capitalize py-[4.8px] px-[9.6px]">Save Preferences</button>
          </div>
        </div>
        <div className="lg:w-1/2 self-start lg:self-auto text-[12.5px] text-[#bbb] mt-2 mb-4">* Site preferences are saved as browser cookies.</div>
      </div>
    </ScanLayout>
  );
}
