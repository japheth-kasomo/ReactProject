import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React from "react";

const ColumnbarMonth = () => {
  const options = {
    chart: {
      type: "column",
      width: 440,
      height: 280,
      spacingBottom: 50,
    },
    title: {
      text: "",
    },
    subtitle: {
      text: "",
    },
    xAxis: {
      categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      color: "#F2F4F7",
      title: {
        text: null,
      },
      gridLineWidth: 0,
      lineWidth: 0,
    },
    yAxis: {
      title: {
        text: "",
      },

      min: 10,
      // lineWidth: 0,
      // minorTickLength: 0,
      // tickLength: 0,
      labels: {
        enabled: true,
      },
    },
    tooltip: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        borderRadius: "30%",
        dataLabels: {
          enabled: false,
        },
        groupPadding: 0.1,
      },
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
    credits: {
      enabled: false,
    },
    series: [
      {
        name: "revenue",
        color: "#F5D93C",
        data: [92, 78, 60, 80, 38, 78, 81, 85, 45, 63],
      },
      {
        name: "Cost",
        color: "#7279D5",
        data: [78, 62, 50, 91, 65, 36, 49, 53, 44, 61],
      },
      {
        name: "Profit",
        color: "#E4E7EC",
        data: [42, 42, 23, 23, 32, 60, 30, 32, 36, 48],
      },
    ],
  };
  return (
    <div>
      <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
};

export default ColumnbarMonth;
