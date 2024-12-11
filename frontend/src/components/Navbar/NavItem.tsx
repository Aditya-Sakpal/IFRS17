import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

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

    return (
        <>
            <div
                className="w-[100%] h-[9%] flex justify-start items-center my-[1%] cursor-pointer navitem"
                onClick={() => handleDropdown(!isDropdownOpen, navItemName)}
            >
                {isDropdownOpen && itemClicked === navItemName ? (
                    <ExpandMoreIcon
                        className="mr-[2%] text-[#a9acac] navitem-icon"
                    />
                ) : (
                    <ChevronRightIcon
                        className="mr-[2%] text-[#a9acac] navitem-icon"
                    />
                )}
                {Icon && <Icon className="mr-[2%] text-[#a9acac] navitem-icon" />}
                <p className="mb-[0.5%] font-bold text-[#a9acac] navitem-text">{navItemName}</p>
            </div>
            {isDropdownOpen && itemClicked === navItemName && (
                <div
                    className={`w-[100%] ${isSecondLevelDropdownOpen ? "h-[fit-content]" : "h-[50%]"
                        } flex flex-wrap justify-start items-start`}
                >
                    {navItemName === "Calculations"
                        ? renderCalculationItems()
                        : secondLevelItems.map((item) => renderSecondLevelItem(item))}
                </div>
            )}
        </>
    );

    function renderSecondLevelItem(name: string) {
        return (
            <div
                key={name}
                className="w-[100%] h-[2rem] flex justify-start items-center cursor-pointer second-level-item"
                onClick={() => handleSecondLevelDropdown(!isSecondLevelDropdownOpen, name)}
            >
                {isSecondLevelDropdownOpen && secondLevelItemClicked === name ? (
                    <ExpandMoreIcon className="mr-[2%] ml-[5%] text-[#a9acac] second-level-icon" />
                ) : (
                    <ChevronRightIcon className="mr-[2%] ml-[5%] text-[#a9acac] second-level-icon" />
                )}
                <p className="mb-[0.5%] font-bold text-[#a9acac] second-level-text">{name}</p>
            </div>
        );
    }

    function renderCalculationItems() {
        return secondLevelItemsForCalculation.map((name) => (
            <div
                key={name}
                className="w-[100%] h-[2rem] flex justify-start items-center second-level-item ml-[8%] "
            >
                <Link
                    className="second-level-link ml-[5%] text-[#a9acac] font-bold"
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
};

export default NavItem;