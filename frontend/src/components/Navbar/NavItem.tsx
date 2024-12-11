import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import { useTheme } from "../ThemeContext/ThemeContext"; 

type NavItemProps = {
    navItemName: string;
    Icon: any;
    isDropdownOpen: boolean;
    itemClicked: string;
    handleDropdown: (open: boolean, name: string) => void;
    isSecondLevelDropdownOpen: boolean;
    secondLevelItemClicked: string;
    handleSecondLevelDropdown: (open: boolean, name: string) => void;
};

const NavItem: React.FC<NavItemProps> = ({
    navItemName,
    Icon,
    isDropdownOpen,
    itemClicked,
    handleDropdown,
    isSecondLevelDropdownOpen,
    secondLevelItemClicked,
    handleSecondLevelDropdown,
}) => {
    const secondLevelItems = [
        "Configurations",
        "Portfolio",
        "Cohort",
        "Profit Bucket",
        "Unit of Accounts",
        "Sensitivities",
        "Mapping",
    ];

    const secondLevelItemsForCalculation = [
        "New Session",
        "Pending for Approval",
        "Session History",
        "Calculation History",
    ];

    const { isDarkMode } = useTheme(); 

    return (
        <>
            <div
                className="w-[100%] h-[9%] flex justify-start items-center my-[1%] cursor-pointer navitem"
                onClick={() => handleDropdown(!isDropdownOpen, navItemName)}
            >
                {isDropdownOpen && itemClicked === navItemName ? (
                    <ExpandMoreIcon
                        className="mr-[2%] text-[#ffff] navitem-icon"
                    />
                ) : (
                    <ChevronRightIcon
                        className="mr-[2%] text-[#ffff] navitem-icon"
                    />
                )}
                {Icon && <Icon className="mr-[2%] text-[#ffff] navitem-icon" />}
                <p className={`mb-[0.5%] font-bold text-[#ffff] navitem-text`}>{navItemName}</p>
            </div>
            {isDropdownOpen && itemClicked === navItemName && (
                <div
                    className={`w-[100%] "h-[fit-content]"
                        } flex flex-wrap justify-start items-start`}
                >
                    {navItemName === "Calculations"
                        ? renderCalculationItems()
                        : navItemName === "Reporting"
                        ? renderReportingItems()
                        : secondLevelItems.map((item) => renderSecondLevelItem(item))}
                </div>
            )}
        </>
    );

    function renderSecondLevelItem(name: string) {
        return (
            <div
                key={name}
                className="w-[100%] h-[2rem] my-[1%] flex justify-start items-center cursor-pointer second-level-item"
                onClick={() => handleSecondLevelDropdown(!isSecondLevelDropdownOpen, name)}
            >
                {isSecondLevelDropdownOpen && secondLevelItemClicked === name ? (
                    <ExpandMoreIcon className="mr-[2%] ml-[5%] text-[#ffff] second-level-icon" />
                ) : (
                    <ChevronRightIcon className="mr-[2%] ml-[5%] text-[#ffff] second-level-icon" />
                )}
                <p className="mb-[0.5%] font-bold text-[#ffff] second-level-text">{name}</p>
            </div>
        );
    }

    function renderCalculationItems() {
        return secondLevelItemsForCalculation.map((name) => (
            <div
                key={name}
                className="w-[100%] h-[2rem] my-[1%] flex justify-start items-center second-level-item ml-[8%] "
            >
                <Link
                    className="second-level-link ml-[5%] text-[#ffff] font-bold"
                    to={
                        name === "New Session"
                            ? "/calculations/new-session"
                            : name === "Pending for Approval"
                            ? "/calculations/pending-approval"
                            : name === "Session History"
                            ? "/calculations/session-history"
                            : name === "Calculation History"
                            ? "/calculations/calculation-history"
                            : ""
                    }
                >
                    {name}
                </Link>
            </div>
        ));
    }

    function renderReportingItems() {
        return (
            <div
                className="w-[100%] h-[fit-content] my-[1%] flex justify-start items-center second-level-item ml-[8%]"
            >
                <Link
                    className="second-level-link ml-[5%] text-[#ffff] font-bold"
                    to="/reporting/financial-statements"
                >
                    Financial Statements
                </Link>
            </div>
        );
    }
};

export default NavItem;
