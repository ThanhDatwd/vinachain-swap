import { useTranslation } from "react-i18next";
import { Tabs } from "../../Tabs";
import { Code } from "./Code";
import { InfoIcon } from "@/assets/icons/InfoIcon";
import { ArrowBottomIcon } from "@/assets/icons/ArrowDownIcon";
import { ChevronDownIcon } from "@/assets/icons/ChevronDownIcon";
import { CheckronTopIcon } from "@/assets/icons/ChevronTopIcon";
import { HelpIcon } from "@/assets/icons/HelpIcon";
import { ReadContact } from "./ReadContact";
import { WriteContract } from "./WriteContract";
import { THEME } from "@/utils/constants";
import { useTheme } from "@/hooks/useTheme";

export const Contract = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const datatabs = [
    {
      hash: "code",
      label: "Code",
      content: <Code />,
    },
    {
      hash: "readContract",
      label: "Read Contract",
      content: <ReadContact />,
    },
    {
      hash: "writeContract",
      label: "Write Contract",
      content: <WriteContract />,
    },
  ];
  return (
    <div className="p-5 bg-theme rounded-xl border border-[#e9ecef]">
      <Tabs
        tabs={datatabs}
        tabRightContent={
          <div className="flex items-center gap-2 rounded-md">
            <HelpIcon width={18} height={18}/>
            <div className="flex items-center border border-[#e9ecef] rounded-lg">
              <input placeholder="Search Source Code" className="outline-none border-none rounded-lg py-1 px-2 text-[14.5px] text-white placeholder:text-[#6c757d]"/>
              <div className="py-2 px-2 border-l border-[#e9ecef]">
                <ChevronDownIcon color={theme === THEME.DARK ? "#FAFAFA" : "#212529"} width={14.5} height={15}/>
              </div>
              <div className="py-2 px-2 border-l border-[#e9ecef]">
                <CheckronTopIcon color={theme === THEME.DARK ? "#FAFAFA" : "#212529"}/>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};
