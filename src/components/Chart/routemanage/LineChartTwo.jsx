import React from "react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const LineChartTwo = () => {
  const options = {
    chart: {
      width: 110,
      height: 80,
    },

    title: {
      text: "",
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      enabled: false,
    },

    credits: {
      enabled: false,
    },

    xAxis: {
      title: {
        text: "",
      },
      tickInterval: 100,
      gridLineWidth: 0,
      opposite: true,
      min: 0,
      lineWidth: 0,
      minorTickLength: 0,
      tickLength: 0,
      labels: {
        enabled: false,
      },
    },
    yAxis: {
      title: {
        text: "",
      },
      min: 0,
      lineWidth: 0,
      gridLineWidth: 0,
      minorTickLength: 0,
      tickLength: 0,
      labels: {
        enabled: false,
      },
    },

    plotOptions: {
      series: {
        states: {
          hover: {
            enabled: false,
          },
        },
        marker: {
          enabled: false,
        },
      },
      area: {
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
          },
          // stops: [
          //   [0, Highcharts.getOptions().colors[0]],
          //   [
          //     1,
          //     Highcharts.color(Highcharts.getOptions().colors[1])
          //       .setOpacity(0)
          //       .get("rgba"),
          //   ],
          // ],
          stops: [
            [0, "#ED5763"],
            [0.5, "#FFE0E3"],
          ],
        },
      },
    },

    series: [
      {
        type: "area",
        color: "#ED5763",
        data: [6, 7.8, 1.5, 5, 0],
      },
    ],
  };

  return (
    <div>
      <div className="   ">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
};

export default LineChartTwo;
