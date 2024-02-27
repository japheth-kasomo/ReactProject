import React from "react";

const Table = ({
  selectedOptions1,
  selectedOptions2,
  selectedOptions3,
  toggleDropdown1,
  toggleDropdown2,
  toggleDropdown3,
  isOpen1,
  isOpen2,
  isOpen3,
  options1,
  options2,
  options3,
  handleOptionClick1,
  handleOptionClick2,
  handleOptionClick3,
  Cdown,
}) => {
  return (
    <div className="space-y-[10px]">
      <div>
        <label for="" className="font-Inter font-[500] text-[14px] leading-[20px] text-[#101828]">
          Table Title
        </label>

        <input type="text" placeholder="Enter" className="w-full h-[44px] outline-none rounded-[4px] border-[1px] border-[#D0D5DD] px-[14px] py-[10px] mt-1" />
      </div>
      {/*  */}
      <div>
        <label for="" className="font-Inter font-[500] text-[14px] leading-[20px] text-[#101828]">
          Table Category
        </label>
        <div className="relative">
          <button
            type="button"
            className="block appearance-none w-full text-sm text-[#667085] bg-white border-[1px] border-[#D0D5DD] outline-none hover:border-gray-400 text-start px-[14px] py-[10px] rounded mt-1"
            onClick={() => toggleDropdown3(0)}
          >
            {selectedOptions3[0] ? selectedOptions3[0].label : "Enter"}
          </button>
          {isOpen3[0] && (
            <div className="absolute z-10 mt-1 w-full p-2 rounded-md bg-white shadow-3xl">
              {options3.map((option) => (
                <div key={option.id} className="py-1 px-2 rounded-md cursor-pointer text-sm leading-[22px] text-[#212B36] hover:bg-[#919eab29]" onClick={() => handleOptionClick3(0, option)}>
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
      <div className="grid grid-cols-2 gap-[16px]">
        {/*  */}
        <div>
          <label for="" className="font-Inter font-[500] text-[14px] leading-[20px] text-[#101828]">
            Number Of Rows
          </label>

          <div className="relative">
            <button
              type="button"
              className="block appearance-none w-full text-sm text-[#667085] bg-white border-[1px] border-[#D0D5DD] outline-none hover:border-gray-400 text-start px-[14px] py-[10px] rounded mt-1"
              onClick={() => toggleDropdown1(0)}
            >
              {selectedOptions1[0] ? selectedOptions1[0].label : "Enter"}
            </button>
            {isOpen1[0] && (
              <div className="absolute z-10 mt-1 w-full p-2 rounded-md bg-white shadow-3xl">
                {options1.map((option) => (
                  <div key={option.id} className="py-1 px-2 rounded-md cursor-pointer text-sm leading-[22px] text-[#212B36] hover:bg-[#919eab29]" onClick={() => handleOptionClick1(0, option)}>
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

        {/*  */}
        <div>
          <label for="" className="font-Inter font-[500] text-[14px] leading-[20px] text-[#101828]">
            Number Of Columns
          </label>
          <div className="relative">
            <button
              type="button"
              className="block appearance-none w-full text-sm text-[#667085] bg-white border-[1px] border-[#D0D5DD] outline-none hover:border-gray-400 text-start px-[14px] py-[10px] rounded mt-1"
              onClick={() => toggleDropdown2(0)}
            >
              {selectedOptions2[0] ? selectedOptions2[0].label : "Enter"}
            </button>
            {isOpen2[0] && (
              <div className="absolute z-10 mt-1 w-full p-2 rounded-md bg-white shadow-3xl">
                {options2.map((option) => (
                  <div key={option.id} className="py-1 px-2 rounded-md cursor-pointer text-sm leading-[22px] text-[#212B36] hover:bg-[#919eab29]" onClick={() => handleOptionClick2(0, option)}>
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
      </div>
    </div>
  );
};

export default Table;
