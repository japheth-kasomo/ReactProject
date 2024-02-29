import React, { useState } from "react";
import { AiFillMessage } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { GoBellFill } from "react-icons/go";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Outlet } from "react-router-dom";
import user from "../assets/container.png";
import logoPic from "../assets/fleet-1.png";
import logo from "../assets/fleet-2.png";
import SideBar from "./SideBar";
import ClickProfile from "./profile";

const Layout = () => {
  // react hook
  const [toggleOpen, setToggleOpen] = useState(true);

  // sidebar toggle
  const toggle = () => {
    setToggleOpen(!toggleOpen);
  };

  return (
    <>
      <div className=" w-full flex h-auto">
        <aside
          id="menubar"
          className={
            toggleOpen
              ? "w-[320px] h-screen sticky top-0 overflow-y-scroll border-[1px] border-[#E4E7EC]"
              : "w-[80px] h-screen sticky top-0 overflow-y-scroll border-[1px] border-[#E4E7EC]"
          }
        >
          <div className="flex items-center justify-between">
            <div className="p-[16px] flex items-center justify-center">
              {toggleOpen ? (
                <img src={logoPic} alt="" />
              ) : (
                <img src={logo} alt="" className="w-[30px] h-[40px]" />
              )}
            </div>
            <div
              onClick={toggle}
              className="bg-[#E4E7EC] w-[16px] h-[40px] flex items-center justify-center rounded-tl-[10px] rounded-bl-[10px]"
            >
              {toggleOpen ? (
                <MdChevronLeft className="text-[16px] text-[#344054]" />
              ) : (
                <MdChevronRight className="text-[16px] text-[#344054]" />
              )}
            </div>
          </div>

          <div className="">
            <SideBar toggleOpen={toggleOpen} />
          </div>
        </aside>

        {/* outlet file here */}
        <div className="w-full">
          <header
            className={
              toggleOpen
                ? " z-40 fixed left-[260px] top-0 right-0  bg-[#ffffff]  border-b-[1px] border-[#E4E7EC]"
                : " z-40 fixed left-[76px] top-0 right-0  bg-[#ffffff]  border-b-[1px] border-[#E4E7EC]"
            }
          >
            <div className="py-[16px] px-[32px] flex items-center justify-between">
              <div>
                <h3 className="font-Inter font-[600] text-[21px] leading-[20px] text-[#101828]">
                  Welcome back, Julie 👋
                </h3>
                <p className="font-Inter font-[400] text-[14px] leading-[20px] text-[#667085]">
                  Your dashboard details for today
                </p>
              </div>
              <div className="flex items-center gap-[24px]">
                <div className="rounded-[8px] px-[12px] flex items-center gap-[4px] bg-[#F2F4F7] w-[280px] h-[40px]">
                  <CiSearch className="w-[24px] h-[24px] text-[#667085]" />

                  <input
                    type="text"
                    placeholder="Search"
                    className="font-Inter font-[400] bg-transparent outline-none text-[14px] leading-[24px] text-[#667085]"
                  />
                </div>
                <div className="flex items-center gap-[16px]">
                  <div className="relative">
                    <button onclick="handleChangeNotification()" type="button">
                      <div className="relative flex items-center justify-center w-[40px] h-[40px]">
                        <GoBellFill className="w-[24px] h-[24px] text-[#667085]" />
                        <div className="absolute top-[3px] right-[5px] bg-[#F04438] rounded-full text-[10px] flex items-center w-[16px] h-[16px] justify-center text-[#ffffff]">
                          8
                        </div>
                      </div>
                    </button>
                  </div>

                  <button type="button">
                    <div className="relative flex items-center justify-center w-[40px] h-[40px]">
                      <AiFillMessage className="w-[24px] h-[24px] text-[#667085]" />
                      <div className="absolute top-[3px] right-[5px] bg-[#F04438] rounded-full text-[10px] flex items-center w-[16px] h-[16px] justify-center text-[#ffffff]">
                        5
                      </div>
                    </div>
                  </button>

                  <div className="justify-center">
                    <ClickProfile />
                  </div>
                </div>
              </div>
            </div>
          </header>

          <main className="bg-[#FAFAFA] mt-[73px]">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
