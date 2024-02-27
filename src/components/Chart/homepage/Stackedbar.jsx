import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React from "react";

const Stackedbar = () => {
  const options = {
    chart: {
      type: "column",
      width: 460,
      height: 300,
      spacingBottom: 50,
    },

    title: {
      text: "",
    },

    xAxis: {
      categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      gridLineWidth: 0,
      lineWidth: 0,
    },

    yAxis: {
      allowDecimals: false,
      min: 10,
      title: {
        text: "",
      },
    },

    // tooltip: {
    //   format:
    //     "<b>{key}</b><br/>{series.name}: {y}<br/>" +
    //     "Total: {point.stackTotal}",
    // },
    tooltip: {
      enabled: false,
    },

    plotOptions: {
      bar: {
        borderRadius: "30%",
      },
      column: {
        stacking: "normal",
      },
    },
    credits: {
      enabled: false,
    },
    legend: {
      layout: "horizontal",
      align: "start",
      verticalAlign: "bottom",
      x: 1,
      y: 40,
      floating: true,
      borderWidth: 0,

      shadow: false,
    },
    series: [
      {
        name: "Not Utilized",
        color: "#7279D5",
        data: [15, 25, 32, 40, 15, 15, 20, 25, 20, 10],
      },
      {
        name: "Utilized",
        color: "#F5D93C",
        data: [70, 60, 20, 20, 50, 70, 75, 80, 50, 80],
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

export default Stackedbar;
