// @ts-nocheck 

import React, { useState } from "react";
import SpeedIcon from "@mui/icons-material/Speed";
import TuneIcon from "@mui/icons-material/Tune";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import BalanceIcon from "@mui/icons-material/Balance";
import StackedBarChartIcon from "@mui/icons-material/StackedBarChart";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

import NavItem from "./NavItem";
import { useTheme } from "../ThemeContext/ThemeContext";
import "./index.css";

const Navbar: React.FC = () => {
  const [itemClicked, setItemClicked] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [previousItemClicked, setPreviousItemClicked] = useState("");

  const [secondLevelItemClicked, setSecondLevelItemClicked] = useState("");
  const [isSecondLevelDropdownOpen, setIsSecondLevelDropdownOpen] =
    useState(false);

  const [previousSecondLevelItemClicked, setPreviousSecondLevelItemClicked] =
    useState("");

  const [activeTab, setActiveTab] = useState("GMM");


  const { isDarkMode } = useTheme();

  const handleSecondLevelDropdown = (bool: boolean, item: string) => {
    if (item !== previousSecondLevelItemClicked) {
      setIsSecondLevelDropdownOpen(true);
      setSecondLevelItemClicked(item);
      setPreviousSecondLevelItemClicked(item);
    } else {
      setIsSecondLevelDropdownOpen(bool);
      setSecondLevelItemClicked(item);
    }
  };

  const handleDropdown = (bool: boolean, item: string) => {
    if (item !== previousItemClicked) {
      setIsDropdownOpen(true);
      setItemClicked(item);
      setPreviousItemClicked(item);
      setIsSecondLevelDropdownOpen(false);
    } else {
      setIsDropdownOpen(bool);
      setItemClicked(item);
    }
  };

  const navItems = [
    { name: "Parameters", icon: TuneIcon },
    { name: "Calculations", icon: SettingsSuggestIcon },
    { name: "Ledger", icon: BalanceIcon },
    { name: "Reporting", icon: StackedBarChartIcon },
    { name: "Data Import", icon: CloudUploadIcon },
    { name: "Data Export", icon: AssignmentTurnedInIcon },
    { name: "Transition", icon: AssignmentTurnedInIcon },
  ];


  const tabs = [
    { id: "GMM", label: "GMM", roundedClass: "rounded-l-3xl" },
    { id: "PAA", label: "PAA", roundedClass: "rounded-r-3xl" },
  ];

  return (
    <div
      className={`w-[25vw] h-[90vh] pt-[2%]  ${isDarkMode ? "bg-[#333333] text-white" : "bg-[#898888] text-black"
        }`}
    >
      <div className="w-[100%] h-[5%] flex items-center justify-center px-[2%] " >
        {tabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`w-[50%] h-[100%] flex justify-center items-center text-center border border-white cursor-pointer text-md font-semibold transition-transform duration-300 ${activeTab === tab.id
                ? `bg-white text-black scale-105 ${tab.roundedClass}`
                : `bg-transparent text-white scale-100 ${tab.roundedClass}`
              }`}
            style={{
              transition: "background-color 0.3s, transform 0.3s",
            }}
          >
            <p>{tab.label}</p>
          </div>
        ))}
      </div>
      <div className="w-[100%] h-[100%] pt-[3%] ">
        <div
          className={`w-[100%] h-[10%] p-[2%] font-bold text-[#ffff] `}
        >
          <p>NAVIGATION</p>
        </div>
        <div className="w-[100%] h-[85%] mt-[5%] flex flex-wrap justify-start items-start overflow-y-scroll custom-scrollbar">
          <div className="w-[100%] h-[9%] flex justify-start my-[1%] items-center cursor-pointer">
            <SpeedIcon
              className={`ml-[5%] mr-[2%] text-[#ffff]
              `}
            />
            <p
              className={`mb-[0.5%] font-bold  text-[#ffff]`}
            >
              Dashboard
            </p>
          </div>
          {navItems.map((item) => (
            <NavItem
              key={item.name}
              navItemName={item.name}
              isDropdownOpen={isDropdownOpen}
              itemClicked={itemClicked}
              handleDropdown={handleDropdown}
              isSecondLevelDropdownOpen={isSecondLevelDropdownOpen}
              secondLevelItemClicked={secondLevelItemClicked}
              handleSecondLevelDropdown={handleSecondLevelDropdown}
              Icon={item.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;