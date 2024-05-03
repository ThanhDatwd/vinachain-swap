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

interface Props {}

const recipients = ["rsync-builder", "Flashbots: Builder", "beaverbuild"];

export const LatestBlock = ({}: Props) => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [loadingBlock, setLoadingBlock] = useState<boolean>(false);
  const [listBlock, setListBlock] = useState<any>([]);
  const [isHovered, setIsHovered] = useState(false);

  const generateRandomBlock = (_: any, index: number) => ({
    id: index + 1,
    timestamp: `${Math.floor(Math.random() * 60)} seconds ago`,
    recipient: {
      id: Math.floor(Math.random() * 1000000) + 1,
      name: recipients[Math.floor(Math.random() * recipients.length)],
      address: generateRandomEthereumAddress(),
    },
    transactions: {
      count: Math.floor(Math.random() * 200),
      duration: `${Math.floor(Math.random() * 30)} sec`,
    },
    amount: `${(Math.random() * 0.2 + 0.05).toFixed(4)} VPC`,
  });

  const handleFetchData = async () => {
    const dataBlock: any[] = Array.from({ length: 7 }, generateRandomBlock);

    // const latestBlockNumber = await web3.eth.getBlockNumber();

    // for (
    //   let i = latestBlockNumber;
    //   i > Number(BigInt(latestBlockNumber)) - 10;
    //   i--
    // ) {
    //   if (Number(BigInt(i)) === 0) {
    //     break;
    //   }

    //   const block = await web3.eth.getBlock(i, true);

    //   let gasFeeTotal = 0;
    //   for (const txHash of block.transactions) {
    //     const gasPrice = parseInt(txHash.gasPrice);
    //     const gasUsed = parseInt(txHash.gas.toString());
    //     const gasFee = gasPrice * gasUsed;
    //     gasFeeTotal += gasFee;
    //   }

    //   dataBlock.push({
    //     id: block.number,
    //     timestamp: DateTime.fromSeconds(Number(block.timestamp)).toRelative(),
    //     recipient: {
    //       id: block.number,
    //       name: recipients[Math.floor(Math.random() * recipients.length)],
    //     },
    //     transactions: {
    //       count: block.transactions.length,
    //       duration: `${Math.floor(Math.random() * 30)} sec`,
    //     },
    //     amount: `${Number(
    //       web3.utils.fromWei(gasFeeTotal.toString(), "ether")
    //     ).toFixed(6)} ETH`,
    //   });
    // }

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
                    <BlockIcon
                      bg={isDarkTheme(theme) ? "#1E1E22" : "#F6F6F6"}
                      color={isDarkTheme(theme) ? "#FFF" : "#333"}
                    />
                  </Link>
                  <div className="flex md:flex-col">
                    <Link
                      href={`blocks/${item.recipient.id}`}
                      className="text-[14.5px] link-color dark:text-scanDark mr-1"
                    >
                      {item.recipient.id}
                    </Link>
                    <div className="text-[12.7px]">{item.timestamp}</div>
                  </div>
                  <div className="flex flex-col gap-1  md:hidden">
                    <div className="text-[14.5px]">
                      Free Recipient
                      <Link
                        href={"/coming-soon"}
                        className="link-color dark:text-scanDark"
                      >
                        {item.recipient.name}
                      </Link>
                    </div>
                    <div className="text-[12.7px]">
                      <Link
                        href={`blocks/${item.recipient.id}`}
                        className="link-color dark:text-scanDark"
                      >
                        {item.transactions.count} txns
                      </Link>
                      in {item.transactions.duration}
                      <button className="p-1 ml-2 border  border-[#DCDCDC] text-[10px] rounded-lg ">
                        {item.amount}
                      </button>
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-2 py-4 hidden md:table-cell">
                <div>
                  <div className="text-[14.5px]">
                    Free Recipient&nbsp;
                    <TooltipCustom content={item.recipient.address}>
                      <Link
                        href={`/address/${item.recipient.address}`}
                        className="link-color dark:text-scanDark"
                      >
                        {item.recipient.name}&nbsp;
                      </Link>
                    </TooltipCustom>
                  </div>
                  <div>
                    <Link
                      href={`blocks/${item.recipient.id}`}
                      className="link-color dark:text-scanDark text-[14.5px]"
                    >
                      {item.transactions.count} txns&nbsp;
                    </Link>
                    <span className="text-[12.7px]">
                      in {item.transactions.duration}
                    </span>
                  </div>
                </div>
              </td>
              <td className="px-2 pr-4 py-4 hidden md:table-cell" align="right">
                <div className="p-1 border w-fit border-[#DCDCDC] text-[11px] rounded-lg">
                  {item.amount}
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
              className="w-full flex items-center justify-center gap-2 hover:link-color dark:hover:text-scanDark"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="mb-1">
                {t("vinaScan.history.block.viewAll")}
              </span>
              <ArrowNextIcon  />
            </Link>
          </td>
        </tr>
      </tfoot>
    </>
  );
};
