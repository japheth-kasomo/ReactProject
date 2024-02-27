import React from "react";

const Tiles = ({ selectedOptions4, isOpen4, Cdown, options4, handleOptionClick4, toggleDropdown4 }) => {
  return (
    <div className="space-y-[10px]">
      <div>
        <label for="" className="font-Inter font-[500] text-[14px] leading-[20px] text-[#101828]">
          Title
        </label>

        <input type="text" placeholder="Write the title of the tile" className="w-full h-[44px] outline-none rounded-[4px] border-[1px] border-[#D0D5DD] px-[14px] py-[10px] mt-1" />
      </div>

      <div>
        <label for="" className="font-Inter font-[500] text-[14px] leading-[20px] text-[#101828]">
          Categories
        </label>

        <div className="relative">
          <button
            type="button"
            className="block appearance-none w-full text-sm text-[#667085] bg-white border-[1px] border-[#D0D5DD] outline-none hover:border-gray-400 text-start px-[14px] py-[10px] rounded mt-1"
            onClick={() => toggleDropdown4(0)}
          >
            {selectedOptions4[0] ? selectedOptions4[0].label : "Choose the categories"}
          </button>
          {isOpen4[0] && (
            <div className="absolute z-10 mt-1 w-full p-2 rounded-md bg-white shadow-3xl">
              {options4.map((option) => (
                <div key={option.id} className="py-1 px-2 rounded-md cursor-pointer text-sm leading-[22px] text-[#212B36] hover:bg-[#919eab29]" onClick={() => handleOptionClick4(0, option)}>
                  {option.label}
                </div>
              ))}
            </div>
          )}

          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <img src={Cdown} alt="cdown" className="w-6 h-6 object-fill" />
          </div>
        </div>
      </div>
      <div>
        <p className="font-Inter font-[500] text-[14px] leading-[20px] text-[#101828]">Choose Icon</p>

        <button className="mt-[10px] px-[32px] py-[12px] border-[1px] border-[#D0D5DD] rounded-[4px] text-[16px] font-medium text-[#667085] ">Upload</button>
        <p className=" text-[12px] font-normal text-[#667085]">Only SVG</p>
      </div>
    </div>
  );
};

export default Tiles;
