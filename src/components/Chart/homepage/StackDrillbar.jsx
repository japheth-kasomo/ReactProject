import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import drilldown from "highcharts/modules/drilldown.js";
import React from "react";

drilldown(Highcharts);

const StackDrillbar = () => {
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

    // accessibility: {
    //   announceNewData: {
    //     enabled: true,
    //   },
    // },
    xAxis: {
      categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      gridLineWidth: 0,
      lineWidth: 0,
    },
    yAxis: {
      min: 10,
      title: {
        text: "",
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

    plotOptions: {
      column: {
        stacking: "normal",
      },
      // series: {
      //   dataLabels: {
      //     enabled: true,
      //     format: "{point.y:.1f}%",
      //   },
      // },
    },

    tooltip: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: "Not Utilized",
        color: "#7279D5",
        // colorByPoint: true,
        data: [
          {
            name: "Safari",
            color: "#7279D5",
            y: 15,
            drilldown: "Safari",
          },
          {
            name: "Safari",
            color: "#7279D5",
            y: 25,
            drilldown: "Safari",
          },
          {
            name: "Safari",
            color: "#7279D5",
            y: 32,
            drilldown: "Safari",
          },
          {
            name: "Safari",
            color: "#7279D5",
            y: 40,
            drilldown: "Safari",
          },
          {
            name: "Safari",
            color: "#7279D5",
            y: 15,
            drilldown: "Safari",
          },
          {
            name: "Safari",
            color: "#7279D5",
            y: 15,
            drilldown: "Safari",
          },
          {
            name: "Safari",
            color: "#7279D5",
            y: 20,
            drilldown: "Safari",
          },
          {
            name: "Safari",
            color: "#7279D5",
            y: 25,
            drilldown: "Safari",
          },
          {
            name: "Safari",
            color: "#7279D5",
            y: 20,
            drilldown: "Safari",
          },
          {
            name: "Safari",
            color: "#7279D5",
            y: 10,
            drilldown: "Safari",
          },
        ],
      },
      {
        name: "Utilized",
        color: "#F5D93C",
        // colorByPoint: true,
        data: [
          {
            name: "Chrome",
            color: "#F5D93C",
            y: 70,
            drilldown: "Chrome",
          },
          {
            name: "Chrome",
            color: "#F5D93C",
            y: 60,
            drilldown: "Chrome",
          },
          {
            name: "Chrome",
            color: "#F5D93C",
            y: 20,
            drilldown: "Chrome",
          },
          {
            name: "Chrome",
            color: "#F5D93C",
            y: 20,
            drilldown: "Chrome",
          },
          {
            name: "Chrome",
            color: "#F5D93C",
            y: 50,
            drilldown: "Chrome",
          },
          {
            name: "Chrome",
            color: "#F5D93C",
            y: 70,
            drilldown: "Chrome",
          },
          {
            name: "Chrome",
            color: "#F5D93C",
            y: 75,
            drilldown: "Chrome",
          },
          {
            name: "Chrome",
            color: "#F5D93C",
            y: 80,
            drilldown: "Chrome",
          },
          {
            name: "Chrome",
            color: "#F5D93C",
            y: 50,
            drilldown: "Chrome",
          },
          {
            name: "Chrome",
            color: "#F5D93C",
            y: 65,
            drilldown: "Chrome",
          },
        ],
      },
    ],
    drilldown: {
      breadcrumbs: {
        position: {
          align: "right",
        },
      },
      series: [
        {
          name: "Chrome",
          id: "Chrome",
          data: [
            ["v65.0", 21],
            ["v64.0", 13],
            ["v63.0", 52],
            ["v62.0", 24],
            ["v61.0", 28],
            ["v60.0", 56],
            ["v59.0", 43],
            ["v58.0", 49],
            ["v57.0", 32],
            ["v56.0", 29],
          ],
        },
        {
          name: "Safari",
          id: "Safari",
          data: [
            ["v58.0", 12],
            ["v57.0", 73],
            ["v56.0", 35],
            ["v55.0", 11],
            ["v54.0", 16],
            ["v52.0", 95],
            ["v51.0", 15],
            ["v50.0", 13],
            ["v48.0", 31],
            ["v47.0", 12],
          ],
        },
      ],
    },
  };
  return (
    <div>
      <div className=" ">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
};

export default StackDrillbar;
