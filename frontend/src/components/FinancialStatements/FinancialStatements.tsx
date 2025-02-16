// @ts-nocheck
import React, { useEffect, useState } from "react";
import axios from "axios";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { isSameDay, parseISO } from "date-fns";
import Swal from "sweetalert2"; // Import SweetAlert2

const FinancialStatements: React.FC = () => {
    const [statProfloss, setStatProfloss] = useState<any[]>([]);
    const [runs, setRuns] = useState<any[]>([]);
    const [highlightedDates, setHighlightedDates] = useState<Date[]>([]);
    const [selectedRunID, setSelectedRunID] = useState<string | null>(null);
    const [filteredStatProfloss, setFilteredStatProfloss] = useState<any[]>([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const fetchStatProfloss = async () => {
        try {
            const response = await axios.get(
                "https://ifrs17-backend.onrender.com/api/get_calculation_history"
            );
            const runData = response.data.calculationHistory.Run || [];
            const statProflossData =
                response.data.calculationHistory.Stat_Profloss || [];

            setRuns(runData);
            setStatProfloss(statProflossData);

            // Extract unique reporting dates
            const dates = runData.map((run: any) => parseISO(run.Reporting_Date));
            setHighlightedDates(dates);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchStatProfloss();
    }, []);

    // Highlight dates
    const tileClassName = ({ date }: { date: Date }) => {
        return highlightedDates.some((highlightedDate) => isSameDay(highlightedDate, date))
            ? "highlight"
            : "";
    };

    // Handle date click event
    const onDateClick = (date: Date) => {
        const selectedRun = runs.find((run: any) =>
            isSameDay(parseISO(run.Reporting_Date), date)
        );

        if (selectedRun) {
            setSelectedRunID(selectedRun.Run_ID);
            setFilteredStatProfloss(
                statProfloss.filter((record) => record.Run_ID === selectedRun.Run_ID)
            );
            setIsPopupOpen(true);
        } else {
            // Show SweetAlert popup if no run is present
            Swal.fire({
                icon: "info",
                title: "No Run Present",
                text: "No Run present for this date",
                confirmButtonColor: "#3085d6",
                confirmButtonText: "OK",
            });
        }
    };

    const columnNames = [
        "Amor_AcqCasFlo",
        "Claim_Incur",
        "Exp_Claim",
        "Exp_Expen",
        "Prof_loss",
        "Rel_CSM",
        "Rel_RA"
    ];

    return (
        <div className="w-screen h-[90vh] flex flex-col items-center justify-center bg-gray-100 p-4" onClick={() => setIsPopupOpen(false)}>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Financial Statements</h2>
            <div className="p-4 bg-white shadow-lg rounded-md" onClick={(e) => e.stopPropagation()}>
                <Calendar tileClassName={tileClassName} onClickDay={onDateClick} />
            </div>

            {/* Popup Modal */}
            {isPopupOpen && (
                <div className="absolute w-[80%] z-10 left-40 top-40 h-[fit-content] bg-white p-6 rounded-lg shadow-lg text-center overflow-hidden" onClick={(e) => e.stopPropagation()}>
                    <h3 className="text-lg font-semibold text-gray-700">
                        Financial Data for Run ID: {selectedRunID}
                    </h3>

                    {/* Scrollable Table Wrapper */}
                    <div className="h-[100%] overflow-x-auto mt-4 border border-gray-300">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr>
                                    <th className="p-2 border bg-gray-200 sticky left-0">Time Period</th>
                                    {filteredStatProfloss.map((_, index) => (
                                        <th key={index} className="p-2 border bg-gray-200">{index + 1}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {columnNames.map((colName, rowIndex) => (
                                    <tr key={rowIndex}>
                                        <td className="p-2 border bg-gray-100 font-semibold sticky left-0">{colName}</td>
                                        {filteredStatProfloss.map((record, colIndex) => (
                                            <td key={colIndex} className="p-2 border">{record[colName]}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* Tailwind Calendar Styling */}
            <style>
                {`
                    .highlight {
                        background-color: #ffcc00 !important;
                        color: black !important;
                        border-radius: 50%;
                        font-weight: bold;
                    }
                `}
            </style>
        </div>
    );
};

export default FinancialStatements;