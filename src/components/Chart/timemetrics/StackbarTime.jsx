import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React from "react";

const StackbarTime = () => {
  const options = {
    chart: {
      type: "column",
      width: 500,
      height: 420,
      spacingBottom: 15,
    },

    title: {
      text: "",
    },

    xAxis: {
      categories: [
        "Dispatcher A",
        "Dispatcher B",
        "Dispatcher C",
        "Dispatcher D",
        "Dispatcher E",
        "Dispatcher F",
      ],

      gridLineWidth: 0,
      lineWidth: 0,
    },

    yAxis: {
      allowDecimals: false,
      min: 10,
      title: {
        text: "",
      },
      stackLabels: {
        enabled: true,
        style: {
          fontWeight: "bold",
        },
      },
    },

    tooltip: {
      enabled: false,
    },

    plotOptions: {
      bar: {
        borderRadius: "30%",
      },
      column: {
        stacking: "normal",
        dataLabels: {
          enabled: true,
        },
      },
    },
    credits: {
      enabled: false,
    },
    legend: {
      layout: "horizontal",
      align: "start",
      verticalAlign: "bottom",
      x: 0,
      y: 24,
      floating: true,
      borderWidth: 0,

      shadow: false,
    },
    series: [
      {
        name: "On Time",
        color: "#7279D5",
        data: [15, 25, 32, 40, 15, 15],
      },
      {
        name: "Late",
        color: "#F5D93C",
        data: [70, 60, 20, 20, 50, 70],
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

export default StackbarTime;
