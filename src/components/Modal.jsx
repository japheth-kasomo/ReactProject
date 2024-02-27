import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import Cdown from "../assets/chevron-down.svg";
import { useSelectOptions } from "../hooks/useSelect";
import { options1, options2, options3, options4, options7 } from "../data/options";
import Tiles from "./Tiles";
import ChartModal from "./ChartModal";
import Table from "./Table";

const Modal = ({ openModal, setOpenModal }) => {
  const [inputXOn, setInputxon] = useState(false);
  const [inputYOn, setInputyon] = useState(false);
  const [value, setValue] = useState("Tiles");

  const { selectedOptions: selectedOptions1, isOpen: isOpen1, handleOptionClick: handleOptionClick1, toggleDropdown: toggleDropdown1 } = useSelectOptions(["", "", ""], [false, false, false]);

  const { selectedOptions: selectedOptions2, isOpen: isOpen2, handleOptionClick: handleOptionClick2, toggleDropdown: toggleDropdown2 } = useSelectOptions(["", "", ""], [false, false, false]);

  const { selectedOptions: selectedOptions3, isOpen: isOpen3, handleOptionClick: handleOptionClick3, toggleDropdown: toggleDropdown3 } = useSelectOptions(["", "", ""], [false, false, false]);

  const { selectedOptions: selectedOptions4, isOpen: isOpen4, handleOptionClick: handleOptionClick4, toggleDropdown: toggleDropdown4 } = useSelectOptions(["", "", ""], [false, false, false]);

  const {
    selectedOptions: selectedOptions7,
    isOpen: isOpen7,
    handleOptionClick: handleOptionClick7,
    toggleDropdown: toggleDropdown7,
  } = useSelectOptions(["", "", ""], [false, false, false], "Tiles", setValue);

  return (
    <div className="backdrop flex bg-black bg-opacity-50 justify-center items-center  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="w-[680px] h-auto p-[32px] rounded-[16px] bg-[#ffffff]">
        <div className="space-y-[15px]">
          <div className="flex items-center justify-between">
            <h2 className="font-Inter font-[500] text-[18px] leading-[21px] text-[#101828]">Add New</h2>

            <button className="hover:text-red-400 text-xl text-gray-500 transition-all duration-200 ease-linear" onClick={() => setOpenModal(!openModal)} type="button">
              <FiX />
            </button>
          </div>

          <form action="" className="space-y-[15px]">
            <div>
              <label for="" className="font-Inter font-[500] text-[14px] leading-[20px] text-[#101828]">
                Type
              </label>

              <div className="relative">
                <button
                  type="button"
                  className="block appearance-none w-full text-sm text-[#667085] bg-white border-[1px] border-[#D0D5DD] outline-none hover:border-gray-400 text-start px-[14px] py-[10px] rounded mt-1"
                  onClick={() => toggleDropdown7(0)}
                >
                  {selectedOptions7[0] ? selectedOptions7[0].label : "Tails"}
                </button>
                {isOpen7[0] && (
                  <div className="absolute z-10 mt-1 w-full p-2 rounded-md bg-white shadow-3xl">
                    {options7.map((option) => (
                      <div key={option.id} className="py-1 px-2 rounded-md cursor-pointer text-sm leading-[22px] text-[#212B36] hover:bg-[#919eab29]" onClick={() => handleOptionClick7(0, option)}>
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

            {value === "Tiles" && (
              <Tiles selectedOptions4={selectedOptions4} isOpen4={isOpen4} Cdown={Cdown} options4={options4} handleOptionClick4={handleOptionClick4} toggleDropdown4={toggleDropdown4} />
            )}

            {value === "Chart" && <ChartModal inputXOn={inputXOn} inputYOn={inputYOn} setInputxon={setInputxon} setInputyon={setInputyon} />}

            {value === "Table" && (
              <Table
                selectedOptions1={selectedOptions1}
                selectedOptions2={selectedOptions2}
                selectedOptions3={selectedOptions3}
                toggleDropdown1={toggleDropdown1}
                toggleDropdown2={toggleDropdown2}
                toggleDropdown3={toggleDropdown3}
                isOpen1={isOpen1}
                isOpen2={isOpen2}
                isOpen3={isOpen3}
                options1={options1}
                options2={options2}
                options3={options3}
                handleOptionClick1={handleOptionClick1}
                handleOptionClick2={handleOptionClick2}
                handleOptionClick3={handleOptionClick3}
                Cdown={Cdown}
              />
            )}

            <div className="flex items-center justify-end gap-[16px] w-full">
              <button
                type="button"
                onClick={() => setOpenModal(!openModal)}
                className=" mt-[10px] px-[32px] py-[12px] border-[1px] border-[#D0D5DD] rounded-[4px] text-[16px] font-medium text-[#101828]"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => setOpenModal(!openModal)}
                className="mt-[10px] px-[32px] py-[12px] border-[1px] border-[#D0D5DD] rounded-[4px] text-[16px] bg-[#7F56D9] font-medium text-[#ffff]"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
