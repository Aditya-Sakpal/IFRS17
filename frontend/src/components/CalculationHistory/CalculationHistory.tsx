import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Parser } from '@json2csv/plainjs';
import { useTheme } from '../ThemeContext/ThemeContext';

const CalculationHistory: React.FC = () => {
    const { isDarkMode } = useTheme();

    const [calculationHistory, setCalculationHistory] = useState<{ Run_ID: string; Run_Name: string; Reporting_Date: string }[]>([]);
    const [tableData, setTableData] = useState<any>({});
    const [selectedCalculation, setSelectedCalculation] = useState<any>(null);
    const [selectedTable, setSelectedTable] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const tables = [
        'Coverage_Units_Rec',
        'Actual_Cashflow',
        'Liability_Init_Rec',
        'Rec_BEL',
        'Rec_RA',
        'Rec_CSM',
        'Rec_TotContLiab',
        'Rec_AcqExpMor',
        'Stat_Profloss',
    ];

    useEffect(() => {
        const fetchCalculationHistory = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/get_calculation_history');
                const { Run, ...tableData } = response.data.calculationHistory || {};
                setCalculationHistory(Run || []);
                setTableData(tableData || {});
                setError(null);
            } catch (err: any) {
                setError(err.response?.data?.message || 'Error fetching calculation history');
            } finally {
                setLoading(false);
            }
        };
        fetchCalculationHistory();
    }, []);

    const getFilteredTableData = () => {
        if (selectedTable && selectedCalculation) {
            return tableData[selectedTable]?.filter(
                (row: any) => row.Run_ID === selectedCalculation.Run_ID
            ) || [];
        }
        return [];
    };

    const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedTable(e.target.value);
    };

    const handleClickOutside = (e: any) => {
        if (e.target.id === 'popup-overlay') {
            setSelectedCalculation(null);
            setSelectedTable(null);
        }
    };

    const downloadCSV = () => {
        const data = getFilteredTableData();
        if (!data.length) return;

        const parser = new Parser();
        const csv = parser.parse(data);

        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.href = url;
        link.setAttribute('download', `${selectedTable || 'table_data'}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div
            className={`w-full h-full p-4 ${
                isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
            }`}
        >
            <h2 className="text-xl h-[5%] font-bold mb-4">Calculation History</h2>
            {calculationHistory.length === 0 ? (
                <div>No calculations found</div>
            ) : (
                <div className="w-full h-[95%] overflow-hidden">
                    <table
                        className={`table-auto border-collapse border w-full ${
                            isDarkMode ? 'border-gray-700' : 'border-gray-400'
                        }`}
                    >
                        <thead className="h-[10%]">
                            <tr className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                                <th className="border px-4 py-2 w-[40%]">Run ID</th>
                                <th className="border px-4 py-2 w-[30%]">Run Name</th>
                                <th className="border px-4 py-2 w-[30%]">Reporting Date</th>
                            </tr>
                        </thead>
                    </table>
                    <div className="h-[90%] overflow-y-scroll">
                        <table className="table-auto border-collapse border w-full">
                            <tbody>
                                {calculationHistory.map((calculation) => (
                                    <tr
                                        key={calculation.Run_ID}
                                        onClick={() => setSelectedCalculation(calculation)}
                                        className={`cursor-pointer ${
                                            isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
                                        }`}
                                    >
                                        <td className="border px-4 py-2 w-[40%]">
                                            {calculation.Run_ID}
                                        </td>
                                        <td className="border px-4 py-2 w-[30%]">
                                            {calculation.Run_Name}
                                        </td>
                                        <td className="border px-4 py-2 w-[30%]">
                                            {calculation.Reporting_Date}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {selectedCalculation && (
                <div
                    id="popup-overlay"
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                    onClick={handleClickOutside}
                >
                    <div
                        className={`p-6 rounded shadow-lg ${
                            isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'
                        }`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-bold">
                                Run ID: {selectedCalculation.Run_ID}, Run Name: {selectedCalculation.Run_Name}
                            </h3>
                            {selectedTable && getFilteredTableData().length > 0 && (
                                <button
                                    onClick={downloadCSV}
                                    className={`px-4 py-2 rounded ${
                                        isDarkMode ? 'bg-blue-400' : 'bg-blue-500'
                                    } text-white hover:bg-blue-600`}
                                >
                                    Download CSV
                                </button>
                            )}
                        </div>

                        <label className="block mb-4">
                            Select a Table:
                            <select
                                value={selectedTable || ''}
                                onChange={handleDropdownChange}
                                className="border px-2 py-1 ml-2"
                            >
                                <option value="">--Select--</option>
                                {tables.map((table) => (
                                    <option key={table} value={table}>
                                        {table}
                                    </option>
                                ))}
                            </select>
                        </label>

                        {selectedTable && (
                            <div className="w-[90vw] overflow-y-auto" style={{ maxHeight: '80vh' }}>
                                {getFilteredTableData().length > 0 ? (
                                    <table
                                        className={`table-auto border-collapse border w-full ${
                                            isDarkMode ? 'border-gray-700' : 'border-gray-400'
                                        }`}
                                    >
                                        <thead>
                                            <tr className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                                                {Object.keys(getFilteredTableData()[0]).map((col) => (
                                                    <th key={col} className="border px-4 py-2">
                                                        {col}
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {getFilteredTableData().map((row, index) => (
                                                <tr key={index}>
                                                    {Object.values(row).map((value, colIndex) => (
                                                        <td
                                                            key={colIndex}
                                                            className="border px-4 py-2"
                                                        >
                                                            {value}
                                                        </td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                ) : (
                                    <div>No data found for {selectedTable}</div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CalculationHistory;
