// @ts-nocheck 

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useTheme } from '../ThemeContext/ThemeContext';
import { Parser } from '@json2csv/plainjs';


const SessionHistory: React.FC = () => {
  const [sessions, setSessions] = useState<{ Run_ID: string; Run_Name: string; Reporting_Date: string }[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [filteredSessions, setFilteredSessions] = useState<{ Run_ID: string; Run_Name: string; Reporting_Date: string }[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCalculation, setSelectedCalculation] = useState<any>(null);
  const [selectedTable, setSelectedTable] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>("IFRS17");
  const [tableData, setTableData] = useState<any>({});

  const IFRS17_tables = [
    'Coverage_Units_Rec',
    'Actual_Cashflow',
    'Liability_Init_Rec',
    'Rec_BEL',
    'Rec_AcqExpMor',
    'Stat_Profloss',
    'Rec_RA',
    'Rec_CSM',
    'Rec_TotContLiab'
  ];



  // Add these console logs to verify data
  const getFilteredTableData = () => {
    console.log('Selected Table:', selectedTable);
    console.log('Selected Calculation:', selectedCalculation);
    console.log('Table Data:', tableData);

    if (!selectedTable || !selectedCalculation) return [];

    const table = tableData[selectedCalculation.Run_ID][selectedTable] || [];

    const columns_to_exclude = [
      "index",
      "Run_ID",
      "Active_Flag",
      "Created_By",
      "Created_Date",
      "Modified_By",
      "Modified_Date",
    ]

    return table.map((row: any) => {
      const filteredRow: { [key: string]: any } = {};
      Object.keys(row).forEach((key) => {
        if (!columns_to_exclude.includes(key)) {
          filteredRow[key] = row[key];
        }
      });
      return filteredRow;
    });
  };

  useEffect(() => {
    setFilteredSessions(
      sessions.filter((session) =>
        session.Run_Name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, sessions]);

  // Access the theme context
  const { isDarkMode } = useTheme();
  const [tableLoading, setTableLoading] = useState(false);


  useEffect(() => {
    const fetchSessionHistory = async () => {
      try {
        const response = await axios.get('https://ifrs17-backend.onrender.com/api/get_session_history');
        console.log('API Response:', response.data);

        if (!response.data.sessions || !response.data.sessionData) {
          throw new Error('Invalid data structure received from API');
        }

        setSessions(response.data.sessions);
        setTableData(response.data.sessionData);
        setError(null);
      } catch (err: any) {
        console.error('Error fetching session history:', err);
        setError(err.response?.data?.message || 'Error fetching session history');
      } finally {
        setLoading(false);
      }
    };

    fetchSessionHistory();
  }, []);

  const getIFRS4TableName = (ifrs17TableName: string): string => {
    return `IFRS4_${ifrs17TableName}`;
  };

  const getComparisonData = () => {
    if (!selectedTable || !selectedCalculation) return { ifrs17: [], ifrs4: [] };

    const ifrs17Data = tableData[selectedCalculation.Run_ID]?.[selectedTable] || [];

    const ifrs4TableName = getIFRS4TableName(selectedTable);
    const ifrs4Data = tableData[selectedCalculation.Run_ID]?.[ifrs4TableName] || [];

    return { ifrs17: ifrs17Data, ifrs4: ifrs4Data };
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
    let data: any[] = [];

    // Determine which data to export based on the active tab
    if (activeTab === "IFRS17 vs IFRS4") {
      const { ifrs17, ifrs4 } = getComparisonData();
      if (!ifrs17.length || !ifrs4.length) return;

      const excludedColumns = [
        "index",
        "Run_ID",
        "Active_Flag",
        "Created_By",
        "Created_Date",
        "Modified_By",
        "Modified_Date",
      ];

      const columns = Object.keys(ifrs17[0]).filter(
        (col) => !excludedColumns.includes(col) && !isNaN(ifrs17[0][col])
      );

      data = ifrs17.map((row17, index) => {
        const row4 = ifrs4[index] || {};
        const diffRow: { [key: string]: any } = { ...row17, "Source": "IFRS17" };

        columns.forEach((col) => {
          if (typeof row17[col] === "number" && typeof row4[col] === "number") {
            diffRow[`${col}_Difference`] = row17[col] - row4[col];
          }
        });

        return diffRow;
      });
    } else {
      data = getFilteredTableData();
    }

    if (!data.length) return;

    const parser = new Parser();
    const csv = parser.parse(data);

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.href = url;
    link.setAttribute('download', `${selectedTable}_${activeTab}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  const renderTable = (data: any[]) => {
    console.log('Rendering table with data:', data);

    if (!data.length) {
      console.log('No data to render');
      return <div>No data found</div>;
    }

    // Get column names and filter out unwanted ones
    const filteredColumns = Object.keys(data[0]).filter(
      (col) => col !== "Run_ID" && !col.endsWith("_ID") && col.toLowerCase() !== "index"
    );

    console.log('Filtered columns:', filteredColumns);

    // Transpose the data: each column becomes a row
    const transposedData = filteredColumns.map((col) => {
      const rowData = [col, ...data.map((row) => {
        const value = row[col];
        // Format numbers to 2 decimal places
        return typeof value === 'number' ? value.toFixed(2) : value;
      })];
      console.log(`Transposed row for ${col}:`, rowData);
      return rowData;
    });

    return (
      <div className="w-[90vw] overflow-x-auto">
        <table className={`table-auto border-collapse border w-full ${isDarkMode ? 'border-gray-700' : 'border-gray-400'}`}>
          <thead>
            <tr className={`${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}`}>
              <th className={`border px-4 py-2 sticky left-0 z-10 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                Time Period
              </th>
              {data.map((_, index) => (
                <th key={index} className="border px-4 py-2">
                  {index + 1}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {transposedData.map((row, rowIndex) => (
              <tr key={rowIndex} className={isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-100'}>
                {row.map((value, colIndex) => (
                  <td
                    key={colIndex}
                    className={`border px-4 py-2 ${colIndex === 0
                      ? `sticky left-0 z-10 font-semibold ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`
                      : ''
                      }`}
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };




  const renderComparisonView = () => {
    const { ifrs17, ifrs4 } = getComparisonData();

    console.log('IFRS17 Data:', ifrs17, 'IFRS4 Data:', ifrs4);

    // Columns to exclude from the comparison
    const excludedColumns = [
      "index",
      "Run_ID",
      "Active_Flag",
      "Created_By",
      "Created_Date",
      "Modified_By",
      "Modified_Date",
    ];

    // Filter relevant columns and compute differences
    const computeDifferences = () => {
      if (!ifrs17.length || !ifrs4.length) return [];

      // Get the relevant columns (excluding unwanted ones)
      const columns = Object.keys(ifrs17[0]).filter(
        (col) => !excludedColumns.includes(col) && !isNaN(ifrs17[0][col])
      );

      const differences = ifrs17.map((row17, index) => {
        const row4 = ifrs4[index] || {};
        const diffRow: { [key: string]: any } = {};

        columns.forEach((col) => {
          if (typeof row17[col] === "number" && typeof row4[col] === "number") {
            diffRow[col] = row17[col] - row4[col];
          }
        });

        return diffRow;
      });

      return differences;
    };

    const differences = computeDifferences();

    return (
      <div className="overflow-x-auto">
        <h3 className="text-lg font-bold mb-2">Differences Between IFRS17 and IFRS4</h3>
        {renderTable(differences)}
      </div>
    );
  };


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const tabs = ["IFRS17", "IFRS4", "IFRS17 vs IFRS4"];




  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div
      className={`w-full h-full p-4 ${isDarkMode ? 'bg-[#333] text-white' : 'bg-[#f9f9f9] text-black'
        }`}
    >
      <h2 className="text-xl h-[5%] font-bold mb-4">Session History</h2>
      <input
        type="text"
        placeholder="Filter by Run Name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={`w-full p-2 mb-4 border ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300'}`}
      />
      {filteredSessions.length === 0 ? (
        <div>No sessions found for today's date</div>
      ) : (
        <div className="w-full h-[95%] overflow-hidden">
          <table className={`table-auto border-collapse border w-full ${isDarkMode ? 'border-gray-700' : 'border-gray-400'}`}>
            <thead className={`h-[10%] ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}`}>
              <tr>
                <th className="border px-4 py-2 w-[40%]">Run ID</th>
                <th className="border px-4 py-2 w-[30%]">Run Name</th>
                <th className="border px-4 py-2 w-[30%]">Reporting Date</th>
              </tr>
            </thead>
          </table>
          <div className="h-[90%] overflow-y-scroll">
            <table className={`table-auto border-collapse border  w-full ${isDarkMode ? 'border-gray-700' : 'border-gray-400'}`}>
              <tbody>
                {filteredSessions.map((session) => (
                  <tr
                    key={session.Run_ID}
                    className={`cursor-pointer ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                    onClick={() => setSelectedCalculation(session)}
                  >
                    <td className="border px-4 py-2 w-[40%]">{session.Run_ID}</td>
                    <td className="border px-4 py-2 w-[30%]">{session.Run_Name}</td>
                    <td className="border px-4 py-2 w-[30%]">{session.Reporting_Date}</td>
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
            className={`p-6 rounded shadow-lg ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">
                Run ID: {selectedCalculation.Run_ID}, Run Name: {selectedCalculation.Run_Name}
              </h3>
              {selectedTable && (
                <div className="w-[60%] h-[100%] flex justify-end items-center">
                  <div className="w-[80%] h-[100%] flex justify-center items-center">
                    {tabs.map((tab) => (
                      <div
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`w-[20%] h-[100%] border border-white flex text-md justify-center items-center text-center font-semibold mx-[1%] cursor-pointer rounded-tl-2xl rounded-tr-2xl transition-transform duration-300 ${activeTab === tab
                          ? "bg-white scale-110 text-black"
                          : "bg-transparent scale-100 text-white"
                          }`}
                      >
                        <p>{tab}</p>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={downloadCSV}
                    className={`px-4 py-2 rounded ${isDarkMode ? 'bg-blue-400' : 'bg-blue-500'} text-white hover:bg-blue-600`}
                  >
                    Download CSV
                  </button>
                </div>
              )}
            </div>

            <label className="block mb-4">
              Select a Table:
              <select
                value={selectedTable || ''}
                onChange={handleDropdownChange}
                className="border px-2 py-1 ml-2 text-black"
              >
                <option value="">--Select--</option>
                {IFRS17_tables.map((table) => (
                  <option key={table} value={table}>
                    {table}
                  </option>
                ))}
              </select>
            </label>

            {selectedTable && (
              <div className="w-[90vw] overflow-y-auto" style={{ maxHeight: '80vh' }}>
                {tableLoading ? (
                  <div className="flex justify-center items-center h-32">
                    <div>Loading table data...</div>
                  </div>
                ) : activeTab === "IFRS17 vs IFRS4" ? (
                  renderComparisonView()
                ) : (
                  renderTable(getFilteredTableData())
                )}
              </div>
            )}
          </div>
        </div>
      )}


    </div>
  );
};

export default SessionHistory;