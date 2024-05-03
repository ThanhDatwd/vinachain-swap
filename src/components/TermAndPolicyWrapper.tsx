import BottomShapeIcon from "@/assets/icons/BottomShapeIcon";
import { useTheme } from "@/hooks/useTheme";
import { THEME, getStaticURL } from "@/utils/constants";
import Image from "next/image";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

export const TermAndPolicyWrapper = ({title, lastedDate, children}: {title: string; lastedDate: string; children: ReactNode}) => {
    const { t } = useTranslation();
    const { theme } = useTheme();

    return (
        <div className="flex flex-col items-center px-3 lg:px-10 py-16 bg-[#fbfbfd] dark:bg-[#181818]">
            <div className="w-full lg:w-[1012px] rounded-xl" style={{boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)"}}>
                <div className="relative">
                    <div className="flex flex-col-reverse gap-4 lg:flex-row justify-between p-8 pb-8 lg:pt-10 lg:pb-14 bg-[#081d35] dark:bg-[#0a0a0a] rounded-xl">
                        <div className="flex flex-col gap-2 text-sm text-white">
                            <h2 className="text-3xl text-white dark:text-[#FAFAFA] font-semibold">{title}</h2>
                            <span>{t("vinaScan.lastUpdated")}{" "}{lastedDate}</span>
                        </div>
                        <div>
                            <Image src={`${getStaticURL()}/assets/images/logo_${theme}.svg`} alt="Logo Etherscan" width={100} height={100} className="w-12 h-12"/>
                        </div>
                    </div>
                    <figure className="w-full absolute bottom-0">
                    <BottomShapeIcon className="w-full" color={theme === THEME.DARK ? "#0a0a0a" : "#FFF"}/>
                    </figure>
                </div>
                {children}
            </div>
        </div>
    )
}