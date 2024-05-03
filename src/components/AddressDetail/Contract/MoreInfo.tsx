import { InfoIcon } from "@/assets/icons/InfoIcon"
import { useTheme } from "@/hooks/useTheme"
import { THEME } from "@/utils/constants"
import Link from "next/link"

export const MoreInfo = () => {
    const { theme } = useTheme();

    return (
        <div className="flex items-center gap-1 p-[8.45px] text-xs text-[#495057] dark:text-[#F5F5F5] bg-[#e9ecef] dark:bg-gray700 !border !border-[#dee2e6] dark:!border-gray600 rounded-md">
            <InfoIcon color={theme === THEME.DARK ? "#FAFAFA" : "#212529"}/>
            <span>
                Descriptions included below are taken from the contract source code&nbsp;
                <Link href="" className="link-color">NatSpec</Link>
                . Etherscan does not provide any guarantees on their safety or accuracy.
            </span>
        </div>
    )
}