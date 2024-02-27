import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React from "react";

const Homebarhorizon = () => {
  const options = {
    chart: {
      type: "bar",
      // type: "column",
      width: 480,
      height: 240,
      spacingBottom: 50,
    },
    title: {
      text: "",
    },
    subtitle: {
      text: "",
    },
    xAxis: {
      categories: ["Owned Fleet", "Subbly", "Overall"],
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

      // min: 0,
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
        data: [30, 90, 30],
      },
      {
        name: "Cost",
        color: "#7279D5",
        data: [38, 88, 58],
      },
      {
        name: "Profit",
        color: "#E4E7EC",
        data: [18, 36, 45],
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

export default Homebarhorizon;
