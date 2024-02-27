import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React from "react";

const ColumnLcbar = () => {
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

      min: 20,
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
        data: [38, 78, 60, 60, 92, 78, 51, 45, 67, 63],
      },
      {
        name: "Cost",
        color: "#7279D5",
        data: [50, 78, 44, 72, 61, 65, 36, 49, 53, 61],
      },
      {
        name: "Profit",
        color: "#E4E7EC",
        data: [60, 42, 23, 23, 40, 42, 30, 32, 36, 48],
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

export default ColumnLcbar;

// export default ColumnLcbar
