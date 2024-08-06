import React from 'react'

const Topbar:React.FC = () => {
  return (
    <>
    <div className='w-[100vw] h-[10vh] bg-black flex justify-between items-center ' >
        <div className='w-[15%] h-[100%] bg-white ml-[2%] flex justify-center items-center font-bold ' >
            <p>Logo and Product Name</p>
        </div>
        <div className='w-[15%] h-[100%] border border-white ml-[2%] flex justify-center items-center font-bold mr-[2%] ' ></div>
    </div>
    </>
  )
}

export default Topbar