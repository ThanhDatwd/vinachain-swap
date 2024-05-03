import { ArrowNextIcon } from "@/assets/icons/ArrowNextIcon";
import { BlockIcon } from "@/assets/icons/BlockIcon";
import { useTheme } from "@/hooks/useTheme";
import { isDarkTheme } from "@/utils/theme";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../../../i18n";
import { LoadingSpinner } from "../LoadingSpinner";
import { generateRandomEthereumAddress } from "@/utils/formatTrxId";
import { TooltipCustom } from "../Tooltip";
import { GuzzlesIcon } from "@/assets/icons/GuzzlesIcon";

interface Props {}

const contracts = [
    "Tether: USDT Stablecoin",
    "Uniswap: Universal Router",
    "Scroll: L1 Scroll Messenger Proxy",
    "Circle: USDC Token",
    "Banana Gun: Router 2",
    "Pendle: Router V3"
  ];

export const TopGuzzlers = ({}: Props) => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [loadingBlock, setLoadingBlock] = useState<boolean>(false);
  const [listBlock, setListBlock] = useState<any>([]);
  const [isHovered, setIsHovered] = useState(false);

  const generateRandomBlock = (_: any, index: number) => ({
    id: index + 1,
    timestamp: `${Math.floor(Math.random() * 60)} seconds ago`,
    from: {
      publicTag:contracts[Math.floor(Math.random() * contracts.length)],
      address: generateRandomEthereumAddress(),
    },
   
    fee: {
      usd: Math.random()*100,
      vpc: Math.random(),
    },
    gasUsed: {
      percent: Math.random() *10,
    },
  });

  const handleFetchData = async () => {
    const dataBlock: any[] = Array.from({ length: 7 }, generateRandomBlock);
    setListBlock(dataBlock);
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <>
      <tbody className="">
        {loadingBlock ? (
          <tr>
            <td colSpan={3} rowSpan={7}>
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-20 h-20">
                  <LoadingSpinner />
                </div>
              </div>
            </td>
          </tr>
        ) : (
          listBlock.map((item: any, index: number) => (
            <tr
              key={index}
              className={`p-4 border-b ${
                index === listBlock.length - 1 ? "" : "border-[#DCDCDC]"
              }`}
            >
              <td className="px-4 pl-4 md:pr-2 py-4">
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
                  <Link
                    href="/coming-soon"
                    className="hidden md:block cursor-pointer"
                  >
                    {/* Assuming BlockIcon is a component */}
                    <GuzzlesIcon
                      bg={isDarkTheme(theme) ? "#1E1E22" : "#F6F6F6"}
                      color={isDarkTheme(theme) ? "#FFF" : "#333"}
                    />
                  </Link>
                  <div className="flex md:flex-col">
                    <TooltipCustom
                      content={
                        <div className="flex flex-col">
                          <span> Public tag: {item.from.publicTag}</span>
                          <span>({item.from.address})</span>
                        </div>
                      }
                    >
                      <Link
                        href={`/address/${item.from.address}`}
                        className=" text-[14.5px] link-color dark:text-scanDark mr-1"
                      >
                        {item.from.publicTag}
                      </Link>
                    </TooltipCustom>
                  </div>
                  
                </div>
              </td>
              <td className="px-2 py-4 table-cell">
                <div>
                  <div className="flex flex-col gap-1 ">
                    <div className="text-[14.5px]">
                      <span className="text-[#65757D] dark:text-gray400 text-[12.5px]">
                        {" "}
                        Fee{" "}
                      </span>
                      <div className=" text-[#212529] dark:text-[#F5F5F5]">
                        ${item.fee.usd.toFixed(3)} &nbsp;
                        <span className=" text-[#65757D] dark:text-gray400">
                          ( {(item.fee.usd/3).toFixed(3)}VPC)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-2 pr-4 py-4 table-cell">
                <div className="flex flex-col gap-1 ">
                  <div className="text-[14.5px]">
                    <span className="text-[#65757D] dark:text-gray400 text-[12.5px]">
                      {" "}
                      Use{" "}
                    </span>
                    <div className=" text-[#212529] dark:text-[#F5F5F5]">
                      {item.gasUsed.percent.toFixed(2)} %
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          ))
        )}
      </tbody>
      <tfoot>
        <tr>
          <td
            colSpan={3}
            align="center"
            className="border-t border-[#DCDCDC] p-4"
          >
            <Link
              href={"/blocks"}
              className="w-full flex items-center justify-center gap-2  hover:link-color dark:hover:text-scanDark"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="mb-1">
                {t("vinaScan.history.topGuzzlers.viewAll")}
              </span>
              <ArrowNextIcon />
            </Link>
          </td>
        </tr>
      </tfoot>
    </>
  );
};
