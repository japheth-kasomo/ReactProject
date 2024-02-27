import React from "react";
import { IoCubeOutline } from "react-icons/io5";
import { LuCar } from "react-icons/lu";
import moneyin from "../../assets/icons/money-recive.png";
import moneyout from "../../assets/icons/money-send.png";

function StatisticCard({ icon, title, value, changePercentage, changeDescription, chartComponent }) {
  return (
    <div className="space-y-[16px] bg-[#ffffff] rounded-[12px] p-6">
      <div className="flex items-center gap-3">
        <div className="bg-[#7279D5] bg-opacity-[8%] rounded-full p-1">
          {icon === "moneyin" && <img src={moneyin} alt="" className="text-[#7279D5] w-[24px] h-[24px]" />}
          {icon === "moneyout" && <img src={moneyout} alt="" className="text-[#7279D5] w-[24px] h-[24px]" />}
          {icon === "cube" && <IoCubeOutline className="text-[#7279D5] w-[24px] h-[24px]" />}
          {icon === "car" && <LuCar className="text-[#7279D5] w-[24px] h-[24px]" />}
        </div>
        <h4 className="font-[600] text-[16px] leading-[24px] text-[#1F2937]">{title}</h4>
      </div>
      <div>
        <h3 className="font-[700] text-[24px] leading-[31px] text-[#1D1F2C]">{value}</h3>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[8px]">
          <span className="px-[6px] py-[4px] text-[12px] font-[600] rounded-[12px] bg-[#4FBE88] bg-opacity-[12%] text-[#4FBE88]">{changePercentage}</span>
          <span className="font-[400] text-[12px] leading-[19.2px] text-[#667085]">{changeDescription}</span>
        </div>
        <div className="">{chartComponent}</div>
      </div>
    </div>
  );
}

export default StatisticCard;
