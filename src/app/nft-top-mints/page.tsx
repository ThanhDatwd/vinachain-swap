"use client";
import { FilterTime } from "@/components/FilterTime";
import { TopMintsTable } from "@/components/NFTTopMints/TopMintsTable";
import { ScanLayout } from "@/components/layouts/ScanLayout";
import { useTheme } from "@/hooks/useTheme";
import { FILTER_TOP_MINTS_TIME_DATA } from "@/utils/constants";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const dataFor1M = [
  {
    id: "1",
    collection: "PalioAI Gen0",
    type: "ERC-721",
    mints: {
      total: 81,
      percentage: `${Math.random() * 100}`
    },
    uniqueMinters: {
      total: 81,
      percentage: 100.00,
    },
    totalOwners: Math.floor(Math.random() * 1000000),
    totalAssets: Math.floor(Math.random() * 1000000),
  },
  {
    id: "2",
    collection: "Staked ALT",
    type: "ERC-1155",
    mints: {
      total: 3,
      percentage: `${Math.random() * 100}`
    },
    uniqueMinters: {
      total: 3,
      percentage: 100.00,
    },
    totalOwners: Math.floor(Math.random() * 1000000),
    totalAssets: Math.floor(Math.random() * 1000000),
  },
  {
    id: "3",
    collection: "Gnars HD",
    type: "ERC-721",
    mints: {
      total: 3,
      percentage: `${Math.random() * 100}`
    },
    uniqueMinters: {
      total: 1,
      percentage: 33.33,
    },
    totalOwners: Math.floor(Math.random() * 1000000),
    totalAssets: Math.floor(Math.random() * 1000000),
  },
  {
    id: "4",
    collection: "GoonzSchoolPhotos",
    type: "ERC-1155",
    mints: {
      total: 2,
      percentage: `${Math.random() * 100}`
    },
    uniqueMinters: {
      total: 2,
      percentage: 100.00,
    },
    totalOwners: Math.floor(Math.random() * 1000000),
    totalAssets: Math.floor(Math.random() * 1000000),
  },
  {
    id: "5",
    collection: "Luna Everyday",
    type: "ERC-1155",
    mints: {
      total: 1,
      percentage: `${Math.random() * 100}`
    },
    uniqueMinters: {
      total: 1,
      percentage: 100.00
    },
    totalOwners: Math.floor(Math.random() * 1000000),
    totalAssets: Math.floor(Math.random() * 1000000),
  },
  {
    id: "6",
    collection: "MEMORIAL HYAKKI YAKO",
    type: "ERC-1155",
    mints: {
      total: 1,
      percentage: `${Math.random() * 100}`
    },
    uniqueMinters: {
      total: 1,
      percentage: 100.00
    },
    totalOwners: Math.floor(Math.random() * 1000000),
    totalAssets: Math.floor(Math.random() * 1000000),
  },
  {
    id: "7",
    collection: "Pepecoin: Paint Gallery",
    type: "ERC-1155",
    mints: {
      total: 1,
      percentage: `${Math.random() * 100}`
    },
    uniqueMinters: {
      total: 1,
      percentage: 100.00
    },
    totalOwners: Math.floor(Math.random() * 1000000),
    totalAssets: Math.floor(Math.random() * 1000000),
  }
];
const dataFor3M = [
  {
    id: "1",
    collection: "PalioAI Gen0",
    type: "ERC-721",
    mints: {
      total: 312,
      percentage: `${Math.random() * 100}`
    },
    uniqueMinters: {
      total: 312,
      percentage: 100.00
    },
    totalOwners: Math.floor(Math.random() * 1000000),
    totalAssets: Math.floor(Math.random() * 1000000),
  },
  {
    id: "2",
    collection: "Staked ALT",
    type: "ERC-1155",
    mints: {
      total: 5,
      percentage: `${Math.random() * 100}`
    },
    uniqueMinters: {
      total: 5,
      percentage: 100.00
    },
    totalOwners: Math.floor(Math.random() * 1000000),
    totalAssets: Math.floor(Math.random() * 1000000),
  },
  {
    id: "3",
    collection: "Lucky Lunar Dragons",
    type: "ERC-1155",
    mints: {
      total: 5,
      percentage: `${Math.random() * 100}`
    },
    uniqueMinters: {
      total: 1,
      percentage: 20.00
    },
    totalOwners: Math.floor(Math.random() * 1000000),
    totalAssets: Math.floor(Math.random() * 1000000),
  },
  {
    id: "4",
    collection: "NameWrapper",
    type: "ERC-1155",
    mints: {
      total: 3,
      percentage: `${Math.random() * 100}`
    },
    uniqueMinters: {
      total: 3,
      percentage: 100.00
    },
    totalOwners: Math.floor(Math.random() * 1000000),
    totalAssets: Math.floor(Math.random() * 1000000),
  },
  {
    id: "5",
    collection: "Vinachain Name Service",
    type: "ERC-721",
    mints: {
      total: 2,
      percentage: `${Math.random() * 100}`
    },
    uniqueMinters: {
      total: 1,
      percentage: 50.00
    },
    totalOwners: Math.floor(Math.random() * 1000000),
    totalAssets: Math.floor(Math.random() * 1000000),
  },
  {
    id: "6",
    collection: "0xEEEEEECE...947C705cd",
    type: "ERC-1155",
    mints: {
      total: 1,
      percentage: `${Math.random() * 100}`
    },
    uniqueMinters: {
      total: 1,
      percentage: 100.00
    },
    totalOwners: Math.floor(Math.random() * 1000000),
    totalAssets: Math.floor(Math.random() * 1000000),
  },
  {
    id: "7",
    collection: "Kiln Exit Queue",
    type: "ERC-721",
    mints: {
      total: 1,
      percentage: `${Math.random() * 100}`
    },
    uniqueMinters: {
      total: 1,
      percentage: 100.00
    },
    totalOwners: Math.floor(Math.random() * 1000000),
    totalAssets: Math.floor(Math.random() * 1000000),
  },
  {
    id: "7",
    collection: "Kiln Exit Queue",
    type: "ERC-721",
    mints: {
      total: 1,
      percentage: `${Math.random() * 100}`
    },
    uniqueMinters: {
      total: 1,
      percentage: 100.00
    },
    totalOwners: Math.floor(Math.random() * 1000000),
    totalAssets: Math.floor(Math.random() * 1000000),
  },
  {
    id: "8",
    collection: "Staked DEDPRZ",
    type: "ERC-721",
    mints: {
      total: 1,
      percentage: `${Math.random() * 100}`
    },
    uniqueMinters: {
      total: 1,
      percentage: 100.00
    },
    totalOwners: Math.floor(Math.random() * 1000000),
    totalAssets: Math.floor(Math.random() * 1000000),
  },
  {
    id: "10",
    collection: "James Webb Space Telescope NFTs",
    type: "ERC-721",
    mints: {
      total: 1,
      percentage: `${Math.random() * 100}`
    },
    uniqueMinters: {
      total: 1,
      percentage: 100.00
    },
    totalOwners: Math.floor(Math.random() * 1000000),
    totalAssets: Math.floor(Math.random() * 1000000),
  }
];
const dataFor5M = [
  {
    id: "1",
    collection: "PalioAI Gen0",
    type: "ERC-721",
    mints: {
      total: 403,
      percentage: `${Math.random() * 100}`
    },
    uniqueMinters: {
      total: 403,
      percentage: 100.00
    },
    totalOwners: Math.floor(Math.random() * 1000000),
    totalAssets: Math.floor(Math.random() * 1000000),
  },
  {
    id: "2",
    collection: "Lucky Lunar Dragons",
    type: "ERC-721",
    mints: {
      total: 10,
      percentage: `${Math.random() * 100}`
    },
    uniqueMinters: {
      total: 2,
      percentage: 20.00
    },
    totalOwners: Math.floor(Math.random() * 1000000),
    totalAssets: Math.floor(Math.random() * 1000000),
  },
  {
    id: "3",
    collection: "Staked ALT",
    type: "ERC-721",
    mints: {
      total: 8,
      percentage: `${Math.random() * 100}`
    },
    uniqueMinters: {
      total: 8,
      percentage: 100.00
    },
    totalOwners: Math.floor(Math.random() * 1000000),
    totalAssets: Math.floor(Math.random() * 1000000),
  },
  {
    id: "4",
    collection: "NameWrapper",
    type: "ERC-721",
    mints: {
      total: 6,
      percentage: `${Math.random() * 100}`
    },
    uniqueMinters: {
      total: 6,
      percentage: 100.00
    },
    totalOwners: Math.floor(Math.random() * 1000000),
    totalAssets: Math.floor(Math.random() * 1000000),
  },
  {
    id: "5",
    collection: "Vinachain Name Service",
    type: "ERC-721",
    mints: {
      total: 5,
      percentage: `${Math.random() * 100}`
    },
    uniqueMinters: {
      total: 1,
      percentage: 20.00
    },
    totalOwners: Math.floor(Math.random() * 1000000),
    totalAssets: Math.floor(Math.random() * 1000000),
  },
  {
    id: "6",
    collection: "Uniswap V3: Positions NFT",
    type: "ERC-721",
    mints: {
      total: 4,
      percentage: `${Math.random() * 100}`
    },
    uniqueMinters: {
      total: 4,
      percentage: 100.00
    },
    totalOwners: Math.floor(Math.random() * 1000000),
    totalAssets: Math.floor(Math.random() * 1000000),
  },
  {
    id: "7",
    collection: "GoonzSchoolPhotos",
    type: "ERC-721",
    mints: {
      total: 3,
      percentage: `${Math.random() * 100}`
    },
    uniqueMinters: {
      total: 2,
      percentage: 66.67
    },
    totalOwners: Math.floor(Math.random() * 1000000),
    totalAssets: Math.floor(Math.random() * 1000000),
  },
  {
    id: "8",
    collection: "GoldChip",
    type: "ERC-721",
    mints: {
      total: 3,
      percentage: `${Math.random() * 100}`
    },
    uniqueMinters: {
      total: 2,
      percentage: 66.67
    },
    totalOwners: Math.floor(Math.random() * 1000000),
    totalAssets: Math.floor(Math.random() * 1000000),
  },
  {
    id: "9",
    collection: "Gnars HD",
    type: "ERC-721",
    mints: {
      total: 2,
      percentage: `${Math.random() * 100}`
    },
    uniqueMinters: {
      total: 1,
      percentage: 50.00
    },
    totalOwners: Math.floor(Math.random() * 1000000),
    totalAssets: Math.floor(Math.random() * 1000000),
  },
  {
    id: "10",
    collection: "Gold",
    type: "ERC-1155",
    mints: {
      total: 1,
      percentage: `${Math.random() * 100}`
    },
    uniqueMinters: {
      total: 1,
      percentage: 100.00
    },
    totalOwners: Math.floor(Math.random() * 1000000),
    totalAssets: Math.floor(Math.random() * 1000000),
  }
];
const dataFor15M = [
  {
    id: "1",
    collection: "PalioAI Gen0",
    type: "ERC-721",
    mints: {
      total: 1269,
      percentage: `${Math.random() * 100}`
    },
    uniqueMinters: {
      total: 1269,
      percentage: 100.00
    },
    totalOwners: Math.floor(Math.random() * 1000000),
    totalAssets: Math.floor(Math.random() * 1000000),
  },
  {
    id: "2",
    collection: "Staked ALT",
    type: "ERC-1155",
    mints: {
      total: 30,
      percentage: `${Math.random() * 100}`
    },
    uniqueMinters: {
      total: 30,
      percentage: 100.00
    },
    totalOwners: Math.floor(Math.random() * 1000000),
    totalAssets: Math.floor(Math.random() * 1000000),
  },
  {
    id: "3",
    collection: "NameWrapper",
    type: "ERC-1155",
    mints: {
      total: 13,
      percentage: `${Math.random() * 100}`
    },
    uniqueMinters: {
      total: 10,
      percentage: 76.92
    },
    totalOwners: Math.floor(Math.random() * 1000000),
    totalAssets: Math.floor(Math.random() * 1000000),
  },
  {
    id: "4",
    collection: "Gnars HD",
    type: "ERC-721",
    mints: {
      total: 10,
      percentage: `${Math.random() * 100}`
    },
    uniqueMinters: {
      total: 1,
      percentage: 10.00
    },
    totalOwners: Math.floor(Math.random() * 1000000),
    totalAssets: Math.floor(Math.random() * 1000000),
  },
  {
    id: "5",
    collection: "Vinachain Name Service",
    type: "ERC-721",
    mints: {
      total: 10,
      percentage: `${Math.random() * 100}`
    },
    uniqueMinters: {
      total: 1,
      percentage: 10.00
    },
    totalOwners: Math.floor(Math.random() * 1000000),
    totalAssets: Math.floor(Math.random() * 1000000),
  },
  {
    id: "6",
    collection: "Pandora",
    type: "ERC-721",
    mints: {
      total: 9,
      percentage: `${Math.random() * 100}`
    },
    uniqueMinters: {
      total: 3,
      percentage: 33.33
    },
    totalOwners: Math.floor(Math.random() * 1000000),
    totalAssets: Math.floor(Math.random() * 1000000),
  },
  {
    id: "7",
    collection: "Zerion DNA 1.0",
    type: "ERC-721",
    mints: {
      total: 8,
      percentage: `${Math.random() * 100}`
    },
    uniqueMinters: {
      total: 8,
      percentage: 100.00
    },
    totalOwners: Math.floor(Math.random() * 1000000),
    totalAssets: Math.floor(Math.random() * 1000000),
  },
  {
    id: "8",
    collection: "Zerion DNA 1.0",
    type: "ERC-721",
    mints: {
      total: 7,
      percentage: `${Math.random() * 100}`
    },
    uniqueMinters: {
      total: 3,
      percentage: 42.86
    },
    totalOwners: Math.floor(Math.random() * 1000000),
    totalAssets: Math.floor(Math.random() * 1000000),
  },
  {
    id: "9",
    collection: "GoldChip",
    type: "ERC-721",
    mints: {
      total: 7,
      percentage: `${Math.random() * 100}`
    },
    uniqueMinters: {
      total: 6,
      percentage: 85.71
    },
    totalOwners: Math.floor(Math.random() * 1000000),
    totalAssets: Math.floor(Math.random() * 1000000),
  },
  {
    id: "10",
    collection: "Uniswap V3: Positions NFT",
    type: "ERC-721",
    mints: {
      total: 6,
      percentage: `${Math.random() * 100}`
    },
    uniqueMinters: {
      total: 6,
      percentage: 100.00
    },
    totalOwners: Math.floor(Math.random() * 1000000),
    totalAssets: Math.floor(Math.random() * 1000000),
  }
];
const dataFor20M = [
  {
    id: "1",
    collection: "PalioAI Gen0",
    type: "ERC-721",
    mints: {
      total: 1511,
      percentage: `${Math.random() * 100}`
    },
    uniqueMinters: {
      total: 1511,
      percentage: 100.00
    },
    totalOwners: Math.floor(Math.random() * 1000000),
    totalAssets: Math.floor(Math.random() * 1000000),
  },
  {
    id: "2",
    collection: "Staked ALT",
    type: "ERC-1155",
    mints: {
      total: 39,
      percentage: `${Math.random() * 100}`
    },
    uniqueMinters: {
      total: 39,
      percentage: 100.00
    },
    totalOwners: Math.floor(Math.random() * 1000000),
    totalAssets: Math.floor(Math.random() * 1000000),
  },
  {
    id: "3",
    collection: "NameWrapper",
    type: "ERC-721",
    mints: {
      total: 19,
      percentage: `${Math.random() * 100}`
    },
    uniqueMinters: {
      total: 15,
      percentage: 78.95
    },
    totalOwners: Math.floor(Math.random() * 1000000),
    totalAssets: Math.floor(Math.random() * 1000000),
  },
  {
    id: "4",
    collection: "GoldChip",
    type: "ERC-721",
    mints: {
      total: 16,
      percentage: `${Math.random() * 100}`
    },
    uniqueMinters: {
      total: 9,
      percentage: 56.25
    },
    totalOwners: Math.floor(Math.random() * 1000000),
    totalAssets: Math.floor(Math.random() * 1000000),
  },
  {
    id: "5",
    collection: "Gnars HD",
    type: "ERC-721",
    mints: {
      total: 16,
      percentage: `${Math.random() * 100}`
    },
    uniqueMinters: {
      total: 2,
      percentage: 12.50
    },
    totalOwners: Math.floor(Math.random() * 1000000),
    totalAssets: Math.floor(Math.random() * 1000000),
  },
  {
    id: "6",
    collection: "Vinachain Name Service",
    type: "ERC-721",
    mints: {
      total: 14,
      percentage: `${Math.random() * 100}`
    },
    uniqueMinters: {
      total: 1,
      percentage: 7.14
    },
    totalOwners: Math.floor(Math.random() * 1000000),
    totalAssets: Math.floor(Math.random() * 1000000),
  },
  {
    id: "7",
    collection: "GoonzSchoolPhotos",
    type: "ERC-721",
    mints: {
      total: 11,
      percentage: `${Math.random() * 100}`
    },
    uniqueMinters: {
      total: 3,
      percentage: 27.27
    },
    totalOwners: Math.floor(Math.random() * 1000000),
    totalAssets: Math.floor(Math.random() * 1000000),
  },
  {
    id: "8",
    collection: "Pandora",
    type: "ERC-721",
    mints: {
      total: 9,
      percentage: `${Math.random() * 100}`
    },
    uniqueMinters: {
      total: 3,
      percentage: 33.33
    },
    totalOwners: Math.floor(Math.random() * 1000000),
    totalAssets: Math.floor(Math.random() * 1000000),
  },
  {
    id: "9",
    collection: "0xF9d21DC7...5e8921DE0",
    type: "ERC-1155",
    mints: {
      total: 8,
      percentage: `${Math.random() * 100}`
    },
    uniqueMinters: {
      total: 1,
      percentage: 12.50
    },
    totalOwners: Math.floor(Math.random() * 1000000),
    totalAssets: Math.floor(Math.random() * 1000000),
  },
  {
    id: "10",
    collection: "Zerion DNA 1.0",
    type: "ERC-721",
    mints: {
      total: 8,
      percentage: `${Math.random() * 100}`
    },
    uniqueMinters: {
      total: 8,
      percentage: 100.00
    },
    totalOwners: Math.floor(Math.random() * 1000000),
    totalAssets: Math.floor(Math.random() * 1000000),
  }
];
const dataFor1H = [
  {
    id: "1",
    collection: "PalioAI Gen0",
    type: "ERC-721",
    mints: {
      total: 4219,
      percentage: `${Math.random() * 100}`
    },
    uniqueMinters: {
      total: 4219,
      percentage: 100.00
    },
    totalOwners: Math.floor(Math.random() * 1000000),
    totalAssets: Math.floor(Math.random() * 1000000),
  },
  {
    id: "2",
    collection: "Staked ALT",
    type: "ERC-721",
    mints: {
      total: 168,
      percentage: `${Math.random() * 100}`
    },
    uniqueMinters: {
      total: 167,
      percentage: 99.40
    },
    totalOwners: Math.floor(Math.random() * 1000000),
    totalAssets: Math.floor(Math.random() * 1000000),
  },
  {
    id: "3",
    collection: "Gnars HD",
    type: "ERC-721",
    mints: {
      total: 67,
      percentage: `${Math.random() * 100}`
    },
    uniqueMinters: {
      total: 2,
      percentage: 2.99
    },
    totalOwners: Math.floor(Math.random() * 1000000),
    totalAssets: Math.floor(Math.random() * 1000000),
  },
  {
    id: "4",
    collection: "NameWrapper",
    type: "ERC-721",
    mints: {
      total: 47,
      percentage: `${Math.random() * 100}`
    },
    uniqueMinters: {
      total: 40,
      percentage: 85.11
    },
    totalOwners: Math.floor(Math.random() * 1000000),
    totalAssets: Math.floor(Math.random() * 1000000),
  },
  {
    id: "5",
    collection: "Vinachain Name Service",
    type: "ERC-1155",
    mints: {
      total: 39,
      percentage: `${Math.random() * 100}`
    },
    uniqueMinters: {
      total: 2,
      percentage: 5.13
    },
    totalOwners: Math.floor(Math.random() * 1000000),
    totalAssets: Math.floor(Math.random() * 1000000),
  },
  {
    id: "6",
    collection: "GoldChip",
    type: "ERC-721",
    mints: {
      total: 38,
      percentage: `${Math.random() * 100}`
    },
    uniqueMinters: {
      total: 25,
      percentage: 65.79
    },
    totalOwners: Math.floor(Math.random() * 1000000),
    totalAssets: Math.floor(Math.random() * 1000000),
  },
  {
    id: "7",
    collection: "GoonzSchoolPhotos",
    type: "ERC-721",
    mints: {
      total: 35,
      percentage: `${Math.random() * 100}`
    },
    uniqueMinters: {
      total: 6,
      percentage: 17.14
    },
    totalOwners: Math.floor(Math.random() * 1000000),
    totalAssets: Math.floor(Math.random() * 1000000),
  },
  {
    id: "8",
    collection: "Lucky Lunar Dragons",
    type: "ERC-721",
    mints: {
      total: 35,
      percentage: `${Math.random() * 100}`
    },
    uniqueMinters: {
      total: 7,
      percentage: 20.00
    },
    totalOwners: Math.floor(Math.random() * 1000000),
    totalAssets: Math.floor(Math.random() * 1000000),
  },
  {
    id: "9",
    collection: "Uniswap V3: Positions NFT",
    type: "ERC-721",
    mints: {
      total: 22,
      percentage: `${Math.random() * 100}`
    },
    uniqueMinters: {
      total: 18,
      percentage: 81.82
    },
    totalOwners: Math.floor(Math.random() * 1000000),
    totalAssets: Math.floor(Math.random() * 1000000),
  },
  {
    id: "10",
    collection: "Zerion DNA 1.0",
    type: "ERC-721",
    mints: {
      total: 15,
      percentage: `${Math.random() * 100}`
    },
    uniqueMinters: {
      total: 12,
      percentage: 80.00
    },
    totalOwners: Math.floor(Math.random() * 1000000),
    totalAssets: Math.floor(Math.random() * 1000000),
  }
];

