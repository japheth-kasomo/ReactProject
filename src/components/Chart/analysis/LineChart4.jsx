import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React from "react";

const LineChart4 = () => {
  const options = {
    chart: {
      width: 100,
      height: 60,
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
          //     Highcharts.color(Highcharts.getOptions().colors[0])
          //       .setOpacity(0)
          //       .get("rgba"),
          //   ],
          // ],
          stops: [
            [0, "#86D7B0"],
            [0.5, "#86D7B0"],
            [1, "#FFFBF5"],
          ],
        },
      },
    },

    series: [
      {
        type: "area",
        // type: "spline",
        // name: "USD to EUR",
        color: "#0CAF60",
        data: [0, 5, 1.5, 7.8, 6],
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

export default LineChart4;
