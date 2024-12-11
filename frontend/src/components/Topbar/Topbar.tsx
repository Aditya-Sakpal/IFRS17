import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import Switch from '@mui/material/Switch';
import { useTheme } from '../ThemeContext/ThemeContext';

const Topbar: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div
      className={`w-[100vw] h-[10vh] flex justify-between items-center ${
        isDarkMode ? 'bg-[#4f4e4e]' : 'bg-[#f5f5f5]'
      }`}
    >
      {/* Logo Section */}
      <div
        className={`w-[15%] h-[100%] text-white ml-[2%] flex justify-center items-center font-bold ${
          isDarkMode ? 'bg-black' : 'bg-gray-300 text-black'
        }`}
      >
        <p>Logo and Product Name</p>
      </div>

      {/* Right Section */}
      <div className="w-[25%] h-[100%] ml-[2%] flex justify-center items-center font-bold mr-[2%]">
        {/* Light/Dark Mode Switch */}
        <div className="w-[20%] h-[100%] flex items-center justify-center">
          <Switch
            checked={isDarkMode}
            onChange={toggleTheme}
            color="default"
            inputProps={{ 'aria-label': 'Toggle theme' }}
          />
        </div>

        {/* User Icon and Username */}
        <PersonIcon
          className={`!w-[10%] !h-[50%] ${
            isDarkMode ? 'text-white' : 'text-black'
          }`}
        />
        <div
          className={`w-[70%] h-[90%] flex justify-center items-center text-center ${
            isDarkMode ? 'bg-white text-black' : 'bg-gray-200 text-black'
          }`}
        >
          Username
        </div>
      </div>
    </div>
  );
};

export default Topbar;