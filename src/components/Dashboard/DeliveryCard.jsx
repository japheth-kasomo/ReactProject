import React from "react";
import { IoIosTrendingDown } from "react-icons/io";

function DeliveryCard({ title, trendPercentage, chartComponent }) {
  return (
    <div className="p-[20px] flex flex-col bg-[#ffffff] rounded-[16px]">
      <div className="flex items-center justify-between">
        <h3 className="font-Inter font-semibold text-[18px] text-[#101828] leading-[26px]">{title}</h3>
        <div className="h-[27px] px-[10px] flex items-center rounded-[18px] gap-[2px] bg-[#FFEDEC] text-[#ED5763] py-[4px]">
          <IoIosTrendingDown className="w-[14px] h-[14px] text-[#ED5763]" />
          <p className="font-Inter font-bold text-[12px] leading-[19px]">{trendPercentage}</p>
        </div>
      </div>
      <div className="mt-[20px] flex items-center justify-center">{chartComponent}</div>
    </div>
  );
}

export default DeliveryCard;
