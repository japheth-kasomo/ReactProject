import React from "react";
import { useNavigate } from "react-router-dom";
import { Dropdown, Space } from "antd";
import useAuth from "../hooks/useAuth";
import user from "../assets/container.png";

const ClickProfile = () => {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  const logout = () => {
    localStorage.clear();
    setAuth({});
    navigate("/");
  };

  const items = [
    {
      label: "User Profile",
      key: "0",
    },
    {
      label: "Account Settings",
      key: "1",
    },
    {
      label: "Support",
      key: "3",
    },
    {
      label: "Logout",
      key: "4",
      onClick: logout,
    },
  ];
  return (
    <Dropdown menu={{ items }} trigger={["click"]} className="cusror-pointer">
      <Space style={{ cursor: "pointer" }}>
        {auth?.user?.firstname}
        {auth?.user?.lastname}
        <img src={user} alt="" className="w-[40px] h-[40px] rounded-full" />
      </Space>
    </Dropdown>
  );
};

export default ClickProfile;
