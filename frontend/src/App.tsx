// @ts-nocheck 

import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Topbar from './components/Topbar/Topbar';
import Navbar from './components/Navbar/Navbar';
import AppRouter from './components/Routes/Router';
import { ThemeProvider } from './components/ThemeContext/ThemeContext';

const App: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');

    // Redirect if the user is not authenticated
    if (isAuthenticated !== 'true' && location.pathname !== '/auth') {
      navigate('/auth');
    }
  }, [navigate, location.pathname]);

  // Conditionally render components based on the current route
  const shouldShowLayout = location.pathname !== '/auth';

  return (
    <ThemeProvider>
      {shouldShowLayout && <Topbar />}
      {shouldShowLayout ? (
        <div className='w-[100vw] h-[90vh] flex bg-[#2d3035]'>
          <Navbar />
          <AppRouter />
        </div>
      ) : (
        <AppRouter />
      )}
    </ThemeProvider>
  );
};

export default App;