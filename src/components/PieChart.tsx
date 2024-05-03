import React, { FC, useEffect, useMemo, useState } from "react";
import Highcharts from "highcharts/es-modules/masters/highcharts.src";
import HighchartsReact from "highcharts-react-official";
import { useTranslation } from "react-i18next";
import useMediaQuery from "@bedrock-layout/use-media-query";

interface ChartProps {
  backgroundColor?: string;
}

export const PieChart: FC<ChartProps> = ({ backgroundColor }) => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery("(max-width: 1023px)");

  const data = [
    { name: t("customerSupport"), y: 21.3 },
    { name: t("development"), y: 18.7 },
    { name: t("sales"), y: 20.2 },
    { name: t("marketing"), y: 14.2 },
    { name: t("other"), y: 25.6 },
  ];

  const options = useMemo(() => {
    return {
      chart: {
        type: "pie",
        backgroundColor: backgroundColor,
        height: isMobile ? "60%" : "80%",
      },
      title: "",
      tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
        valueSuffix: "%",
      },
      accessibility: {
        enabled: false,
        point: {
          valueSuffix: "%",
        },
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          borderWidth: 2,
          innerSize: "40%",
          borderRadius: 8,
          cursor: "pointer",
          name: t("percentage"),
          dataLabels: {
            enabled: true,
            format: "<b>{point.name}</b><br>{point.percentage}%",
            distance: isMobile ? 10 : 30,
            style: {
              fontSize: isMobile ? "10px" : "14px",
            },
          },
          center: ["50%", "50%"],
          point: {
            events: {
              click: (e: any) => {
                const point = e.point;

                const itemsChosen = point.series.points.filter(
                  (item: any) => item.opacity === 1,
                );

                if (
                  itemsChosen.length === 1 &&
                  itemsChosen[0].index === point.index
                ) {
                  point.series.points.map((chart: any) => {
                    chart.update({
                      opacity: 1,
                    });
                  });
                  return;
                }

                point.series.points.map((chart: any) => {
                  if (chart.index !== point.index) {
                    chart.update({
                      opacity: 0.2,
                    });
                  } else {
                    chart.update({
                      opacity: 1,
                    });
                  }
                });
              },
            },
          },
        },
      },
      series: [
        {
          // enableMouseTracking: true,
          colorByPoint: true,
          animation: {
            duration: 200,
          },
          plotOptions: {
            pie: {
              innerSize: "40%",
              borderRadius: 8,
            },
          },
          data: data,
        },
      ],
      credits: {
        enabled: false,
      },
    };
  }, [backgroundColor, data]);

  useEffect(() => {
    ((H: any) => {
      H.seriesTypes.pie.prototype.animate = function (init: any) {
        const series = this;
        const chart = series.chart;
        const points = series.points;
        const { animation } = series.options;
        const { startAngleRad } = series;

        const fanAnimate = (
          point: Highcharts.Point,
          startAngleRad: number,
          depth: number,
        ) => {
          if (depth > 50) {
            // Limit recursion depth to avoid maximum call stack size exceeded
            return;
          }

          const graphic = point.graphic;
          const args = point.shapeArgs;

          if (graphic && args) {
            graphic
              .attr({
                start: startAngleRad,
                end: startAngleRad,
                opacity: 1,
              })
              .animate(
                {
                  start: args.start,
                  end: args.end,
                },
                {
                  duration: animation.duration / points.length,
                },
                () => {
                  if (points[point.index + 1]) {
                    fanAnimate(points[point.index + 1], args.end, depth + 1);
                  }

                  if (point.index === series.points.length - 1) {
                    series.dataLabelsGroup.animate(
                      {
                        opacity: 1,
                      },
                      undefined,
                      () => {
                        points.forEach((point: any) => {
                          point.opacity = 1;
                        });
                      },
                    );
                  }
                },
              );
          }
        };

        if (init) {
          points.forEach((point: any) => {
            point.opacity = 0;
          });
        } else {
          fanAnimate(points[0], startAngleRad, 0);
        }
      };
    })(Highcharts);
  }, []);

  return (
    <div className="">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
