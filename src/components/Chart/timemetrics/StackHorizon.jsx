import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React from "react";

const StackHorizon = () => {
  const options = {
    chart: {
      type: "bar",
      width: 500,
      height: 420,
    },
    title: {
      text: "",
    },
    tooltip: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      categories: [
        "Polar Park",
        "Bic",
        "Pernod Ricard",
        "LC Waikiki",
        "Lowes",
        "Orange Theory",
        "Energizer Battries",
        "Nutrition Master",
      ],
    },
    yAxis: {
      min: 0,
      title: {
        text: "",
      },
    },
    plotOptions: {
      series: {
        stacking: "normal",
        dataLabels: {
          enabled: true,
        },
      },
    },
    series: [
      {
        name: "Late Order Count",
        data: [1, 28, 31, 34, 3, 5, 1, 5],
        color: "#CCCCCC",
      },
      {
        name: "Early Order Count",
        data: [2, 10, 7, 38, 7, 3, 1, 2],
        color: "#F2D413",
      },
      {
        name: "On-Time Order Count",
        data: [177, 116, 66, 14, 67, 36, 37, 23],
        color: "#12144d",
      },
    ],
  };
  return (
    <div>
      <div className=" ">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
};

export default StackHorizon;
