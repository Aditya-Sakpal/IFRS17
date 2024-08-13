import React from 'react'
import PersonIcon from '@mui/icons-material/Person';

const Topbar:React.FC = () => {
  return (
    <>
    <div className='w-[100vw] h-[10vh] bg-black flex justify-between items-center ' >
        <div className='w-[15%] h-[100%] bg-white ml-[2%] flex justify-center items-center font-bold ' >
            <p>Logo and Product Name</p>
        </div>

        <div className='w-[15%] h-[100%]  ml-[2%] flex justify-center items-center font-bold mr-[2%] ' >
          <PersonIcon className='text-white !w-[20%] !h-[50%] ' />
          <div className='w-[80%] h-[90%] bg-white flex justify-center items-center text-center ' >
            Username
          </div>
        </div>
    </div>
    </>
  )
}

export default Topbar