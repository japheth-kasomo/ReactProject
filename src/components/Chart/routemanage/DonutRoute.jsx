import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React from "react";

const DonutRoute = () => {
  const options = {
    chart: {
      type: "pie",
      backgroundColor: "transparent",
      width: 500,
      height: 300,
    },
    credits: { enabled: false },
    colors: ["#7279D5", "#E7C20D"],
    title: {
      text: `<div>
      <span style="font-size: 24px; color:#091228  ">900</span>
    </div>`,
      align: "start",
      verticalAlign: "middle",
      y: 18,
      x: 48,
    },
    subtitle: {
      text: `<div>  
      <span style="font-size: 12px; color:#36B37E  ">+18.7%</span>
    </div>`,

      align: "start",
      verticalAlign: "middle",
      y: 25,
      x: 48,
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
      width: 325,
      y: 110,

      verticalAlign: "top",
      useHTML: true,
      labelFormatter: function () {
        return (
          '<div style="display: flex;">' +
          '<div style="text-align: left; width:15px;">' +
          this.name +
          '</div><div style="width:60px; text-align:right; font-weight: bold;">' +
          this.y +
          "</div>" +
          '<div style="display: flex;">' +
          '</div><div style="width:2px; text-align:right;">' +
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
          ["Target", 340],
          ["Delayed", 110],
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

export default DonutRoute;
