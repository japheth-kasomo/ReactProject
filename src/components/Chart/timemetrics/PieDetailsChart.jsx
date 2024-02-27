/* eslint-disable no-unused-vars */
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React from "react";

const PieDetailsChart = () => {
  const categories = ["On-Time", "Late", "Early"],
    data = [
      {
        y: 61.04,
        color: "#12144D",
        drilldown: {
          name: "On-Time",
          categories: ["Consol", "Big Ventures", "3PL 3", " Fleet"],
          color: "#CCCCCC",
          data: [36.89, 6.725, 6.725, 10.7],
        },
      },
      {
        y: 9.32,
        color: "#F5D93C",
        drilldown: {
          name: "Late",
          color: "#CCCCCC",
          categories: ["3PL 3", "Big Ventures", "consol", "Owned Fleet"],
          data: [2.33, 2.33, 2.33, 2.33],
        },
      },
      {
        y: 10.5,
        color: "#12144D",
        drilldown: {
          name: "Early",
          categories: ["Owned Fleet", "Consol"],
          color: ["#E3651D", "#CCCCCC"],
          data: [7.5, 3],
        },
      },
    ],
    browserData = [],
    versionsData = [],
    dataLen = data.length;

  let i, j, drillDataLen, brightness;

  // Build the data arrays
  for (i = 0; i < dataLen; i += 1) {
    // add browser data
    browserData.push({
      name: categories[i],
      y: data[i].y,
      color: data[i].color,
    });

    // add version data
    drillDataLen = data[i].drilldown.data.length;
    for (j = 0; j < drillDataLen; j += 1) {
      const name = data[i].drilldown.categories[j];
      brightness = 0.2 - j / drillDataLen / 5;
      versionsData.push({
        name,
        y: data[i].drilldown.data[j],
        color: Highcharts.color(data[i].color).brighten(brightness).get(),
        custom: {
          version: name.split(" ")[1] || name.split(" ")[0],
        },
      });
    }
  }
  const options = {
    chart: {
      type: "pie",
      width: 500,
      height: 350,
    },
    title: {
      text: "",
    },

    tooltip: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },

    plotOptions: {
      pie: {
        shadow: false,
        center: ["50%", "50%"],
      },
    },

    series: [
      {
        name: "Trips",
        data: browserData,
        size: "45%",
        dataLabels: {
          color: "#ffffff",
          distance: "-50%",
        },
      },
      {
        name: "Carrier",
        data: versionsData,
        size: "80%",
        innerSize: "60%",
        dataLabels: {
          format: '<b>{point.name}:</b> <span style="opacity: 0.5">{y}%</span>',
          filter: {
            property: "y",
            operator: ">",
            value: 1,
          },
          style: {
            fontWeight: "normal",
          },
        },
        id: "versions",
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 400,
          },
          chartOptions: {
            series: [
              {},
              {
                id: "versions",
                dataLabels: {
                  distance: 10,
                  format: "{point.custom.version}",
                  filter: {
                    property: "percentage",
                    operator: ">",
                    value: 2,
                  },
                },
              },
            ],
          },
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

export default PieDetailsChart;
