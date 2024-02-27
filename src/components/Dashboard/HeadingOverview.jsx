import React from "react";
import FilterModal from "../FilterModal";
import { LuSearch } from "react-icons/lu";
import { options5 } from "../../data/options";
import Filter from "../../assets/icons/filter.svg";

function HeadingOverview({ setOpenWeekly, openWeekly, isOpen5, toggleDropdown5, selectedOptions5, handleOptionClick5, CDown, openFilterModal, setOpenFilterModal }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h3 className="font-Inter font-[600] text-[24px] leading-[28.8px] text-[#101828]">Overview / Dashboard</h3>
        <p className="font-Inter tracking-tight font-[400] text-[14px] leading-[20px] text-[#b2b3b4]">Total Profit By Transport Type, drill down revenue and cost on a bar chart</p>
      </div>
      <div className="flex items-center gap-[16px]">
        <div className="rounded-[8px] mt-1 py-[9px] px-[12px] flex items-center gap-[4px] bg-[#ffffff] w-[232px] border-[1px] border-[#E4E7EC] hover:border-gray-400">
          <LuSearch className="w-[24px] h-[24px] text-[#667085]" />
          <input type="text" placeholder="Search" className="font-Inter font-[400] bg-transparent outline-none text-[14px] leading-[24px] text-[#667085] " />
        </div>

        <div className="relative ">
          <button
            type="button"
            className="flex appearance-none w-[121px] py-3 px-[20px] relative bg-[#ffffff]  border-[1px]  items-center  border-[#E4E7EC] rounded-[8px] font-medium  text-sm text-[#101828]  outline-none hover:border-gray-400 text-start mt-1"
            onClick={() => toggleDropdown5(0)}
          >
            {selectedOptions5[0] ? selectedOptions5[0].label : "Weekly"}
          </button>
          {isOpen5[0] && (
            <div className="absolute z-10 mt-1 w-full p-2 rounded-md bg-white shadow-3xl">
              {options5.map((option) => (
                <div key={option.id} className="py-1 px-2 rounded-md cursor-pointer text-sm leading-[22px] text-[#212B36] hover:bg-[#919eab29]" onClick={() => handleOptionClick5(0, option)}>
                  {option.label}
                </div>
              ))}
            </div>
          )}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pt-1 pr-5 text-gray-700">
            <img src={CDown} alt="cdown" className="w-6 h-6 object-fill" />
          </div>
        </div>
        <div className="relative">
          <button
            onClick={() => setOpenFilterModal(!openFilterModal)}
            className="w-auto py-3 px-[20px] inline-flex items-center justify-center gap-[8px] font-Inter font-[500] text-[14px] leading-[19px] border-[1px] border-[#E4E7EC] hover:border-gray-400 bg-[#F2F4F7] rounded-[8px] "
            type="button"
          >
            <img src={Filter} alt="filter icon" />
            <span>Filter</span>
          </button>

          {openFilterModal && <FilterModal openFilterModal={openFilterModal} setOpenFilterModal={setOpenFilterModal} />}
        </div>
      </div>
    </div>
  );
}

export default HeadingOverview;
