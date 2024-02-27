import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import down from "../assets/chevron-down.svg";
import up from "../assets/up.svg";
import FilterCheckDetails from "./FilterCheckDetails";

const FilterModal = ({ openFilterModal, setOpenFilterModal }) => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div className="backdrop flex bg-black bg-opacity-50 justify-center items-center  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="w-[680px] h-auto  rounded-[16px] bg-[#ffffff]">
        <div className="p-6 flex items-center justify-between border-b-[1px] border-gray-200">
          <h2 className="font-Inter font-[500] text-[18px] leading-[21px] text-[#101828]">
            Filter
          </h2>
          <button
            className="hover:text-red-400 text-xl text-gray-500 transition-all duration-200 ease-linear"
            onClick={() => setOpenFilterModal(!openFilterModal)}
            type="button"
          >
            <FiX />
          </button>
        </div>
        <div className="p-6 border-b-[1px] border-gray-200 space-y-4">
          <div>
            <button
              type="button"
              onClick={() => handleOpen(1)}
              className="px-6 py-3 bg-[#F8F9FA] rounded w-full flex items-center justify-between outline-none"
            >
              <span className="font-medium text-xl leading-9 text-[#212B36]">
                Sub Contractor
              </span>

              <span>
                {open === 1 ? (
                  <span>
                    <img src={up} alt="up" />
                  </span>
                ) : (
                  <span>
                    <img src={down} alt="down" />
                  </span>
                )}
              </span>
            </button>
            {open === 1 && (
              <div className="px-2 pt-4 space-y-2">
                <FilterCheckDetails title="High-Intent" />
                <FilterCheckDetails title="Pre-Purchases" />
                <FilterCheckDetails title="Post-Purchases" />
              </div>
            )}
          </div>
          <div>
            <button
              type="button"
              onClick={() => handleOpen(2)}
              className="px-6 py-3 bg-[#F8F9FA] rounded w-full flex items-center justify-between outline-none"
            >
              <span className="font-medium text-xl leading-9 text-[#212B36]">
                Own Feet
              </span>

              <span>
                {open === 2 ? (
                  <span>
                    <img src={up} alt="up" />
                  </span>
                ) : (
                  <span>
                    <img src={down} alt="down" />
                  </span>
                )}
              </span>
            </button>
            {open === 2 && (
              <div className="px-2 pt-4 space-y-2">
                <FilterCheckDetails title="High-Intent" />
                <FilterCheckDetails title="Pre-Purchases" />

                <FilterCheckDetails title="Comparison" />
              </div>
            )}
          </div>
          <div>
            <button
              type="button"
              onClick={() => handleOpen(3)}
              className="px-6 py-3 bg-[#F8F9FA] rounded w-full flex items-center justify-between outline-none"
            >
              <span className="font-medium text-xl leading-9 text-[#212B36]">
                Categoty
              </span>

              <span>
                {open === 3 ? (
                  <span>
                    <img src={up} alt="up" />
                  </span>
                ) : (
                  <span>
                    <img src={down} alt="down" />
                  </span>
                )}
              </span>
            </button>
            {open === 3 && (
              <div className="px-2 pt-4 space-y-2">
                <FilterCheckDetails title="High-Intent" />
                <FilterCheckDetails title="Pre-Purchases" />
                <FilterCheckDetails title="Post-Purchases" />
                <FilterCheckDetails title="Comparison" />
              </div>
            )}
          </div>
          <div>
            <button
              type="button"
              onClick={() => handleOpen(4)}
              className="px-6 py-3 bg-[#F8F9FA] rounded w-full flex items-center justify-between outline-none"
            >
              <span className="font-medium text-xl leading-9 text-[#212B36]">
                Order Status
              </span>

              <span>
                {open === 4 ? (
                  <span>
                    <img src={up} alt="up" />
                  </span>
                ) : (
                  <span>
                    <img src={down} alt="down" />
                  </span>
                )}
              </span>
            </button>
            {open === 4 && (
              <div className="px-2 pt-4 space-y-2">
                <FilterCheckDetails title="High-Intent" />
                <FilterCheckDetails title="Pre-Purchases" />
                <FilterCheckDetails title="Post-Purchases" />
                <FilterCheckDetails title="Comparison" />
              </div>
            )}
          </div>
        </div>

        <div className="px-6 pt-4 pb-6 flex items-center justify-end gap-[16px] w-full">
          <button
            type="button"
            onClick={() => setOpenFilterModal(!openFilterModal)}
            className=" mt-[10px] px-[32px] py-[12px] border-[1px] border-[#D0D5DD] rounded-[4px] text-[16px] font-medium text-[#101828]"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => setOpenFilterModal(!openFilterModal)}
            className="mt-[10px] px-[32px] py-[12px] border-[1px] border-[#D0D5DD] rounded-[4px] text-[16px] bg-[#7F56D9] font-medium text-[#ffff]"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
