import React, { useState } from "react";
import SpeedIcon from "@mui/icons-material/Speed";
import TuneIcon from "@mui/icons-material/Tune";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import BalanceIcon from "@mui/icons-material/Balance";
import StackedBarChartIcon from "@mui/icons-material/StackedBarChart";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Navbar: React.FC = () => {
  const [itemClicked, setItemClicked] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [secondLevelItemClicked, setSecondLevelItemClicked] = useState("");
  const [isSecondLevelDropdownOpen, setIsSecondLevelDropdownOpen] =
    useState(false);

  const handleSecondLevelDropdown = (bool:boolean,item: string) => {
    setIsSecondLevelDropdownOpen(bool);
    setSecondLevelItemClicked(item);
  };

  const handleDropdown = (bool:boolean,item: string) => {
    setIsDropdownOpen(bool);
    setItemClicked(item);
  };

  return (
    <>
      <div className="w-[25vw] h-[90vh] bg-[#181919] pt-[5%]">
        <div className="w-[100%] h-[100%] ">
          <div className="w-[100%] h-[10%]  p-[2%] font-bold text-[#b7a85d] ">
            <p>NAVIGATION</p>
          </div>
          <div className="w-[100%] h-[85%] mt-[5%]  flex flex-wrap justify-start items-start overflow-y-scroll ">
            <div className="w-[100%] h-[9%]  flex justify-start my-[1%] items-center ">
              <SpeedIcon className="ml-[5%] mr-[2%] text-white " />
              <p className="mb-[0.5%] font-bold text-white ">Dashboard</p>
            </div>
            <div className="w-[100%]  h-[9%]  flex justify-start items-center my-[1%] ">
              {isDropdownOpen && itemClicked === "Parameters" ? (
                <ExpandMoreIcon
                  className="mr-[2%] text-white cursor-pointer "
                  onClick={() => handleDropdown(false,"Parameters")}
                />
              ) : (
                <ChevronRightIcon
                  className="mr-[2%] text-white cursor-pointer "
                  onClick={() => handleDropdown(true,"Parameters")}
                />
              )}
              <TuneIcon className="mr-[2%] text-white " />
              <p className="mb-[0.5%] font-bold text-white ">Parameters</p>
            </div>
            {isDropdownOpen && itemClicked === "Parameters" && (
              <div
                className={`w-[100%]  {isSecondLevelDropdownOpen ? 'h-[fit-content]' : 'h-[50%]'  } flex flex-wrap justify-start items-start `}
              >
                <div className="w-[100%]  h-[2rem]  flex justify-start items-center">
                  {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Configurations" ? (
                    <ExpandMoreIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() =>
                        handleSecondLevelDropdown(false,"Configurations")
                      }
                    />
                  ) : (
                    <ChevronRightIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() =>
                        handleSecondLevelDropdown(true,"Configurations")
                      }
                    />
                  )}
                  <p className="mb-[0.5%] font-bold text-white ">
                    Configurations
                  </p>
                </div>
                {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Configurations" && (
                    <div className="w-[100%]  h-[5rem]  flex flex-col justify-start items-center">
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Configuration 1
                      </div>
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Configuration 2
                      </div>
                    </div>
                  )}
                <div className="w-[100%]    h-[2rem]  flex justify-start items-center">
                  {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Portfolio" ? (
                    <ExpandMoreIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(false,"Portfolio")}
                    />
                  ) : (
                    <ChevronRightIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(true,"Portfolio")}
                    />
                  )}
                  <p className="mb-[0.5%] font-bold text-white ">Portfolio</p>
                </div>
                {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Portfolio" && (
                    <div className="w-[100%]  h-[5rem]  flex flex-col justify-start items-center">
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Portfolio 1
                      </div>
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Portfolio 2
                      </div>
                    </div>
                  )}
                <div className="w-[100%]   h-[2rem]  flex justify-start items-center">
                  {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Cohort" ? (
                    <ExpandMoreIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(false,"Cohort")}
                    />
                  ) : (
                    <ChevronRightIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(true,"Cohort")}
                    />
                  )}
                  <p className="mb-[0.5%] font-bold text-white ">Cohort</p>
                </div>
                {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Cohort" && (
                    <div className="w-[100%]  h-[5rem]  flex flex-col justify-start items-center">
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Cohort 1
                      </div>
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Cohort 2
                      </div>
                    </div>
                  )}
                <div className="w-[100%]   h-[2rem] flex justify-start items-center">
                  {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Profit Bucket" ? (
                    <ExpandMoreIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(false,"Profit Bucket")}
                    />
                  ) : (
                    <ChevronRightIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(true,"Profit Bucket")}
                    />
                  )}
                  <p className="mb-[0.5%] font-bold text-white ">
                    Profit Bucket
                  </p>
                </div>
                {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Profit Bucket" && (
                    <div className="w-[100%]  h-[5rem]  flex flex-col justify-start items-center">
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Profit Bucket 1
                      </div>
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Profit Bucket 2
                      </div>
                    </div>
                  )}
                <div className="w-[100%]   h-[2rem] flex justify-start items-center">
                  {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Unit of Accounts" ? (
                    <ExpandMoreIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() =>
                        handleSecondLevelDropdown(false,"Unit of Accounts")
                      }
                    />
                  ) : (
                    <ChevronRightIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() =>
                        handleSecondLevelDropdown(true,"Unit of Accounts")
                      }
                    />
                  )}
                  <p className="mb-[0.5%] font-bold text-white ">
                    Unit of Accounts
                  </p>
                </div>
                {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Unit of Accounts" && (
                    <div className="w-[100%]  h-[5rem]  flex flex-col justify-start items-center">
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Unit of Accounts 1
                      </div>
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Unit of Accounts 2
                      </div>
                    </div>
                  )}
                <div className="w-[100%]  h-[2rem] flex justify-start items-center">
                  {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Sensitivities" ? (
                    <ExpandMoreIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(false,"Sensitivities")}
                    />
                  ) : (
                    <ChevronRightIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(true,"Sensitivities")}
                    />
                  )}
                  <p className="mb-[0.5%] font-bold text-white ">
                    Sensitivities
                  </p>
                </div>
                {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Sensitivities" && (
                    <div className="w-[100%]  h-[5rem]  flex flex-col justify-start items-center">
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Sensitivities 1
                      </div>
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Sensitivities 2
                      </div>
                    </div>
                  )}
                <div className="w-[100%]   h-[2rem]  flex justify-start items-center">
                  {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Mapping" ? (
                    <ExpandMoreIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(false,"Mapping")}
                    />
                  ) : (
                    <ChevronRightIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(true,"Mapping")}
                    />
                  )}
                  <p className="mb-[0.5%] font-bold text-white ">Mapping</p>
                </div>
                {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Mapping" && (
                    <div className="w-[100%]  h-[5rem]  flex flex-col justify-start items-center">
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Mapping 1
                      </div>
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Mapping 2
                      </div>
                    </div>
                  )}
              </div>
            )}
            <div className="w-[100%]  h-[9%]  flex justify-start items-center my-[2%] ">
              {isDropdownOpen && itemClicked === "Calculations" ? (
                <ExpandMoreIcon
                  className="mr-[2%] text-white cursor-pointer "
                  onClick={() => handleDropdown(false,"Calculations")}
                />
              ) : (
                <ChevronRightIcon
                  className="mr-[2%] text-white cursor-pointer "
                  onClick={() => handleDropdown(true,"Calculations")}
                />
              )}
              <SettingsSuggestIcon className="mr-[2%] text-white " />
              <p className="mb-[0.5%] font-bold text-white ">Calculations</p>
            </div>
            {isDropdownOpen && itemClicked === "Calculations" && (
              <div
                className={`w-[100%]  {isSecondLevelDropdownOpen ? 'h-[fit-content]' : 'h-[50%]'  } flex flex-wrap justify-start items-start `}
              >
                <div className="w-[100%]  h-[2rem]  flex justify-start items-center">
                  {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Configurations" ? (
                    <ExpandMoreIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() =>
                        handleSecondLevelDropdown(false,"Configurations")
                      }
                    />
                  ) : (
                    <ChevronRightIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() =>
                        handleSecondLevelDropdown(true,"Configurations")
                      }
                    />
                  )}
                  <p className="mb-[0.5%] font-bold text-white ">
                    Configurations
                  </p>
                </div>
                {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Configurations" && (
                    <div className="w-[100%]  h-[5rem]  flex flex-col justify-start items-center">
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Configuration 1
                      </div>
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Configuration 2
                      </div>
                    </div>
                  )}
                <div className="w-[100%]    h-[2rem]  flex justify-start items-center">
                  {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Portfolio" ? (
                    <ExpandMoreIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(false,"Portfolio")}
                    />
                  ) : (
                    <ChevronRightIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(true,"Portfolio")}
                    />
                  )}
                  <p className="mb-[0.5%] font-bold text-white ">Portfolio</p>
                </div>
                {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Portfolio" && (
                    <div className="w-[100%]  h-[5rem]  flex flex-col justify-start items-center">
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Portfolio 1
                      </div>
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Portfolio 2
                      </div>
                    </div>
                  )}
                <div className="w-[100%]   h-[2rem]  flex justify-start items-center">
                  {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Cohort" ? (
                    <ExpandMoreIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(false,"Cohort")}
                    />
                  ) : (
                    <ChevronRightIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(true,"Cohort")}
                    />
                  )}
                  <p className="mb-[0.5%] font-bold text-white ">Cohort</p>
                </div>
                {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Cohort" && (
                    <div className="w-[100%]  h-[5rem]  flex flex-col justify-start items-center">
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Cohort 1
                      </div>
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Cohort 2
                      </div>
                    </div>
                  )}
                <div className="w-[100%]   h-[2rem] flex justify-start items-center">
                  {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Profit Bucket" ? (
                    <ExpandMoreIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(false,"Profit Bucket")}
                    />
                  ) : (
                    <ChevronRightIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(true,"Profit Bucket")}
                    />
                  )}
                  <p className="mb-[0.5%] font-bold text-white ">
                    Profit Bucket
                  </p>
                </div>
                {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Profit Bucket" && (
                    <div className="w-[100%]  h-[5rem]  flex flex-col justify-start items-center">
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Profit Bucket 1
                      </div>
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Profit Bucket 2
                      </div>
                    </div>
                  )}
                <div className="w-[100%]   h-[2rem] flex justify-start items-center">
                  {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Unit of Accounts" ? (
                    <ExpandMoreIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() =>
                        handleSecondLevelDropdown(false,"Unit of Accounts")
                      }
                    />
                  ) : (
                    <ChevronRightIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() =>
                        handleSecondLevelDropdown(true,"Unit of Accounts")
                      }
                    />
                  )}
                  <p className="mb-[0.5%] font-bold text-white ">
                    Unit of Accounts
                  </p>
                </div>
                {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Unit of Accounts" && (
                    <div className="w-[100%]  h-[5rem]  flex flex-col justify-start items-center">
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Unit of Accounts 1
                      </div>
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Unit of Accounts 2
                      </div>
                    </div>
                  )}
                <div className="w-[100%]  h-[2rem] flex justify-start items-center">
                  {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Sensitivities" ? (
                    <ExpandMoreIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(false,"Sensitivities")}
                    />
                  ) : (
                    <ChevronRightIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(true,"Sensitivities")}
                    />
                  )}
                  <p className="mb-[0.5%] font-bold text-white ">
                    Sensitivities
                  </p>
                </div>
                {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Sensitivities" && (
                    <div className="w-[100%]  h-[5rem]  flex flex-col justify-start items-center">
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Sensitivities 1
                      </div>
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Sensitivities 2
                      </div>
                    </div>
                  )}
                <div className="w-[100%]   h-[2rem]  flex justify-start items-center">
                  {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Mapping" ? (
                    <ExpandMoreIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(false,"Mapping")}
                    />
                  ) : (
                    <ChevronRightIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(true,"Mapping")}
                    />
                  )}
                  <p className="mb-[0.5%] font-bold text-white ">Mapping</p>
                </div>
                {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Mapping" && (
                    <div className="w-[100%]  h-[5rem]  flex flex-col justify-start items-center">
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Mapping 1
                      </div>
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Mapping 2
                      </div>
                    </div>
                  )}
              </div>
            )}
            <div className="w-[100%]  h-[9%]   flex justify-start items-center  my-[2%]">
              {isDropdownOpen && itemClicked === "Ledger" ? (
                <ExpandMoreIcon
                  className="mr-[2%] text-white cursor-pointer "
                  onClick={() => handleDropdown(false,"Ledger")}
                />
              ) : (
                <ChevronRightIcon
                  className="mr-[2%] text-white cursor-pointer "
                  onClick={() => handleDropdown(true,"Ledger")}
                />
              )}
              <BalanceIcon className="mr-[2%] text-white " />
              <p className="mb-[0.5%] font-bold text-white ">Ledger</p>
            </div>
            {isDropdownOpen && itemClicked === "Ledger" && (
              <div
                className={`w-[100%]  {isSecondLevelDropdownOpen ? 'h-[fit-content]' : 'h-[50%]'  } flex flex-wrap justify-start items-start `}
              >
                <div className="w-[100%]  h-[2rem]  flex justify-start items-center">
                  {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Configurations" ? (
                    <ExpandMoreIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() =>
                        handleSecondLevelDropdown(false,"Configurations")
                      }
                    />
                  ) : (
                    <ChevronRightIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() =>
                        handleSecondLevelDropdown(true,"Configurations")
                      }
                    />
                  )}
                  <p className="mb-[0.5%] font-bold text-white ">
                    Configurations
                  </p>
                </div>
                {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Configurations" && (
                    <div className="w-[100%]  h-[5rem]  flex flex-col justify-start items-center">
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Configuration 1
                      </div>
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Configuration 2
                      </div>
                    </div>
                  )}
                <div className="w-[100%]    h-[2rem]  flex justify-start items-center">
                  {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Portfolio" ? (
                    <ExpandMoreIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(false,"Portfolio")}
                    />
                  ) : (
                    <ChevronRightIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(true,"Portfolio")}
                    />
                  )}
                  <p className="mb-[0.5%] font-bold text-white ">Portfolio</p>
                </div>
                {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Portfolio" && (
                    <div className="w-[100%]  h-[5rem]  flex flex-col justify-start items-center">
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Portfolio 1
                      </div>
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Portfolio 2
                      </div>
                    </div>
                  )}
                <div className="w-[100%]   h-[2rem]  flex justify-start items-center">
                  {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Cohort" ? (
                    <ExpandMoreIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(false,"Cohort")}
                    />
                  ) : (
                    <ChevronRightIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(true,"Cohort")}
                    />
                  )}
                  <p className="mb-[0.5%] font-bold text-white ">Cohort</p>
                </div>
                {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Cohort" && (
                    <div className="w-[100%]  h-[5rem]  flex flex-col justify-start items-center">
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Cohort 1
                      </div>
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Cohort 2
                      </div>
                    </div>
                  )}
                <div className="w-[100%]   h-[2rem] flex justify-start items-center">
                  {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Profit Bucket" ? (
                    <ExpandMoreIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(false,"Profit Bucket")}
                    />
                  ) : (
                    <ChevronRightIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(true,"Profit Bucket")}
                    />
                  )}
                  <p className="mb-[0.5%] font-bold text-white ">
                    Profit Bucket
                  </p>
                </div>
                {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Profit Bucket" && (
                    <div className="w-[100%]  h-[5rem]  flex flex-col justify-start items-center">
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Profit Bucket 1
                      </div>
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Profit Bucket 2
                      </div>
                    </div>
                  )}
                <div className="w-[100%]   h-[2rem] flex justify-start items-center">
                  {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Unit of Accounts" ? (
                    <ExpandMoreIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() =>
                        handleSecondLevelDropdown(false,"Unit of Accounts")
                      }
                    />
                  ) : (
                    <ChevronRightIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() =>
                        handleSecondLevelDropdown(true,"Unit of Accounts")
                      }
                    />
                  )}
                  <p className="mb-[0.5%] font-bold text-white ">
                    Unit of Accounts
                  </p>
                </div>
                {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Unit of Accounts" && (
                    <div className="w-[100%]  h-[5rem]  flex flex-col justify-start items-center">
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Unit of Accounts 1
                      </div>
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Unit of Accounts 2
                      </div>
                    </div>
                  )}
                <div className="w-[100%]  h-[2rem] flex justify-start items-center">
                  {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Sensitivities" ? (
                    <ExpandMoreIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(false,"Sensitivities")}
                    />
                  ) : (
                    <ChevronRightIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(true,"Sensitivities")}
                    />
                  )}
                  <p className="mb-[0.5%] font-bold text-white ">
                    Sensitivities
                  </p>
                </div>
                {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Sensitivities" && (
                    <div className="w-[100%]  h-[5rem]  flex flex-col justify-start items-center">
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Sensitivities 1
                      </div>
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Sensitivities 2
                      </div>
                    </div>
                  )}
                <div className="w-[100%]   h-[2rem]  flex justify-start items-center">
                  {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Mapping" ? (
                    <ExpandMoreIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(false,"Mapping")}
                    />
                  ) : (
                    <ChevronRightIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(true,"Mapping")}
                    />
                  )}
                  <p className="mb-[0.5%] font-bold text-white ">Mapping</p>
                </div>
                {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Mapping" && (
                    <div className="w-[100%]  h-[5rem]  flex flex-col justify-start items-center">
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Mapping 1
                      </div>
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Mapping 2
                      </div>
                    </div>
                  )}
              </div>
            )}
            <div className="w-[100%]  h-[9%]  flex justify-start items-center my-[2%] ">
              {isDropdownOpen && itemClicked === "Reporting" ? (
                <ExpandMoreIcon
                  className="mr-[2%] text-white cursor-pointer "
                  onClick={() => handleDropdown(false,"Reporting")}
                />
              ) : (
                <ChevronRightIcon
                  className="mr-[2%] text-white cursor-pointer "
                  onClick={() => handleDropdown(true,"Reporting")}
                />
              )}
              <StackedBarChartIcon className=" mr-[2%] text-white " />
              <p className="mb-[0.5%] font-bold text-white ">Reporting</p>
            </div>
            {isDropdownOpen && itemClicked === "Reporting" && (
              <div
                className={`w-[100%]  {isSecondLevelDropdownOpen ? 'h-[fit-content]' : 'h-[50%]'  } flex flex-wrap justify-start items-start `}
              >
                <div className="w-[100%]  h-[2rem]  flex justify-start items-center">
                  {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Configurations" ? (
                    <ExpandMoreIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() =>
                        handleSecondLevelDropdown(false,"Configurations")
                      }
                    />
                  ) : (
                    <ChevronRightIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() =>
                        handleSecondLevelDropdown(true,"Configurations")
                      }
                    />
                  )}
                  <p className="mb-[0.5%] font-bold text-white ">
                    Configurations
                  </p>
                </div>
                {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Configurations" && (
                    <div className="w-[100%]  h-[5rem]  flex flex-col justify-start items-center">
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Configuration 1
                      </div>
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Configuration 2
                      </div>
                    </div>
                  )}
                <div className="w-[100%]    h-[2rem]  flex justify-start items-center">
                  {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Portfolio" ? (
                    <ExpandMoreIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(false,"Portfolio")}
                    />
                  ) : (
                    <ChevronRightIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(true,"Portfolio")}
                    />
                  )}
                  <p className="mb-[0.5%] font-bold text-white ">Portfolio</p>
                </div>
                {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Portfolio" && (
                    <div className="w-[100%]  h-[5rem]  flex flex-col justify-start items-center">
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Portfolio 1
                      </div>
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Portfolio 2
                      </div>
                    </div>
                  )}
                <div className="w-[100%]   h-[2rem]  flex justify-start items-center">
                  {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Cohort" ? (
                    <ExpandMoreIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(false,"Cohort")}
                    />
                  ) : (
                    <ChevronRightIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(true,"Cohort")}
                    />
                  )}
                  <p className="mb-[0.5%] font-bold text-white ">Cohort</p>
                </div>
                {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Cohort" && (
                    <div className="w-[100%]  h-[5rem]  flex flex-col justify-start items-center">
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Cohort 1
                      </div>
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Cohort 2
                      </div>
                    </div>
                  )}
                <div className="w-[100%]   h-[2rem] flex justify-start items-center">
                  {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Profit Bucket" ? (
                    <ExpandMoreIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(false,"Profit Bucket")}
                    />
                  ) : (
                    <ChevronRightIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(true,"Profit Bucket")}
                    />
                  )}
                  <p className="mb-[0.5%] font-bold text-white ">
                    Profit Bucket
                  </p>
                </div>
                {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Profit Bucket" && (
                    <div className="w-[100%]  h-[5rem]  flex flex-col justify-start items-center">
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Profit Bucket 1
                      </div>
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Profit Bucket 2
                      </div>
                    </div>
                  )}
                <div className="w-[100%]   h-[2rem] flex justify-start items-center">
                  {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Unit of Accounts" ? (
                    <ExpandMoreIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() =>
                        handleSecondLevelDropdown(false,"Unit of Accounts")
                      }
                    />
                  ) : (
                    <ChevronRightIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() =>
                        handleSecondLevelDropdown(true,"Unit of Accounts")
                      }
                    />
                  )}
                  <p className="mb-[0.5%] font-bold text-white ">
                    Unit of Accounts
                  </p>
                </div>
                {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Unit of Accounts" && (
                    <div className="w-[100%]  h-[5rem]  flex flex-col justify-start items-center">
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Unit of Accounts 1
                      </div>
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Unit of Accounts 2
                      </div>
                    </div>
                  )}
                <div className="w-[100%]  h-[2rem] flex justify-start items-center">
                  {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Sensitivities" ? (
                    <ExpandMoreIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(false,"Sensitivities")}
                    />
                  ) : (
                    <ChevronRightIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(true,"Sensitivities")}
                    />
                  )}
                  <p className="mb-[0.5%] font-bold text-white ">
                    Sensitivities
                  </p>
                </div>
                {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Sensitivities" && (
                    <div className="w-[100%]  h-[5rem]  flex flex-col justify-start items-center">
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Sensitivities 1
                      </div>
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Sensitivities 2
                      </div>
                    </div>
                  )}
                <div className="w-[100%]   h-[2rem]  flex justify-start items-center">
                  {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Mapping" ? (
                    <ExpandMoreIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(false,"Mapping")}
                    />
                  ) : (
                    <ChevronRightIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(true,"Mapping")}
                    />
                  )}
                  <p className="mb-[0.5%] font-bold text-white ">Mapping</p>
                </div>
                {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Mapping" && (
                    <div className="w-[100%]  h-[5rem]  flex flex-col justify-start items-center">
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Mapping 1
                      </div>
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Mapping 2
                      </div>
                    </div>
                  )}
              </div>
            )}
            <div className="w-[100%]  h-[9%]   flex justify-start items-center my-[2%]">
              {isDropdownOpen && itemClicked === "Data Import" ? (
                <ExpandMoreIcon
                  className="mr-[2%] text-white cursor-pointer "
                  onClick={() => handleDropdown(false,"Data Import")}
                />
              ) : (
                <ChevronRightIcon
                  className="mr-[2%] text-white cursor-pointer "
                  onClick={() => handleDropdown(true,"Data Import")}
                />
              )}
              <CloudUploadIcon className=" mr-[2%] text-white " />
              <p className="mb-[0.5%] font-bold text-white ">Data Import</p>
            </div>
            {isDropdownOpen && itemClicked === "Data Import" && (
              <div
                className={`w-[100%]  {isSecondLevelDropdownOpen ? 'h-[fit-content]' : 'h-[50%]'  } flex flex-wrap justify-start items-start `}
              >
                <div className="w-[100%]  h-[2rem]  flex justify-start items-center">
                  {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Configurations" ? (
                    <ExpandMoreIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() =>
                        handleSecondLevelDropdown(false,"Configurations")
                      }
                    />
                  ) : (
                    <ChevronRightIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() =>
                        handleSecondLevelDropdown(true,"Configurations")
                      }
                    />
                  )}
                  <p className="mb-[0.5%] font-bold text-white ">
                    Configurations
                  </p>
                </div>
                {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Configurations" && (
                    <div className="w-[100%]  h-[5rem]  flex flex-col justify-start items-center">
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Configuration 1
                      </div>
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Configuration 2
                      </div>
                    </div>
                  )}
                <div className="w-[100%]    h-[2rem]  flex justify-start items-center">
                  {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Portfolio" ? (
                    <ExpandMoreIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(false,"Portfolio")}
                    />
                  ) : (
                    <ChevronRightIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(true,"Portfolio")}
                    />
                  )}
                  <p className="mb-[0.5%] font-bold text-white ">Portfolio</p>
                </div>
                {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Portfolio" && (
                    <div className="w-[100%]  h-[5rem]  flex flex-col justify-start items-center">
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Portfolio 1
                      </div>
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Portfolio 2
                      </div>
                    </div>
                  )}
                <div className="w-[100%]   h-[2rem]  flex justify-start items-center">
                  {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Cohort" ? (
                    <ExpandMoreIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(false,"Cohort")}
                    />
                  ) : (
                    <ChevronRightIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(true,"Cohort")}
                    />
                  )}
                  <p className="mb-[0.5%] font-bold text-white ">Cohort</p>
                </div>
                {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Cohort" && (
                    <div className="w-[100%]  h-[5rem]  flex flex-col justify-start items-center">
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Cohort 1
                      </div>
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Cohort 2
                      </div>
                    </div>
                  )}
                <div className="w-[100%]   h-[2rem] flex justify-start items-center">
                  {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Profit Bucket" ? (
                    <ExpandMoreIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(false,"Profit Bucket")}
                    />
                  ) : (
                    <ChevronRightIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(true,"Profit Bucket")}
                    />
                  )}
                  <p className="mb-[0.5%] font-bold text-white ">
                    Profit Bucket
                  </p>
                </div>
                {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Profit Bucket" && (
                    <div className="w-[100%]  h-[5rem]  flex flex-col justify-start items-center">
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Profit Bucket 1
                      </div>
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Profit Bucket 2
                      </div>
                    </div>
                  )}
                <div className="w-[100%]   h-[2rem] flex justify-start items-center">
                  {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Unit of Accounts" ? (
                    <ExpandMoreIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() =>
                        handleSecondLevelDropdown(false,"Unit of Accounts")
                      }
                    />
                  ) : (
                    <ChevronRightIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() =>
                        handleSecondLevelDropdown(true,"Unit of Accounts")
                      }
                    />
                  )}
                  <p className="mb-[0.5%] font-bold text-white ">
                    Unit of Accounts
                  </p>
                </div>
                {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Unit of Accounts" && (
                    <div className="w-[100%]  h-[5rem]  flex flex-col justify-start items-center">
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Unit of Accounts 1
                      </div>
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Unit of Accounts 2
                      </div>
                    </div>
                  )}
                <div className="w-[100%]  h-[2rem] flex justify-start items-center">
                  {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Sensitivities" ? (
                    <ExpandMoreIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(false,"Sensitivities")}
                    />
                  ) : (
                    <ChevronRightIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(true,"Sensitivities")}
                    />
                  )}
                  <p className="mb-[0.5%] font-bold text-white ">
                    Sensitivities
                  </p>
                </div>
                {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Sensitivities" && (
                    <div className="w-[100%]  h-[5rem]  flex flex-col justify-start items-center">
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Sensitivities 1
                      </div>
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Sensitivities 2
                      </div>
                    </div>
                  )}
                <div className="w-[100%]   h-[2rem]  flex justify-start items-center">
                  {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Mapping" ? (
                    <ExpandMoreIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(false,"Mapping")}
                    />
                  ) : (
                    <ChevronRightIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(true,"Mapping")}
                    />
                  )}
                  <p className="mb-[0.5%] font-bold text-white ">Mapping</p>
                </div>
                {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Mapping" && (
                    <div className="w-[100%]  h-[5rem]  flex flex-col justify-start items-center">
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Mapping 1
                      </div>
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Mapping 2
                      </div>
                    </div>
                  )}
              </div>
            )}
            <div className="w-[100%]  h-[9%]  flex justify-start items-center  my-[2%]">
              {isDropdownOpen && itemClicked === "Data Export" ? (
                <ExpandMoreIcon
                  className="mr-[2%] text-white cursor-pointer "
                  onClick={() => handleDropdown(false,"Data Export")}
                />
              ) : (
                <ChevronRightIcon
                  className="mr-[2%] text-white cursor-pointer "
                  onClick={() => handleDropdown(true,"Data Export")}
                />
              )}
              <AssignmentTurnedInIcon className="mr-[2%] text-white " />
              <p className="mb-[0.5%] font-bold text-white ">Data Export</p>
            </div>
            {isDropdownOpen && itemClicked === "Data Export" && (
              <div
                className={`w-[100%]  {isSecondLevelDropdownOpen ? 'h-[fit-content]' : 'h-[50%]'  } flex flex-wrap justify-start items-start `}
              >
                <div className="w-[100%]  h-[2rem]  flex justify-start items-center">
                  {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Configurations" ? (
                    <ExpandMoreIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() =>
                        handleSecondLevelDropdown(false,"Configurations")
                      }
                    />
                  ) : (
                    <ChevronRightIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() =>
                        handleSecondLevelDropdown(true,"Configurations")
                      }
                    />
                  )}
                  <p className="mb-[0.5%] font-bold text-white ">
                    Configurations
                  </p>
                </div>
                {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Configurations" && (
                    <div className="w-[100%]  h-[5rem]  flex flex-col justify-start items-center">
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Configuration 1
                      </div>
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Configuration 2
                      </div>
                    </div>
                  )}
                <div className="w-[100%]    h-[2rem]  flex justify-start items-center">
                  {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Portfolio" ? (
                    <ExpandMoreIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(false,"Portfolio")}
                    />
                  ) : (
                    <ChevronRightIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(true,"Portfolio")}
                    />
                  )}
                  <p className="mb-[0.5%] font-bold text-white ">Portfolio</p>
                </div>
                {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Portfolio" && (
                    <div className="w-[100%]  h-[5rem]  flex flex-col justify-start items-center">
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Portfolio 1
                      </div>
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Portfolio 2
                      </div>
                    </div>
                  )}
                <div className="w-[100%]   h-[2rem]  flex justify-start items-center">
                  {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Cohort" ? (
                    <ExpandMoreIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(false,"Cohort")}
                    />
                  ) : (
                    <ChevronRightIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(true,"Cohort")}
                    />
                  )}
                  <p className="mb-[0.5%] font-bold text-white ">Cohort</p>
                </div>
                {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Cohort" && (
                    <div className="w-[100%]  h-[5rem]  flex flex-col justify-start items-center">
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Cohort 1
                      </div>
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Cohort 2
                      </div>
                    </div>
                  )}
                <div className="w-[100%]   h-[2rem] flex justify-start items-center">
                  {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Profit Bucket" ? (
                    <ExpandMoreIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(false,"Profit Bucket")}
                    />
                  ) : (
                    <ChevronRightIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(true,"Profit Bucket")}
                    />
                  )}
                  <p className="mb-[0.5%] font-bold text-white ">
                    Profit Bucket
                  </p>
                </div>
                {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Profit Bucket" && (
                    <div className="w-[100%]  h-[5rem]  flex flex-col justify-start items-center">
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Profit Bucket 1
                      </div>
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Profit Bucket 2
                      </div>
                    </div>
                  )}
                <div className="w-[100%]   h-[2rem] flex justify-start items-center">
                  {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Unit of Accounts" ? (
                    <ExpandMoreIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() =>
                        handleSecondLevelDropdown(false,"Unit of Accounts")
                      }
                    />
                  ) : (
                    <ChevronRightIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() =>
                        handleSecondLevelDropdown(true,"Unit of Accounts")
                      }
                    />
                  )}
                  <p className="mb-[0.5%] font-bold text-white ">
                    Unit of Accounts
                  </p>
                </div>
                {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Unit of Accounts" && (
                    <div className="w-[100%]  h-[5rem]  flex flex-col justify-start items-center">
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Unit of Accounts 1
                      </div>
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Unit of Accounts 2
                      </div>
                    </div>
                  )}
                <div className="w-[100%]  h-[2rem] flex justify-start items-center">
                  {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Sensitivities" ? (
                    <ExpandMoreIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(false,"Sensitivities")}
                    />
                  ) : (
                    <ChevronRightIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(true,"Sensitivities")}
                    />
                  )}
                  <p className="mb-[0.5%] font-bold text-white ">
                    Sensitivities
                  </p>
                </div>
                {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Sensitivities" && (
                    <div className="w-[100%]  h-[5rem]  flex flex-col justify-start items-center">
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Sensitivities 1
                      </div>
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Sensitivities 2
                      </div>
                    </div>
                  )}
                <div className="w-[100%]   h-[2rem]  flex justify-start items-center">
                  {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Mapping" ? (
                    <ExpandMoreIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(false,"Mapping")}
                    />
                  ) : (
                    <ChevronRightIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(true,"Mapping")}
                    />
                  )}
                  <p className="mb-[0.5%] font-bold text-white ">Mapping</p>
                </div>
                {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Mapping" && (
                    <div className="w-[100%]  h-[5rem]  flex flex-col justify-start items-center">
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Mapping 1
                      </div>
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Mapping 2
                      </div>
                    </div>
                  )}
              </div>
            )}
            <div className="w-[100%]  h-[9%]  flex justify-start items-center  my-[2%]">
              {isDropdownOpen && itemClicked === "Transistion" ? (
                <ExpandMoreIcon
                  className="mr-[2%] text-white cursor-pointer "
                  onClick={() => handleDropdown(false,"Transistion")}
                />
              ) : (
                <ChevronRightIcon
                  className="mr-[2%] text-white cursor-pointer "
                  onClick={() => handleDropdown(true,"Transistion")}
                />
              )}
              <SettingsSuggestIcon className=" mr-[2%] text-white " />
              <p className="mb-[0.5%] font-bold text-white ">Transistion</p>
            </div>
            {isDropdownOpen && itemClicked === "Transistion" && (
              <div
                className={`w-[100%]  {isSecondLevelDropdownOpen ? 'h-[fit-content]' : 'h-[50%]'  } flex flex-wrap justify-start items-start `}
              >
                <div className="w-[100%]  h-[2rem]  flex justify-start items-center">
                  {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Configurations" ? (
                    <ExpandMoreIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() =>
                        handleSecondLevelDropdown(false,"Configurations")
                      }
                    />
                  ) : (
                    <ChevronRightIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() =>
                        handleSecondLevelDropdown(true,"Configurations")
                      }
                    />
                  )}
                  <p className="mb-[0.5%] font-bold text-white ">
                    Configurations
                  </p>
                </div>
                {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Configurations" && (
                    <div className="w-[100%]  h-[5rem]  flex flex-col justify-start items-center">
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Configuration 1
                      </div>
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Configuration 2
                      </div>
                    </div>
                  )}
                <div className="w-[100%]    h-[2rem]  flex justify-start items-center">
                  {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Portfolio" ? (
                    <ExpandMoreIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(false,"Portfolio")}
                    />
                  ) : (
                    <ChevronRightIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(true,"Portfolio")}
                    />
                  )}
                  <p className="mb-[0.5%] font-bold text-white ">Portfolio</p>
                </div>
                {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Portfolio" && (
                    <div className="w-[100%]  h-[5rem]  flex flex-col justify-start items-center">
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Portfolio 1
                      </div>
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Portfolio 2
                      </div>
                    </div>
                  )}
                <div className="w-[100%]   h-[2rem]  flex justify-start items-center">
                  {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Cohort" ? (
                    <ExpandMoreIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(false,"Cohort")}
                    />
                  ) : (
                    <ChevronRightIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(true,"Cohort")}
                    />
                  )}
                  <p className="mb-[0.5%] font-bold text-white ">Cohort</p>
                </div>
                {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Cohort" && (
                    <div className="w-[100%]  h-[5rem]  flex flex-col justify-start items-center">
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Cohort 1
                      </div>
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Cohort 2
                      </div>
                    </div>
                  )}
                <div className="w-[100%]   h-[2rem] flex justify-start items-center">
                  {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Profit Bucket" ? (
                    <ExpandMoreIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(false,"Profit Bucket")}
                    />
                  ) : (
                    <ChevronRightIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(true,"Profit Bucket")}
                    />
                  )}
                  <p className="mb-[0.5%] font-bold text-white ">
                    Profit Bucket
                  </p>
                </div>
                {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Profit Bucket" && (
                    <div className="w-[100%]  h-[5rem]  flex flex-col justify-start items-center">
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Profit Bucket 1
                      </div>
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Profit Bucket 2
                      </div>
                    </div>
                  )}
                <div className="w-[100%]   h-[2rem] flex justify-start items-center">
                  {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Unit of Accounts" ? (
                    <ExpandMoreIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() =>
                        handleSecondLevelDropdown(false,"Unit of Accounts")
                      }
                    />
                  ) : (
                    <ChevronRightIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() =>
                        handleSecondLevelDropdown(true,"Unit of Accounts")
                      }
                    />
                  )}
                  <p className="mb-[0.5%] font-bold text-white ">
                    Unit of Accounts
                  </p>
                </div>
                {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Unit of Accounts" && (
                    <div className="w-[100%]  h-[5rem]  flex flex-col justify-start items-center">
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Unit of Accounts 1
                      </div>
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Unit of Accounts 2
                      </div>
                    </div>
                  )}
                <div className="w-[100%]  h-[2rem] flex justify-start items-center">
                  {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Sensitivities" ? (
                    <ExpandMoreIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(false,"Sensitivities")}
                    />
                  ) : (
                    <ChevronRightIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(true,"Sensitivities")}
                    />
                  )}
                  <p className="mb-[0.5%] font-bold text-white ">
                    Sensitivities
                  </p>
                </div>
                {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Sensitivities" && (
                    <div className="w-[100%]  h-[5rem]  flex flex-col justify-start items-center">
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Sensitivities 1
                      </div>
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Sensitivities 2
                      </div>
                    </div>
                  )}
                <div className="w-[100%]   h-[2rem]  flex justify-start items-center">
                  {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Mapping" ? (
                    <ExpandMoreIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(false,"Mapping")}
                    />
                  ) : (
                    <ChevronRightIcon
                      className="mr-[2%] ml-[5%] text-white cursor-pointer "
                      onClick={() => handleSecondLevelDropdown(true,"Mapping")}
                    />
                  )}
                  <p className="mb-[0.5%] font-bold text-white ">Mapping</p>
                </div>
                {isSecondLevelDropdownOpen &&
                  secondLevelItemClicked === "Mapping" && (
                    <div className="w-[100%]  h-[5rem]  flex flex-col justify-start items-center">
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Mapping 1
                      </div>
                      <div className="w-[100%]  h-[50%] ml-[40%] text-white font-bold  flex justify-start items-center">
                        Mapping 2
                      </div>
                    </div>
                  )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
