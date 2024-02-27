import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React from "react";

const Homedonut2 = () => {
  const options = {
    chart: {
      type: "pie",
      backgroundColor: "transparent",
      height: 310,
      width: 253,
      spacingBottom: 130,
    },
    credits: { enabled: false },
    colors: ["#FFF1A3", "#3F3F75", "#7279D5", "#F5D93C", "#E4E7EC"],
    title: {
      text: `
      <span style="font-size: 24px">212</span>
      `,
      align: "center",
      verticalAlign: "middle",
      y: 23,
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
      align: "start",
      width: 233,
      x: 0,
      y: 110,
      verticalAlign: "bottom",
      useHTML: true,
      labelFormatter: function () {
        return (
          '<div style="display: flex;">' +
          '<div style="text-align: left; width:40px;">' +
          this.name +
          '</div><div style="width:100px; text-align:right; font-weight: bold;">' +
          this.y +
          "</div>" +
          '<div style="display: flex;">' +
          '</div><div style="width:10px; text-align:right;">' +
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
          ["Not Dispatched", 36],
          ["Complete", 36],
          ["Title", 36],
          ["Title", 13],
          ["Title", 6],
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

export default Homedonut2;
