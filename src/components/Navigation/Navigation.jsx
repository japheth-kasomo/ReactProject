import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import Modal from "../Modal";
import { navLinks } from "../../data/navLinks";

function Navigation() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="mt-[20px] flex items-center justify-between">
      <ul className="flex items-center border-[1px] bg-[#F2F4F7] border-[#E4E7EC] h-[40px] w-auto py-[10px] gap-[4px]">
        {navLinks.map((link, index) => (
          <li key={index}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "h-[32px] w-auto px-[16px] py-[10px] flex items-center justify-center border duration-500 bg-white text-[#667085] font-[500] text-[14px] leading-[19px]"
                  : "h-[32px] w-auto px-[16px] py-[10px] flex items-center justify-center border duration-500  text-[#667085] font-[500] text-[14px] hover:bg-white leading-[19px]"
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Modal toggle */}
      <button
        onClick={() => setOpenModal(!openModal)}
        className=" w-auto h-[40px] px-[20px] flex items-center justify-center gap-[8px] font-Inter font-[500] text-[14px] leading-[19px] text-[#ffffff] bg-[#20236F] shadow-md rounded-[8px]"
        type="button"
      >
        <FiPlus />
        Create New
      </button>

      {openModal && <Modal openModal={openModal} setOpenModal={setOpenModal} />}
    </div>
  );
}

export default Navigation;
