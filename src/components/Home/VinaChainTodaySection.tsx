import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Highcharts from "highcharts/es-modules/masters/highcharts.src";
import HighchartsReact from "highcharts-react-official";
import Link from "next/link";

interface NuclearStockpilesChartProps {}
export const VinaChainTodaySection = () => {
  const backgroundColor = {
    linearGradient: [0, 0, 0, 400],
    stops: [
      [0, "#A5A5EC"],
      [1, "rgba(255, 255, 255, 0)"],
    ],
  };
  const { t } = useTranslation();
  const options: Highcharts.Options | any = {
    chart: {
      type: "areaspline",
      height: 220,
      backgroundColor: "transparent",
    },
    title: {
      text: null,
    },
    xAxis: {
      visible: false,
    },
    yAxis: {
      visible: false,
    },
    tooltip: {
      enabled: false,
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      areaspline: {
        marker: {
          enabled: false,
        },
        color: backgroundColor,
        lineWidth: 1,
      },
    },
    series: [
      {
        data: [25, 26, 24, 28, 23, 22, 23, 24, 25, 24, 23],
      },
    ],
  };
  return (
    <div className="flex flex-col gap-8 md:gap-20">
      <div className="flex flex-col gap-2">
        <h5 className="text-base md:text-[32px] text-[#333] dark:text-[#FAFAFA] font-bold pd-2 md:pb-6">
          {t("vinaChainToday.title")}
        </h5>
        <span> {t("vinaChainToday.description")}</span>
      </div>
      <div className="grid  grid-cols-1 gap-8 md:gap-0 md:grid-cols-2">
        <div className="relative w-full border border-[#333] dark:border-[#FAFAFA] overflow-hidden">
          <div className="flex flex-col gap-2 pl-10 mb-[60px] mt-4 ">
            <div className="text-[20px]">{t("vinaChainToday.total.title")}</div>
            <span>{t("vinaChainToday.total.subtitle")}</span>
          </div>
          <div className="  bottom-0 left-0 scale-125">
            <HighchartsReact
              className="hidden"
              highcharts={Highcharts}
              options={options}
            />
          </div>
          <div>
            <div className="absolute w-full bottom-0 left-0 px-8 pb-8 md:pb-4 flex justify-between items-end">
              <h4 className="text-[63px] text-[#333] dark:text-[#FAFAFA] font-bold leading-none">
                28.24M
              </h4>
              <div className="flex">
                <Link
                  href="/coming-soon"
                  className="cursor-pointer border border-[#333] dark:border-[#FAFAFA] bg-[#FAFAFA] dark:bg-[#333] p-2 h-fit"
                >
                  30D
                </Link>
                <Link
                  href="/coming-soon"
                  className="cursor-pointer border border-[#333] dark:border-[#FAFAFA] bg-[#FAFAFA] dark:bg-[#333] p-2 h-fit"
                >
                  90D
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full border border-[#333] dark:border-[#FAFAFA] overflow-hidden">
          <div className="flex flex-col gap-2 pl-10 mb-[60px] mt-4 ">
            <div className="text-[20px] uppercase">
              {t("vinaChainToday.node.title")}
            </div>
            <span>{t("vinaChainToday.node.subtitle")}</span>
          </div>
          <div className="  bottom-0 left-0 scale-125">
            <HighchartsReact
              className="hidden"
              highcharts={Highcharts}
              options={options}
            />
          </div>
          <div>
            <div className="absolute w-full bottom-0 left-0 px-8 pb-8 md:pb-4 flex justify-between items-end">
              <h4 className="text-[63px] text-[#333] dark:text-[#FAFAFA] font-bold leading-none">
                1.03M
              </h4>
              <div className="flex">
                <Link
                  href="/coming-soon"
                  className="cursor-pointer border border-[#333] dark:border-[#FAFAFA] bg-[#FAFAFA] dark:bg-[#333] p-2 h-fit"
                >
                  30D
                </Link>
                <Link
                  href="/coming-soon"
                  className="cursor-pointer border border-[#333] dark:border-[#FAFAFA] bg-[#FAFAFA] dark:bg-[#333] p-2 h-fit"
                >
                  90D
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full border border-[#333] dark:border-[#FAFAFA] overflow-hidden">
          <div className="flex flex-col gap-2 pl-10 mb-[60px] mt-4 ">
            <div className="text-[20px]">
              {t("vinaChainToday.transaction.title")}
            </div>
            <span>{t("vinaChainToday.transaction.subtitle")}</span>
          </div>
          <div className="  bottom-0 left-0 scale-125">
            <HighchartsReact
              className="hidden"
              highcharts={Highcharts}
              options={options}
            />
          </div>
          <div>
            <div className="absolute w-full bottom-0 left-0 px-8 pb-8 md:pb-4 flex justify-between items-end">
              <h4 className="text-[63px] text-[#333] dark:text-[#FAFAFA] font-bold leading-none">
                $6M
              </h4>
              <div className="flex">
                <Link
                  href="/coming-soon"
                  className="cursor-pointer border border-[#333] dark:border-[#FAFAFA] bg-[#FAFAFA] dark:bg-[#333] p-2 h-fit"
                >
                  30D
                </Link>
                <Link
                  href="/coming-soon"
                  className="cursor-pointer border border-[#333] dark:border-[#FAFAFA] bg-[#FAFAFA] dark:bg-[#333] p-2 h-fit"
                >
                  90D
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full border border-[#333] dark:border-[#FAFAFA] overflow-hidden">
          <div className="flex flex-col gap-2 pl-10 mb-[60px] mt-4 ">
            <div className="text-[20px]">{t("vinaChainToday.value.title")}</div>
            <span>{t("vinaChainToday.value.subtitle")}</span>
          </div>
          <div className="  bottom-0 left-0 scale-125">
            <HighchartsReact
              className="hidden"
              highcharts={Highcharts}
              options={options}
            />
          </div>
          <div>
            <div className="absolute w-full bottom-0 left-0 px-8 pb-8 md:pb-4 flex justify-between items-end">
              <h4 className="text-[63px] text-[#333] dark:text-[#FAFAFA] font-bold leading-none">
                300
              </h4>
              <div className="flex">
                <Link
                  href="/coming-soon"
                  className="cursor-pointer border border-[#333] dark:border-[#FAFAFA] bg-[#FAFAFA] dark:bg-[#333] p-2 h-fit"
                >
                  30D
                </Link>
                <Link
                  href="/coming-soon"
                  className="cursor-pointer border border-[#333] dark:border-[#FAFAFA] bg-[#FAFAFA] dark:bg-[#333] p-2 h-fit"
                >
                  90D
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
