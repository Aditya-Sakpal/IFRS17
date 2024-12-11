import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useTheme } from '../ThemeContext/ThemeContext';

const SessionHistory: React.FC = () => {
  const [sessions, setSessions] = useState<{ Run_ID: string; Run_Name: string; Reporting_Date: string }[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Access the theme context
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const fetchSessionHistory = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/get_session_history');
        setSessions(response.data.sessions || []);
        setError(null);
      } catch (err: any) {
        setError(err.response?.data?.message || 'Error fetching session history');
      } finally {
        setLoading(false);
      }
    };

    fetchSessionHistory();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div
      className={`w-full h-full p-4 ${
        isDarkMode ? 'bg-[#333] text-white' : 'bg-[#f9f9f9] text-black'
      }`}
    >
      <h2 className="text-xl h-[5%] font-bold mb-4">Session History</h2>
      {sessions.length === 0 ? (
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
            <table className={`table-auto border-collapse border w-full ${isDarkMode ? 'border-gray-700' : 'border-gray-400'}`}>
              <tbody>
                {sessions.map((session) => (
                  <tr key={session.Run_ID} className={isDarkMode ? 'bg-gray-800' : 'bg-white'}>
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
    </div>
  );
};

export default SessionHistory;
