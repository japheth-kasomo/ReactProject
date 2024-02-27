import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React from "react";

const PieChartTrips = () => {
  const options = {
    chart: {
      type: "pie",
      width: 300,
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
      series: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: [
          {
            enabled: true,
            distance: 20,
          },
          {
            enabled: true,
            distance: -40,
            format: "{point.percentage:.1f}%",
            style: {
              fontSize: "1em",
              textOutline: "none",
              opacity: 0.7,
            },
            filter: {
              operator: ">",
              property: "percentage",
              value: 10,
            },
          },
        ],
      },
    },
    series: [
      {
        name: "Percentage",
        colorByPoint: true,
        data: [
          {
            name: "On-Time",
            color: "#20236F",
            y: 70.0,
          },
          {
            name: "Late",
            color: " #F2D413",
            sliced: true,
            selected: true,
            y: 12,
          },
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

export default PieChartTrips;
