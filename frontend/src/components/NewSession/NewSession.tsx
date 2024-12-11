import React from 'react';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';
import { useTheme } from '../ThemeContext/ThemeContext'; // Import the ThemeContext hook

const NewSession: React.FC = () => {
  const { isDarkMode } = useTheme(); // Access the theme context

  const [runName, setRunName] = React.useState<string>('naayknpanfpknepkp a raan');
  const [confId, setConfId] = React.useState<string>('ace3a15f-7306-4bb3-ad25-ab4251d6dfff');
  const [reportingDate, setReportingDate] = React.useState<string>('2024-11-27');

  const insertRun = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const runId = uuidv4();
      console.log(runId, typeof runId, reportingDate);
      const res = await fetch('http://127.0.0.1:8000/api/insert_new_run', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([
          {
            Run_ID: runId,
            Run_Name: runName,
            Conf_ID: confId,
            Reporting_Date: reportingDate,
            Created_By: 'User1',
            Created_Date: '2024-11-17 06:28:00.136046+05:30',
          },
        ]),
      });

      if (res.status === 201) {
        Swal.fire({
          icon: 'success',
          title: 'Run Created',
          text: 'Run has been created successfully',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Failed',
          text: 'Failed to create run',
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className={`w-[100%] h-[100%]  border border-gray-400 ${
        isDarkMode ? 'bg-[#4f4e4e] text-white' : 'bg-[#f5f5f5] text-black'
      } border-black`}
    >
      <div className="w-[100%] h-[10%] flex flex-col justify-center">
        <p className="text-3xl ml-[2%]">New Session</p>
      </div>
      <div className="w-[100%] h-[90%]">
        <form action="" className="w-[100%] h-[100%]" onSubmit={insertRun}>
          <div className="w-[100%] h-[20%] flex">
            <div className="w-[15%] h-[100%] flex flex-col justify-between items-start pl-[2%] py-[2%]">
              <p className="text-xl">Run Name</p>
              <input
                type="text"
                className={`w-[90%] h-[40%] rounded-md ${
                  isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'
                }`}
                value={runName}
                onChange={(e) => setRunName(e.target.value)}
              />
            </div>
            <div className="w-[15%] h-[100%] flex flex-col justify-between items-start pl-[2%] py-[2%]">
              <p className="text-xl">Conf Id</p>
              <input
                type="text"
                className={`w-[90%] h-[40%] rounded-md ${
                  isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'
                }`}
                defaultValue={confId}
                disabled={true}
              />
            </div>
            <div className="w-[15%] h-[100%] flex flex-col justify-between items-start pl-[2%] py-[2%]">
              <p className="text-xl">Reporting Date</p>
              <input
                type="date"
                className={`w-[90%] h-[40%] rounded-md ${
                  isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'
                }`}
                value={reportingDate}
                onChange={(e) => setReportingDate(e.target.value)}
              />
            </div>
          </div>
          <div className="w-[100%] h-[20%] flex flex-col justify-center pl-[2%]">
            <button
              className={`${
                isDarkMode ? 'bg-blue-700' : 'bg-blue-500'
              } text-white w-[10%] h-[30%] rounded-lg`}
              type="submit"
            >
              Run
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewSession;
