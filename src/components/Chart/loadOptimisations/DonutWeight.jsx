import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React from "react";

const DonutWeight = () => {
  const options = {
    chart: {
      type: "pie",
      backgroundColor: "transparent",
      width: 480,
      height: 220,
    },
    credits: { enabled: false },
    colors: ["#7279D5", "#3A3C77", "#E7C20D"],
    title: {
      text: `<div>
      <span style="font-size: 24px; color:#091228  ">900</span>
    </div>`,
      align: "start",
      verticalAlign: "middle",
      y: 18,
      x: 50,
    },
    subtitle: {
      text: `<div>
      
      <span style="font-size: 12px; color:#36B37E  ">+18.7%</span>
    </div>`,
      align: "start",
      verticalAlign: "middle",
      y: 28,
      x: 50,
    },
    tooltip: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        showInLegend: true,
        dataLabels: {
          enabled: false,
          formatter: function () {
            return this.percentage.toFixed(2) + "%";
          },
        },
      },
    },
    legend: {
      enabled: true,
      layout: "vertical",
      align: "right",
      width: 300,
      y: 60,
      verticalAlign: "top",
      useHTML: true,
      labelFormatter: function () {
        return (
          '<div style="display: flex;">' +
          '<div style="text-align: left; width:25px;">' +
          this.name +
          '</div><div style="width:45px; text-align:right; font-weight: 700;">' +
          this.y +
          "</div>" +
          '<div style="display: flex;">' +
          '</div><div style="width:5px; text-align:right;">' +
          "(</div>" +
          this.y +
          '<div style="display: flex;">' +
          "%</div>" +
          ")</div>" +
          "</div>"
        );
      },
    },
    series: [
      {
        type: "pie",
        innerSize: "60%",
        dataLabels: {},
        data: [
          ["Owned", 340],
          ["Fleet", 110],
          ["Subby", 450],
        ],
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

export default DonutWeight;
