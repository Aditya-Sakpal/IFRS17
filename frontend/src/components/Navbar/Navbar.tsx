import React, { useState } from "react";
import SpeedIcon from "@mui/icons-material/Speed";
import TuneIcon from "@mui/icons-material/Tune";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import BalanceIcon from "@mui/icons-material/Balance";
import StackedBarChartIcon from "@mui/icons-material/StackedBarChart";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

import NavItem from "./NavItem";
import { useTheme } from "../ThemeContext/ThemeContext"; // Import the ThemeContext
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

  const { isDarkMode } = useTheme(); // Use the theme state

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

  return (
    <div
      className={`w-[25vw] h-[90vh] pt-[5%] ${
        isDarkMode ? "bg-[#333333] text-white" : "bg-[#e5e4e4] text-black"
      }`}
    >
      <div className="w-[100%] h-[100%]">
        <div
          className={`w-[100%] h-[10%] p-[2%] font-bold ${
            isDarkMode ? "text-[#f0d78a]" : "text-[#b7a85d]"
          }`}
        >
          <p>NAVIGATION</p>
        </div>
        <div className="w-[100%] h-[85%] mt-[5%] flex flex-wrap justify-start items-start overflow-y-scroll custom-scrollbar">
          <div className="w-[100%] h-[9%] flex justify-start my-[1%] items-center cursor-pointer">
            <SpeedIcon
              className={`ml-[5%] mr-[2%] ${
                isDarkMode ? "text-[#c1c1c1]" : "text-[#a9acac]"
              }`}
            />
            <p
              className={`mb-[0.5%] font-bold ${
                isDarkMode ? "text-[#c1c1c1]" : "text-[#a9acac]"
              }`}
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