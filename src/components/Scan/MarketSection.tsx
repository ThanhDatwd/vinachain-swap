"use client";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/es-modules/masters/highcharts.src";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { GaugeIcon } from "@/assets/icons/GaugeIcon";
import { GlobalIcon } from "@/assets/icons/GlobalIcon";
import { ServerIcon } from "@/assets/icons/ServerIcon";
import { getStaticURL } from "@/utils/constants";
import { useTheme } from "@/hooks/useTheme";
export default function MarketSection() {
  const [optionsChart, setOptionsChart] = useState({});
  const chartContainerRef = useRef<any>(null);
  const backgroundColor = {
    linearGradient: [0, 0, 0, 400],
    stops: [
      [0, "#A5A5EC"],
      [1, "rgba(255, 255, 255, 0)"],
    ],
  };
  const { theme } = useTheme();
  
  const options: Highcharts.Options | any = {
    chart: {
      type: "spline",
      height: 120,
      width: 400,
      backgroundColor: "transparent",
    },
    title: {
      text: "",
    },
    xAxis: {
      visible: false,
    },
    yAxis: {
      visible: false,
    },
    tooltip: {
      enabled: true,
    },
    legend: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      spline: {
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

  useEffect(() => {
    // Access the width using the ref and log it to the console
    // if (chartContainerRef.current) {
    //   let width = chartContainerRef.current.clientWidth;
    //   let height = chartContainerRef.current.clientHeight;
    //   setCharWidth(width - 30);
    //   setCharHeight(height < 120 ? 120 : height - 30);
    // }
  }, []);
  return (
    <div className="p-5 rounded-xl bg-[#fff] dark:bg-[#111] box-shadow">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="flex flex-col justify-between lg:pr-5  lg:border-r border-[#DCDCDC] dark:border-[#333] ">
          <div className="flex gap-2 ">
            {/* <DolaIcon color={isDarkTheme(theme) ? "#ffffff" : "#000000"} /> */}
            <img
              className="w-8 h-8"
              src={`${getStaticURL()}/assets/images/logo_${theme}.svg`}
              alt=""
            />
            <div>
              <div className="text-[12px] text-cap">USDv PRICE</div>
              <Link href="/coming-soon" className=" text-base">
                <span className="link-dark">$1,0000</span>
                <span className="text-muted"> @0.053992 BTC</span>
                &nbsp;
                <span className="text-green-500">(+4%)</span>
              </Link>
            </div>
          </div>
          <hr className="my-5 " />
          <div className="flex gap-3 ">
            <div>
              <GlobalIcon className="!w-7 !h-7" />
            </div>
            <div>
              <div className="text-[12px] text-cap">MARKET CAP</div>
              <Link href="/coming-soon" className="link-dark text-base">
                $20,000,000,000.00
              </Link>
            </div>
          </div>
        </div>
        <hr className="my-5 md:hidden" />
        <div className="flex flex-col justify-between lg:px-5  lg:border-r border-[#DCDCDC] dark:border-[#333]">
          <div className="flex justify-between  ">
            <div className="flex gap-3">
              <ServerIcon className="!w-7 !h-7" />
              <div>
                <div className="text-[12px] text-cap">TRANSACTIONS</div>
                <Link href="/coming-soon" className="text-base">
                  <span className="link-dark">2,172 M</span>
                  <span className="text-muted"> (13.5 TPS)</span>
                </Link>
              </div>
            </div>
            <div className=" text-right">
              <div className="text-[12px] text-cap">MED GAS PRICE</div>
              <Link href="/coming-soon" className="text-base">
                <span className="link-dark">36 Gwei</span>
                <span className="text-muted"> ($1.70)</span>
              </Link>
            </div>
          </div>
          <hr className="my-5 " />
          <div className="flex justify-between  ">
            <div className="flex gap-3 ">
              <GaugeIcon className="!w-7 !h-7" />
              <div>
                <div className="text-[12px] text-cap">
                  LAST FINALIZED BLOCK
                </div>
                <Link href="/coming-soon" className="link-dark text-base">
                  19630749
                </Link>
              </div>
            </div>
            <div className="text-right">
              <div className="text-[12px] text-cap">LAST SAFE BLOCK</div>
              <Link href="/coming-soon" className="">
                <p className="text-base">19630749</p>
              </Link>
            </div>
          </div>
        </div>
        <hr className="my-5 md:hidden" />
        <div className="relative left-0 min-h-[130px] w-full">
          {optionsChart && (
            <div
              ref={chartContainerRef}
              className="flex flex-col absolute inset-x-0 lg:pl-5 max-h-[150px] overflow-hidden lg:h-full "
            >
              <div className="w-full h-full">
                <span className="text-[12px] w-full text-cap">
                  TRANSACTION IN 14 DAYS
                </span>
                <HighchartsReact highcharts={Highcharts} options={options} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
