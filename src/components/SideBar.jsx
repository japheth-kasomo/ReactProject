import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { GiShipWheel } from "react-icons/gi";
import { HiOutlineNewspaper } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import {
  IoCarOutline,
  IoHomeOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import {
  LuBrain,
  LuBriefcase,
  LuDatabaseBackup,
  LuUsers2,
} from "react-icons/lu";

import { LuLandmark } from "react-icons/lu";
import { MdOutlineAnalytics } from "react-icons/md";
import { PiUsersThree } from "react-icons/pi";
import { VscRadioTower } from "react-icons/vsc";
import { Link, NavLink } from "react-router-dom";
import loadOp from "../assets/icons/open-box.png";
import percentageIcon from "../assets/icons/percent-diamond.png";
import speedTest from "../assets/icons/speed-test.png";

const SideBar = ({ toggleOpen }) => {
  // react hook
  const [isFinance, setFinance] = useState(false);
  const [isOpenCustomer, setOpenCustomer] = useState(false);

  return (
    <ul className="pb-[30px] px-[10px] space-y-[4px]">
      <li>
        <NavLink
          to="/dashboard"
          className="p-[10px] rounded-[6px] hover:bg-[#101828] hover:text-[#ffffff] duration-500 text-[#344054]  flex items-center gap-[6px]"
        >
          <IoHomeOutline className="w-[24px] h-[24px] text-[#A0AEC0] hover:text-[#ffffff]" />
          <p
            className={
              toggleOpen ? "font-[500] text-[14px] leading-[24px]" : "hidden"
            }
          >
            Dashboard
          </p>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/control-tower"
          className="flex items-center gap-[6px] p-[10px] text-[#344054] rounded-[6px] hover:bg-[#101828] duration-500 hover:text-[#ffffff]"
        >
          <VscRadioTower className="w-[24px] h-[24px] text-[#A0AEC0]" />
          <p
            className={
              toggleOpen ? "font-[500] text-[14px] leading-[24px]" : "hidden"
            }
          >
            Control Tower
          </p>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/analytics"
          className="flex items-center gap-[6px] p-[10px] text-[#344054] rounded-[6px] hover:bg-[#101828] duration-500 hover:text-[#ffffff]"
        >
          <MdOutlineAnalytics className="w-[24px] h-[24px] text-[#A0AEC0]" />
          <p
            className={
              toggleOpen ? "font-[500] text-[14px] leading-[24px]" : "hidden"
            }
          >
            Analytics
          </p>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/load-optimisation"
          className="flex items-center gap-[6px] p-[10px] text-[#344054] rounded-[6px] hover:bg-[#101828] duration-500 hover:text-[#ffffff]"
        >
          <img
            src={loadOp}
            alt=""
            className="w-[24px] h-[24px] text-[#A0AEC0]"
          />
          <p
            className={
              toggleOpen ? "font-[500] text-[14px] leading-[24px]" : "hidden"
            }
          >
            Load Optimisation
          </p>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/route-management"
          className="flex items-center gap-[6px] p-[10px] text-[#344054] rounded-[6px] hover:bg-[#101828] duration-500 hover:text-[#ffffff]"
        >
          <img src={speedTest} alt="" />

          <p
            className={
              toggleOpen ? "font-[500] text-[14px] leading-[24px]" : "hidden"
            }
          >
            Route Management
          </p>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/time-metrics"
          className="flex items-center gap-[6px] p-[10px] text-[#344054] rounded-[6px] hover:bg-[#101828] duration-500 hover:text-[#ffffff]"
        >
          <img src={speedTest} alt="" />

          <p
            className={
              toggleOpen ? "font-[500] text-[14px] leading-[24px]" : "hidden"
            }
          >
            Time-metrics
          </p>
        </NavLink>
      </li>
      <li
        className="relative p-[10px] rounded-[6px] text-[#344054] hover:bg-[#101828] duration-500 hover:text-[#ffffff]"
        onClick={() => setOpenCustomer(!isOpenCustomer)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[6px] cursor-pointer">
            <PiUsersThree className="w-[24px] h-[24px] text-[#A0AEC0]" />

            <p
              className={
                toggleOpen
                  ? "font-Inter font-[500]  tracking-tight inline-block  text-[14px] leading-[12px]"
                  : "hidden"
              }
            >
              Customer Management
            </p>
          </div>
          {toggleOpen ? (
            <>
              {isOpenCustomer ? (
                <IoIosArrowDown className="w-[20px] h-[20px] text-[#A0AEC0]" />
              ) : (
                <FaAngleRight className="w-[20px] h-[20px] text-[#A0AEC0]" />
              )}
            </>
          ) : (
            ""
          )}
        </div>
      </li>
      {toggleOpen ? (
        <>
          {isOpenCustomer && (
            <div className="duration-500 ">
              <ul>
                <li className="pl-[48px]">
                  <Link to="/" className="flex items-center ">
                    <p className="font-Inter font-[500] text-[#344054]  text-[14px] leading-[24px]">
                      Customers
                    </p>
                  </Link>
                </li>

                <li className=" relative h-auto pt-[8px]  pl-[48px] rounded-[6px]  duration-500  ">
                  <Link to={"/"} className=" flex items-center ">
                    <p className="font-Inter font-[500] text-[#344054] inline-block text-[14px] leading-[24px]">
                      Customer Reviews
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </>
      ) : (
        ""
      )}
      <li
        className="relative p-[10px] rounded-[6px] text-[#344054] hover:bg-[#101828] duration-500 hover:text-[#ffffff]"
        onClick={() => setFinance(!isFinance)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[6px] cursor-pointer">
            <LuLandmark className="w-[24px] h-[24px] text-[#A0AEC0]" />
            <p
              className={
                toggleOpen
                  ? "font-Inter font-[500]  hover:text-white  tracking-tight inline-block  text-[14px] leading-[12px]"
                  : "hidden"
              }
            >
              Finance Management
            </p>
          </div>
          {toggleOpen ? (
            <>
              {isFinance ? (
                <IoIosArrowDown className="w-[20px] h-[20px] text-[#A0AEC0]" />
              ) : (
                <FaAngleRight className="w-[20px] h-[20px] text-[#A0AEC0]" />
              )}
            </>
          ) : (
            ""
          )}
        </div>
      </li>
      {toggleOpen ? (
        <>
          {isFinance && (
            <div className="duration-500">
              <ul>
                <li className="pl-[48px]">
                  <Link to="/" className="flex items-center gap-[12px]">
                    <p className="font-Inter font-[500] text-[#344054]  text-[14px] leading-[24px]">
                      Payments
                    </p>
                  </Link>
                </li>
                <li className=" pt-[8px]  pl-[48px] ">
                  <Link to="/" className="flex items-center ">
                    <p className="font-Inter font-[500] text-[#344054]  text-[14px] leading-[24px]">
                      Driver Cash On Hand
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </>
      ) : (
        ""
      )}
      <li>
        <NavLink
          to="/inventory-manage"
          className="flex items-center gap-[6px] p-[10px] text-[#344054] rounded-[6px] hover:bg-[#101828] duration-500 hover:text-[#ffffff]"
        >
          <LuBrain className="w-[24px] h-[24px] text-[#A0AEC0]" />

          <p
            className={
              toggleOpen ? "font-[500] text-[14px] leading-[24px]" : "hidden"
            }
          >
            Inventory Management
          </p>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/returns-manage"
          className="flex items-center gap-[6px] p-[10px] text-[#344054] rounded-[6px] hover:bg-[#101828] duration-500 hover:text-[#ffffff]"
        >
          <LuDatabaseBackup className="w-[23px] h-[23px] text-[#A0AEC0]" />

          <p
            className={
              toggleOpen ? "font-[500] text-[14px] leading-[24px]" : "hidden"
            }
          >
            Returns Management
          </p>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/fleet-manage"
          className="flex items-center gap-[6px] p-[10px] text-[#344054] rounded-[6px] hover:bg-[#101828] duration-500 hover:text-[#ffffff]"
        >
          <GiShipWheel className="w-[24px] h-[24px] text-[#A0AEC0]" />
          <p
            className={
              toggleOpen ? "font-[500] text-[14px] leading-[24px]" : "hidden"
            }
          >
            Fleet Management
          </p>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/driver-manage"
          className="flex items-center gap-[6px] p-[10px] text-[#344054] rounded-[6px] hover:bg-[#101828] duration-500 hover:text-[#ffffff]"
        >
          <IoCarOutline className="w-[24px] h-[24px] text-[#A0AEC0]" />

          <p
            className={
              toggleOpen ? "font-[500] text-[14px] leading-[24px]" : "hidden"
            }
          >
            Driver Management
          </p>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/carries"
          className="flex items-center gap-[6px] p-[10px] text-[#344054] rounded-[6px] hover:bg-[#101828] duration-500 hover:text-[#ffffff]"
        >
          <LuBriefcase className="w-[24px] h-[24px] text-[#A0AEC0]" />

          <p
            className={
              toggleOpen ? "font-[500] text-[14px] leading-[24px]" : "hidden"
            }
          >
            Carries
          </p>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/reports"
          className="flex items-center gap-[6px] p-[10px] text-[#344054] rounded-[6px] hover:bg-[#101828] duration-500 hover:text-[#ffffff]"
        >
          <HiOutlineNewspaper className="w-[24px] h-[24px] text-[#A0AEC0]" />

          <p
            className={
              toggleOpen ? "font-[500] text-[14px] leading-[24px]" : "hidden"
            }
          >
            Reports
          </p>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/traffic-zones"
          className="flex items-center gap-[6px] p-[10px] text-[#344054] rounded-[6px] hover:text-[#ffffff] hover:bg-[#101828] duration-500 hover:text-[#ffffff"
        >
          <img
            src={percentageIcon}
            alt=""
            className="w-[24px] h-[24px] text-[#A0AEC0]"
          />

          <p
            className={
              toggleOpen ? "font-[500] text-[14px] leading-[24px]" : "hidden"
            }
          >
            Traffic & Zones
          </p>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/teams"
          className="flex items-center gap-[6px] p-[10px] text-[#344054] rounded-[6px] hover:bg-[#101828] duration-500 hover:text-[#ffffff]"
        >
          <LuUsers2 className="w-[24px] h-[24px] text-[#A0AEC0]" />

          <p
            className={
              toggleOpen ? "font-[500] text-[14px] leading-[24px]" : "hidden"
            }
          >
            Team
          </p>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/settings"
          className="flex items-center gap-[6px] p-[10px] text-[#344054] rounded-[6px] hover:bg-[#101828] duration-500 hover:text-[#ffffff]"
        >
          <IoSettingsOutline className="w-[24px] h-[24px] text-[#A0AEC0]" />
          <p
            className={
              toggleOpen ? "font-[500] text-[14px] leading-[24px]" : "hidden"
            }
          >
            Settings
          </p>
        </NavLink>
      </li>
    </ul>
  );
};

export default SideBar;
