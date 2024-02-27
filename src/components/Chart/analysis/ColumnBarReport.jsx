import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React from "react";

const ColumnBarReport = () => {
  const options = {
    chart: {
      type: "column",
      width: 430,
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
      categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
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

      min: 1000,
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
        data: [9200, 7800, 6000, 6000, 3800, 7800, 8100],
      },
      {
        name: "Margin",
        color: "#7279D5",
        data: [7800, 6200, 5000, 9100, 6500, 3600, 4900],
      },
      {
        name: "Cost",
        color: "#5CC8BE",
        data: [4200, 4200, 2300, 2300, 6000, 6000, 3000],
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

export default ColumnBarReport;
