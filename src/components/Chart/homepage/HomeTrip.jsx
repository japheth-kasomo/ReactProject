import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React from "react";

const HomeTrip = () => {
  const options = {
    chart: {
      type: "pie",
      backgroundColor: "transparent",
      width: 510,
      height: 310,
    },
    credits: { enabled: false },
    colors: ["#7279D5", "#3A3C77", "#E7C20D"],
    title: {
      text: `<div>
      <span style="font-size: 32px; color:#091228  ">900</span>
    </div>`,
      align: "start",
      verticalAlign: "middle",
      y: 27,
      x: 82,
    },
    subtitle: {
      text: `<div>
      
        <span style="font-size: 14px; color:#36B37E  ">+18.7%</span>
      </div>`,
      align: "start",
      verticalAlign: "middle",
      y: 35,
      x: 85,
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
      width: 255,
      y: 110,
      verticalAlign: "top",
      useHTML: true,
      labelFormatter: function () {
        return (
          '<div style="display: flex;">' +
          '<div style="text-align: left; width:30px;">' +
          this.name +
          '</div><div style="width:50px; text-align:right; font-weight: bold;">' +
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

export default HomeTrip;
