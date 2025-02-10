// @ts-nocheck
import React from 'react';
import Swal from 'sweetalert2';
import { useTheme } from '../ThemeContext/ThemeContext'; // Import the ThemeContext hook
import './index.css';

const NewSession: React.FC = () => {
  const { isDarkMode } = useTheme(); // Access the theme context
  const [csvFile, setCsvFile] = React.useState<File | null>(null);
  const [runName, setRunName] = React.useState<string>(''); // State for run name
  const [reportingDate, setReportingDate] = React.useState<string>(
    new Date().toISOString().split('T')[0]
  ); // Default to today's date

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setCsvFile(file);
  };

  const handleRunNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRunName(e.target.value); // Update run name state
  };

  const handleReportingDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReportingDate(e.target.value); // Update reporting date state
  };

  const validateCSV = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      const res = await fetch('https://ifrs17-backend.onrender.com/api/validate_csv', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      return {status : res.status, validationData : data }
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to validate the CSV file. Please try again.',
      });
    }
  };

  const uploadCsv = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!csvFile || !runName.trim() || !reportingDate.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Missing Input',
        text: 'Please select a CSV file, provide a run name, and select a reporting date.',
      });
      return;
    }

    const response = await validateCSV(csvFile);

    if(response.status !== 200){
      console.log(response);
      Swal.fire({
        icon: 'error',
        title: 'Validation Failed',
        text: `The CSV file is invalid. ${response.validationData.error} `,
      });
      return;
    }

    const confirmation = await Swal.fire({
      title: 'Confirm Upload',
      text: 'Are you sure you want to upload this file?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    });
    
    if (!confirmation.isConfirmed) {
      return;
    }

    const formData = new FormData();
    formData.append('file', csvFile);
    formData.append('run_name', runName); // Add run name to form data
    formData.append('reporting_date', reportingDate); // Add reporting date

    Swal.fire({
      title: 'Uploading...',
      text: 'Please wait while your file is being uploaded.',
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const res = await fetch('https://ifrs17-backend.onrender.com/api/insert_new_run', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      localStorage.setItem(data['run_id'], data['data']);

      Swal.close(); // Close the loading popup

      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Uploaded',
          text: 'CSV file uploaded successfully.',
        });
      } else {
        const errorMsg = await res.text();
        Swal.fire({
          icon: 'error',
          title: 'Upload Failed',
          text: errorMsg || 'An error occurred during the upload.',
        });
      }
    } catch (err) {
      Swal.close(); // Close the loading popup in case of error
      console.error(err);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to upload the file. Please try again.',
      });
    }
  };

  return (
    <div
      className={`w-[100%] h-[100%] border border-gray-400  ${
        isDarkMode ? 'bg-[#4f4e4e] text-white' : 'bg-[#f5f5f5] text-black'
      } border-black`}
    >
      <div className="w-[100%] h-[10%] flex flex-col justify-center">
        <p className="text-3xl ml-[2%]">Upload CSV</p>
      </div>
      <div className="w-[100%] h-[90%]">
        <form
          className="w-[100%] h-[100%] flex flex-col justify-start items-start pl-[1.5%]"
          onSubmit={uploadCsv}
        >
          <input
            type="text"
            placeholder="Enter Run Name"
            value={runName}
            onChange={handleRunNameChange}
            className={`w-[30%] h-[5%] mb-4 p-[2%] rounded-md ${
              isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'
            }`}
          />
          <input
            type="date"
            value={reportingDate}
            onChange={handleReportingDateChange}
            className={`w-[30%] mb-4 p-[2%] rounded-md cursor-pointer ${
              isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'
            }`}
          />
          <input
            type="file"
            accept=".csv"
            className={`w-[30%] mb-4 p-[2%] rounded-md cursor-pointer ${
              isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'
            }`}
            onChange={handleFileChange}
          />
          <button
            className={`${
              isDarkMode ? 'bg-blue-700' : 'bg-blue-500'
            } text-white w-[20%] p-[1%] rounded-lg`}
            type="submit"
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewSession;