import React from 'react'
import Topbar from './components/Topbar/Topbar'
import Navbar from './components/Navbar/Navbar'
import AppRouter from './components/Routes/Router'
import { ThemeProvider } from './components/ThemeContext/ThemeContext'

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider>
        <Topbar />
        <div className='w-[100vw] h-[90vh] flex bg-[#2d3035] ' >
          <Navbar />
          <AppRouter />
        </div>
      </ThemeProvider>
    </>
  )
}

export default App