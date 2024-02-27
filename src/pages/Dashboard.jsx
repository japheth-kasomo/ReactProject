/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";

import Homedonut1 from "../components/Chart/homepage/Homedonut1";
import Homedonut2 from "../components/Chart/homepage/Homedonut2";
import Homedonut3 from "../components/Chart/homepage/Homedonut3";
import Homedonut4 from "../components/Chart/homepage/Homedonut4";

import LineChart from "../components/Chart/homepage/LineChart";
import LineChart2 from "../components/Chart/homepage/LineChart2";
import LineChart3 from "../components/Chart/homepage/LineChart3";
import LinechartRed from "../components/Chart/homepage/LinechartRed";

import StackDrillbar from "../components/Chart/homepage/StackDrillbar";
import Stackedbar from "../components/Chart/homepage/Stackedbar";

import { useSelectOptions } from "../hooks/useSelect";
import HeadingOverview from "../components/Dashboard/HeadingOverview";
import CDown from "../assets/chevron-down.svg";
import Navigation from "../components/Navigation/Navigation";
import StatisticCard from "../components/Dashboard/StatisticCard";
import DeliveryCard from "../components/Dashboard/DeliveryCard";
import { BarChartSection, TripInfoSection } from "../components/Dashboard/BarChartSection";
import FleetUtilizationSection from "../components/Dashboard/FleetUtilizationSection";
import { AreaPerformance, VehiclePerformance } from "../components/Dashboard/PerformanceDashboard";

const statisticData = [
  { icon: "moneyin", title: "Total Earning", value: "$29,435.00", changePercentage: "+0.32%", changeDescription: "Higher than last month", chartComponent: <LineChart /> },
  { icon: "moneyout", title: "Total Spending", value: "$12,629.00", changePercentage: "+0.12%", changeDescription: "Less than last month", chartComponent: <LinechartRed /> },
  { icon: "cube", title: "Total Orders", value: "21,785", changePercentage: "+4.3%", changeDescription: "Higher than last month", chartComponent: <LineChart2 /> },
  { icon: "car", title: "Total Deliveries", value: "20,390", changePercentage: "+4.3%", changeDescription: "Higher than last month", chartComponent: <LineChart3 /> },
];

const deliveryData = [
  { title: "Total Deliveries", trendPercentage: "-0.5%", chartComponent: <Homedonut1 /> },
  { title: "Not Completed", trendPercentage: "-0.5%", chartComponent: <Homedonut2 /> },
  { title: "Delayed Orders", trendPercentage: "-0.5%", chartComponent: <Homedonut3 /> },
  { title: "Order States", trendPercentage: "-0.5%", chartComponent: <Homedonut4 /> },
];

const fleetUtilizationData = [
  {
    title: "Owned Fleet Utilization",
    description: "Please refer instructions on how to get these values",
    selectOptions: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    chartComponent: <StackDrillbar />, // Assuming StackDrillbar component is used
  },
  {
    title: "Entire Fleet Utilization",
    description: "Trips subby stacked to owned fleet.",
    selectOptions: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    chartComponent: <Stackedbar />, // Assuming Stackedbar component is used
  },
];

const vehicleData = [
  { name: "Vehicle 1", percentage: 30 },
  { name: "Vehicle 2", percentage: 25 },
  { name: "Vehicle 3", percentage: 20 },
  { name: "Vehicle 4", percentage: 13 },
  { name: "Vehicle 5", percentage: 8 },
  { name: "Vehicle 6", percentage: 4 },
];

// Sample data for area performance
const areaData = [
  { name: "Nairobi", completion: 30, color: "#06BF7C", status: "Good" },
  { name: "Mombasa", completion: 30, color: "#FB9A18", status: "Average" },
  { name: "Kisumu", completion: 30, color: "#ED5763", status: "Bad" },
  { name: "Kisumu", completion: 30, color: "#ED5763", status: "Bad" },
  { name: "Nairobi", completion: 30, color: "#06BF7C", status: "Good" },
];

const Dashboard = () => {
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const [openWeekly, setOpenWeekly] = useState(false);

  const { selectedOptions: selectedOptions5, isOpen: isOpen5, handleOptionClick: handleOptionClick5, toggleDropdown: toggleDropdown5 } = useSelectOptions(["", "", ""], [false, false, false]);

  return (
    <section className="p-[32px]">
      <HeadingOverview
        setOpenWeekly={setOpenWeekly}
        openWeekly={openWeekly}
        toggleDropdown5={toggleDropdown5}
        selectedOptions5={selectedOptions5}
        handleOptionClick5={handleOptionClick5}
        CDown={CDown}
        openFilterModal={openFilterModal}
        setOpenFilterModal={setOpenFilterModal}
        isOpen5={isOpen5}
      />

      <Navigation />

      {/* Four line chart */}
      <div className="grid grid-cols-4 overflow-hidden gap-4 py-[24px]">
        {statisticData.map((data, index) => (
          <div key={index}>
            <StatisticCard {...data} />
          </div>
        ))}
      </div>

      {/* <!-- Doughnut chart --> */}
      <div className="grid grid-cols-4 gap-4 py-[24px]">
        {deliveryData.map((data, index) => (
          <div key={index}>
            <DeliveryCard {...data} />
          </div>
        ))}
      </div>

      {/* <!-- Horizontal bar chart --> */}
      <div className="grid grid-cols-12 py-[24px] gap-4">
        <BarChartSection />
        <TripInfoSection />
      </div>

      {/* <!-- Stacked Bar Chart --> */}
      <div className="grid grid-cols-12 py-[24px] gap-4">
        {fleetUtilizationData.map((item, index) => (
          <div key={index} className="col-span-6">
            <FleetUtilizationSection title={item.title} description={item.description} selectOptions={item.selectOptions} chartComponent={item.chartComponent} />
          </div>
        ))}
      </div>

      {/* <!-- custom bar chart --> */}
      <div className="grid grid-cols-12 py-[24px] gap-4">
        <VehiclePerformance vehicleData={vehicleData} />
        <AreaPerformance areaData={areaData} />
      </div>

      <div className="py-[24px] gap-4">
        <div className="bg-[#ffffff] rounded-[12px]">
          <div className="p-[32px]">
            <div className="border-b-[1px] border-[#F2F4F7]">
              <h3 className="font-Inter font-[500] text-[18px] leading-[21px]  text-[#101828] mb-[10px]">Heat Map</h3>
            </div>
            <div className="mt-[30px]">
              <iframe
                className=" aspect-auto w-full h-[405px] rounded-[8px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63820.62226348629!2d36.77579128962904!3d-1.301573151179506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sbd!4v1701085105761!5m2!1sen!2sbd"
                width="600"
                height="450"
                // style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
