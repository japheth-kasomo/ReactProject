import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsTreeChart from "highcharts/modules/treemap";
import React from "react";

HighchartsTreeChart(Highcharts);

const Treemap = () => {
  const options = {
    colorAxis: {
      minColor: "red",
      // maxColor: Highcharts.getOptions().colors[0],
      labels: {
        format: "{value} Delay Events",
      },
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
    series: [
      {
        type: "treemap",
        layoutAlgorithm: "squarified",
        clip: false,
        data: [
          {
            name: "Carrefour Two Rivers",
            color: "#BDBDCD",
            value: 177, // Total trips (size)
            colorValue: 35, // Total delay events (color)
            averageDelay: 15, // Average delay (added to the tooltip)
          },
          {
            name: "Carrefour Village Market",
            value: 154,
            color: "#BDBDCD",
            colorValue: 40,
            averageDelay: 12,
          },
          {
            name: "Carrefout Sarit Center",
            value: 104,
            color: "#D9D9E3",
            colorValue: 20,
            averageDelay: 8,
          },
          {
            name: "Chandarana ABC",
            value: 86,
            color: "#E6E6E6",
            colorValue: 10,
            averageDelay: 6,
          },
          {
            name: "Chandarana Adlife",
            value: 44,
            color: "#D0D0DB",
            colorValue: 25,
            averageDelay: 10,
          },
          {
            name: "Chandarana Azelea",
            value: 108,
            color: "#323465",
            colorValue: 108,
            averageDelay: 14,
          },
          {
            name: "Chandarana D.P",
            value: 80,
            color: "#67698D",
            colorValue: 80,
            averageDelay: 20,
          },
          {
            name: "Chandarana Golden life",
            color: "#BFBFCF",
            value: 34,
            colorValue: 34,
            averageDelay: 15,
          },
          {
            name: "Chandarana Ngara",
            color: "#D3D4DE",
            value: 20,
            colorValue: 20,
            averageDelay: 12,
          },
          {
            name: "Carrefour Junction",
            color: "#D3D4DE",
            value: 22,
            colorValue: 22,
            averageDelay: 18,
          },
          {
            name: "Quickmart Nyalenda",
            color: "#BFBFCF",
            value: 30,
            colorValue: 30,
            averageDelay: 14,
          },
          {
            name: "Chandarana Signature",
            color: "#9798B1",
            value: 55,
            colorValue: 55,
            averageDelay: 8,
          },
          {
            name: "Quickmart Kileleshwa",
            value: 15,
            colorValue: 15,
            color: "#9798B1",
            averageDelay: 11,
          },
          {
            name: "Quickmart Kilimani",
            value: 15,
            color: "#9798B1",
            colorValue: 15,
            averageDelay: 9,
          },
          {
            name: "Chandar Roselyn",
            color: "#D3D4DE",
            value: 12,
            colorValue: 12,
            averageDelay: 10,
          },
          {
            name: "Chandarana Yaya",
            color: "#BFBFCF",
            value: 34,
            colorValue: 34,
            averageDelay: 13,
          },
          {
            name: "Chandarana Thigiri",
            color: "#54567F",
            value: 90,
            colorValue: 90,
            averageDelay: 17,
          },
          {
            name: "Chandarana Rapta",
            value: 23,
            color: "#9798B1",
            colorValue: 23,
            averageDelay: 11,
          },
          {
            name: "Chandarana Buffalo Mall",
            color: "#BFBFCF",
            value: 22,
            colorValue: 22,
            averageDelay: 10,
          },
          {
            name: "Chandarana Highridge",
            value: 18,
            color: "#BFBFCF",
            colorValue: 18,
            averageDelay: 9,
          },
          {
            name: "Chandarana Nyali",
            value: 108,
            color: "#323465",
            colorValue: 108,
            averageDelay: 14,
          },
          {
            name: "Chandarana Signature",
            color: "#D3D4DE",
            value: 8,
            colorValue: 8,
            averageDelay: 12,
          },
          {
            name: "KPS Karen",
            color: "#D3D4DE",
            value: 10,
            colorValue: 10,
            averageDelay: 8,
          },
          {
            name: "Montys",
            color: "#D3D4DE",
            value: 23,
            colorValue: 23,
            averageDelay: 15,
          },
          {
            name: "Vintage",
            color: "#BFBFCF",
            value: 17,
            colorValue: 17,
            averageDelay: 11,
          },
          {
            name: "Denian",
            color: "#BFBFCF",
            value: 8,
            colorValue: 8,
            averageDelay: 9,
          },
          {
            name: "Goodwill",
            color: "#D3D4DE",
            value: 23,
            colorValue: 23,
            averageDelay: 12,
          },
          {
            name: "Maiyek",
            color: "#D3D4DE",
            value: 12,
            colorValue: 12,
            averageDelay: 10,
          },
        ],
        dataLabels: {
          enabled: true,
          format: "{point.name}",
          style: {
            textOutline: "none",
            fontWeight: "bold",
          },
        },
        // tooltip: {
        //   headerFormat: "<b>{point.name}</b><br>",
        //   pointFormat:
        //     "Total Trips: {point.value}<br>Total Delay Events: {point.colorValue}<br>Average Delay: {point.averageDelay} min",
        // },
      },
    ],

    accessibility: {
      description:
        "This treemap visualizes the total number of trips, total delay events, and average delay for various customers. Each square represents a customer, where the size of the square indicates the total trips, the color gradient represents the total delay events, and the tooltip displays the average delay in minutes.",
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

export default Treemap;