const TopMintsPage = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const [isSelectedTime, setIsSelectedTime] = useState(0);
  const [dataTable, setDataTable] = useState(dataFor1H);

  const handleSelectTime = (index: number) => {
    setIsSelectedTime(index);
    switch (FILTER_TOP_MINTS_TIME_DATA[index]) {
      case FILTER_TOP_MINTS_TIME_DATA[1]:
        setDataTable(dataFor3M);
        break;
      case FILTER_TOP_MINTS_TIME_DATA[2]:
        setDataTable(dataFor5M);
        break;
      case FILTER_TOP_MINTS_TIME_DATA[3]:
        setDataTable(dataFor15M);
        break;
      case FILTER_TOP_MINTS_TIME_DATA[4]:
        setDataTable(dataFor20M);
        break;
      case FILTER_TOP_MINTS_TIME_DATA[5]:
        setDataTable(dataFor1H);
        break;
      default:
        setDataTable(dataFor1M);
        break;
    }
  };

  return (
    <ScanLayout containerStyle="bg-[#FAFAFA] dark:bg-[#181818] dark:bg-primaryDark font-sans-serif relative">
      <div className="container-xxl">
        <div className="flex flex-col gap-4 md:gap-6 px-3  md:px-0 lg:px-0">
          <div>
            <div className="py-5 flex flex-col  gap-2 border-b border-b-[#e9ecef] dark:border-b-[#222]">
              <div className="flex ">
                <h1 className="text-[18.75px] font-bold mr-1 text-[#212529] dark:text-[#FAFAFA]">
                  {t("topNFTs.title")}
                </h1>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <FilterTime
                onClickTime={handleSelectTime}
                isSelect={isSelectedTime}
                filterTimeData={FILTER_TOP_MINTS_TIME_DATA}
            />
          </div>
          <TopMintsTable defaultData={dataTable} />
        </div>
      </div>
    </ScanLayout>
  );
};

export default TopMintsPage;
